import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { InputAdornment, LinearProgress } from "@mui/material";
import TitleIcon from "@mui/icons-material/Title";
import { useHeaders } from "../../../hooks/useHeaders";
import axios from "axios";
import { apiStorge, apiUrl } from "../../../constans/url";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";

const notify = () => toast.success("Created");
const notifyError = (e) => toast.error(e);
export default function UpdateWorkShop({ open, handleClose, dataDia }) {
  const [data, setData] = React.useState({
    title: dataDia?.title,
    date: dataDia?.date,
    you_tube_link: dataDia?.you_tube_link,
  });
  const [text, setText] = React.useState(dataDia?.description);
  const [selecImage, setSelecImage] = React.useState(
    dataDia?.image
      ? apiStorge + dataDia?.image?.id + "/" + dataDia?.image?.file_name
      : "person.png"
  );
  const [selecImage1, setSelecImage1] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const headers = useHeaders();
  const handleSetData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleUploadData = async () => {
    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("date", data?.image);
    formData.append("description", text);
    formData.append("you_tube_link", data?.you_tube_link);
    formData.append("image", image);
    setLoading(true);
    await axios
      .post(apiUrl + "updateWorkshop/" + dataDia?.id, formData, {
        headers: { ...headers, "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        setLoading(false);
        handleClose();
        notify();
      })
      .catch((e) => {
        notifyError(e.response.data.message);
        setLoading(false);
      });
  };
  React.useEffect(() => {
    setSelecImage1(selecImage);
  }, []);
  return (
    <div style={{ direction: "rtl" }}>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle style={{ direction: "rtl" }}>اضافة ورشة</DialogTitle>
        <DialogContent>
          <DialogContentText dir="rtl" style={{ marginBottom: "30px" }}>
            لإضافة ورشة جديد الرجاء إدخال ما يلي
          </DialogContentText>
          <input
            type="file"
            id="image"
            value={image}
            hidden
            onChange={(e) => {
              setImage(e.target.files[0]);
              setSelecImage1(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <label dir="rtl" htmlFor="image" className="mt-2 image">
            <img src={selecImage1} alt="..." />
            <hr />
          </label>
          <TextField
            dir="rtl"
            value={data?.title}
            name="title"
            onChange={handleSetData}
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
            value={data?.you_tube_link}
            name="you_tube_link"
            onChange={handleSetData}
            className="mb-3"
            margin="dense"
            id="name"
            type="url"
            placeholder="www......"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment className="me-2" position="end">
                  {" "}
                  الرابط
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
          />
          <div>
            <TextField
              fullWidth
              value={data?.date}
              name="date"
              onChange={handleSetData}
              type="datetime-local"
            />
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
            تعديل
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
