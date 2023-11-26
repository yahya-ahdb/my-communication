import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Autocomplete,
  FormControl,
  InputAdornment,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
} from "@mui/material";
import QueueIcon from "@mui/icons-material/Queue";
import TitleIcon from "@mui/icons-material/Title";
import { useHeaders } from "../../../hooks/useHeaders";
import { useGetCoursesNameWhenBelongToTeacherQuery } from "../../../store/RtkSlices/coursesSlice";
import axios from "axios";
import { apiUrl } from "../../../constans/url";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";

const notify = () => toast.success("Created");
const notifyError = (e) => toast.error(e);
export default function AddCoursDialog() {
  const [open, setOpen] = React.useState();
  const [data, setData] = React.useState();
  const [text, setText] = React.useState();
  const [free, setFree] = React.useState("0");
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const [selectedOptionId, setSelectedOptionId] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOptionChange = (event, newValue) => {
    setSelectedOption(newValue);

    const selectedCourse = dataName.find((option) => option.name === newValue);
    if (selectedCourse) {
      setSelectedOptionId(selectedCourse.id);
    }
  };
  const headers = useHeaders();
  const { data: dataName } = useGetCoursesNameWhenBelongToTeacherQuery({
    headers,
  });
  const handleSetData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleUploadData = async () => {
    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("course_id", selectedOptionId);
    formData.append("is_free", free);
    formData.append("description", text);
    formData.append("video_link", data?.video_link);
    if (data?.title) {
      setLoading(true);
      await axios
        .post(apiUrl + "createCurriculum", formData, {
          headers: { ...headers, "Content-Type": "multipart/form-data" },
        })
        .then(() => {
          setLoading(false);
          setOpen(false);
          notify();
          window.location.reload();
        })
        .catch((e) => {
          notifyError(e.response.data.message);
          setLoading(false);
        });
    }
    {
      toast.warn("اضف عنوان للدرس");
    }
  };

  return (
    <div style={{ direction: "rtl" }}>
      <div onClick={handleClickOpen}>
        <div
          className="btn btn-warning text-white p-2 fs-5 "
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>اضافة درس</span>
          <QueueIcon />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle style={{ direction: "rtl" }}>
          اضافة درس الى الكورس
        </DialogTitle>
        <DialogContent>
          <DialogContentText dir="rtl" style={{ marginBottom: "30px" }}>
            لإضافة درس جديد الرجاء إدخال ما يلي
          </DialogContentText>
          <TextField
            dir="rtl"
            onChange={handleSetData}
            name="title"
            autoFocus
            className="mb-3"
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className="me-2" position="end">
                  {" "}
                  العنوان
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            dir="rtl"
            onChange={handleSetData}
            name="video_link"
            autoFocus
            className="mb-3"
            margin="dense"
            id="name"
            type="url"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className="me-2" position="end">
                  {" "}
                  رابط الفيديو
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
          />
          <Autocomplete
            freeSolo
            id="combo-box-demo"
            value={selectedOption}
            options={dataName?.map((option) => option.name)}
            onChange={handleOptionChange}
            renderInput={(params) => (
              <TextField
                dir="rtl"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment className="me-2" position="end">
                      {" "}
                      الكورس
                      <TitleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <div>
            <FormControl fullWidth className="mt-1">
              <InputLabel id="demo-simple-select-label">مجاني</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={free}
                label="Age"
                onChange={(e) => setFree(e.target.value)}
              >
                <MenuItem value={0}>لا</MenuItem>
                <MenuItem value={1}>نعم</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="mt-4" style={{ direction: "rtl" }}>
            <ReactQuill
              value={text}
              onChange={(html) => setText(html)}
              theme="snow"
              dir="rtl"
              modules={{
                toolbar: [
                  [
                    { font: [] },
                    { header: [1, 2, 3, false] },
                    { color: [] },
                    { background: [] },
                  ],
                  ["bold", "italic", "underline", "strike"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  ["link"],
                  [{ align: [] }],
                  ["clean"],
                ],
              }}
              formats={[
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
              ]}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            onClick={handleUploadData}
          >
            اضافة
          </Button>
          <Button color="warning" onClick={handleClose}>
            إلغاء
          </Button>
        </DialogActions>
        {loading && <LinearProgress color="info" />}
      </Dialog>
    </div>
  );
}
