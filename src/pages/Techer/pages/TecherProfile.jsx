import { useState } from "react";
import LayoutTecher from "../components/LayoutTecher";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import axios from "axios";
import { apiStorge, apiUrl } from "../../../constans/url";
import { useHeaders } from "../../../hooks/useHeaders";

const notify = () => toast.success("تم التعديل بنجاح");
const notifyError = (e) => toast.error(e);

function TecherProfile() {
  const [data, setData] = useState({
    first_name : localStorage.getItem("first_name"),
    last_name : localStorage.getItem("last_name"),
    about : localStorage.getItem("about"),
  });
  const [image, setImage] = useState("");
  const [text, setText] = useState(localStorage.getItem("about"));
  const [selectImage, setSelectImage] = useState(
    localStorage.getItem("image") == "undefined/undefined" ? 
    "person.png"
    :
   (apiStorge + localStorage.getItem("image")) 
    );
  const headers = useHeaders();
  const handleSetData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleUploadData = async () => {
    try {
      const formData = new FormData();
      formData.append("first_name", data?.first_name);
      formData.append("last_name", data?.last_name);
      formData.append("about", text);
      image && formData.append("image", image);
      await axios.post(apiUrl + "updateTeacher", formData,{
        headers :{ ...headers,
          "Content-Type": "multipart/form-data"}
        }).then(()=>notify())
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.message);
    }
  };
  return (
    <div>
      <LayoutTecher
        pages={
          <div className="container">
            <div>
              <h3>الملف الشخصي</h3>
            </div>
            <div>
              <div>
                <input
                  type="file"
                  id="image"
                  hidden
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    setSelectImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                <label htmlFor="image" className="image">
                  <img src={selectImage} />
                </label>
              </div>
              <div className="mt-4 d-flex justify-content-around align-items-center flex-wrap">
                <div>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    الاسم الاول
                  </label>
                  <input
                  value={data?.first_name}
                    type="text"
                    name="first_name"
                    style={{ minWidth: "300px" }}
                    onChange={handleSetData}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    الاسم الاخير
                  </label>
                  <input
                  value={data?.last_name}
                    type="text"
                    name="last_name"
                    style={{ minWidth: "300px" }}
                    onChange={handleSetData}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
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
              <div>
                <button
                  onClick={handleUploadData}
                  className="mt-2 btn btn-warning text-white fs-5 px-3"
                >
                  ارسال
                </button>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default TecherProfile;
