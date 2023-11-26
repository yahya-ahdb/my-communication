import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  LinearProgress,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { useHeaders } from "../../../hooks/useHeaders";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import TitleIcon from "@mui/icons-material/Title";
import ReactQuill from "react-quill";
import axios from "axios";
import { apiUrl } from "../../../constans/url";

function EditCurriculumDialog({ dataDia, open, handleClose }) {
  const headers = useHeaders();
  const [data, setData] = useState(dataDia?.title);
  const [free, setFree] = useState(dataDia?.is_free);
  const [text, setText] = useState(dataDia?.description);
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(dataDia?.video_link);
  const hadnleUpdate = async () => {
    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("description", text);
    formData.append("is_free", free);
    formData.append("video_link", video);
    setLoading(true);
    await axios
      .post(apiUrl + "updateCurriculum/" + dataDia?.id, formData, {
       headers : { ...headers,
        "Content-Type": "multipart/form-data",}
      })
      .then(() => {
        toast.success("تم تعديل بنجاح");
        handleClose();
        window.location.reload();
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    setLoading(false);
  };

  return (
    <div style={{ direction: "ltr" }}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ direction: "rtl" }}>إنشاء تصنيف جديد</DialogTitle>
        <DialogContent dir="rtl">
          <DialogContentText
            style={{ marginBottom: "30px", minWidth: "500px" }}
          >
            لإضافة تصنيف جديد الرجاء إدخال اسم و وصف التصنيف
          </DialogContentText>
          <div className="mb-3">
            <label htmlFor="nameCourse" className="form-label">
              العنوان
            </label>
            <div className="input-group flex-nowrap flex-row-reverse">
              <input
                value={data}
                type="text"
                name="text"
                className="form-control"
                id="nameCourse"
                onChange={(e) => setData(e.target.value)}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                <TitleIcon />
              </span>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="nameCourse" className="form-label">
              رابط الفيديو
            </label>
            <div className="input-group flex-nowrap flex-row-reverse">
              <input
                value={video}
                dir="ltr"
                type="text"
                name="video"
                className="form-control"
                id="nameCourse"
                onChange={(e) => setVideo(e.target.value)}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                <TitleIcon />
              </span>
            </div>
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
                  ["link", "image"],
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
          <FormControl className="my-2">
            <Select value={free} onChange={(e) => setFree(e.target.value)}>
              <MenuItem value="0">لا</MenuItem>
              <MenuItem value="1">نعم</MenuItem>
            </Select>
          </FormControl>
          {/* <div>
          <input type="file" hidden id="video" onChange={(e)=>setVideo(e.target.files[0])} />
          <label className="fw-bold" htmlFor="video" >
            تعديل الفيديو : {console.log(video)}
          </label>
          </div> */}
        </DialogContent>
        <DialogActions>
          <Button color="warning" onClick={handleClose}>
            إلغاء
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={hadnleUpdate}
            endIcon={<EditIcon />}
          >
            تعديل
          </Button>
        </DialogActions>
        {loading ? <LinearProgress /> : <div></div>}
      </Dialog>
    </div>
  );
}

export default EditCurriculumDialog;
