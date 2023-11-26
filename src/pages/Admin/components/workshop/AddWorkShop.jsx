import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {  InputAdornment, LinearProgress } from "@mui/material";
import QueueIcon from "@mui/icons-material/Queue";
import TitleIcon from "@mui/icons-material/Title";
import axios from "axios";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import { apiUrl } from "../../../../constans/url";
import { useHeaders } from "../../../../hooks/useHeaders";

const notify = ()=>toast.success("Created")
const notifyError = (e)=>toast.error(e)
export default function AddWorkShop() {
  const [open, setOpen] = React.useState();
  const [data, setData] = React.useState();
  const [text, setText] = React.useState();
  const [selecImage, setSelecImage] = React.useState("avatar.png");
  const [loading, setLoading] = React.useState(false);


  const [image, setimage] = React.useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
    setLoading(true)
    await axios.post(apiUrl + "createWorkshop", formData, {
       headers :{ ...headers,
        "Content-Type": "multipart/form-data",}
    }).then(()=>{
        setLoading(false)
        setOpen(false)
        notify()
        window.location.reload()
    }).catch((e)=>{notifyError(e.response.data.message);setLoading(false)})
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
          <span>اضافة ورشة</span>
          <QueueIcon />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle style={{ direction: "rtl" }}>
          اضافة ورشة 
        </DialogTitle>
        <DialogContent>
          <DialogContentText dir="rtl" style={{ marginBottom: "30px" }}>
            لإضافة ورشة جديد الرجاء إدخال ما يلي
          </DialogContentText>
          <input
            onChange={(e) =>{ setimage(e.target.files[0]); setSelecImage(URL.createObjectURL(e.target.files[0]))}}
            type="file"
            id="image"
            hidden
            accept="image/*"
          />
          <label dir="rtl" htmlFor="image" className="mt-2 image">
          <img src={selecImage} />
            <hr />
          </label>
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
            name="you_tube_link"
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
