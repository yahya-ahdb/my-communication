import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useHeaders } from "../../../hooks/useHeaders";
import { apiStorge, apiUrl } from "../../../constans/url";

const notify = () => toast.success("تم التعديل بنجاح");
const notifyError = (e) => toast.error(e);

function StudentProfile() {
  const [data, setData] = useState({
    first_name: localStorage.getItem("first_name"),
    last_name: localStorage.getItem("last_name"),
    phone: localStorage.getItem("phone"),
  });
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [text, setText] = useState(localStorage.getItem("biographical"));
  const [selectImage, setSelectImage] = useState(
    localStorage.getItem("image") == "undefined/undefined"
      ? "person.png"
      : apiStorge + localStorage.getItem("image")
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
      formData.append("biographical", text);
      image && formData.append("image", image);
      data?.phone && formData.append("phone", data?.phone);
      data?.facebook && formData.append("facebook", data?.facebook);
      data?.youtube && formData.append("youtube", data?.youtube);
      data?.linkedin && formData.append("linkedin", data?.linkedin);
      data?.twitter && formData.append("twitter", data?.twitter);
      await axios
        .post(apiUrl + "updateStudentProfile", formData, {
          headers: { ...headers, "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          notify();
          localStorage.setItem("first_name", res.data?.first_name);
          localStorage.setItem("last_name", res.data?.last_name);
          localStorage.setItem("biographical", res.data?.biographical);
          localStorage.setItem("phone", res.data?.phone);
          res.data?.image?.id &&
            localStorage.setItem(
              "image",
              res.data?.image?.id + "/" + res.data?.image?.file_name
            );
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.message);
    }
  };
  return (
    <div>
      <div className="container py-5">
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
          <div className="d-flex justify-content-center mt-4 align-items-center mb-3 ">
            <div className="d-flex">
              <input
                onChange={() => setShow(!show)}
                type="checkbox"
                id="check"
              />
              <label className="me-1" htmlFor="check">
                معلومات اضافية
              </label>
            </div>
            <div></div>
          </div>
          {show && (
            <>
              <div className="d-flex justify-content-around  flex-wrap align-items-center mb-3 ">
                <div style={{ minWidth: "300px" }}>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    فيسبوك
                  </label>
                  <input
                    dir="ltr"
                    placeholder="www.facebook"
                    type="url"
                    name="facebook"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleSetData}
                  />
                </div>
                <div style={{ minWidth: "300px" }}>
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    تويتر
                  </label>
                  <input
                    dir="ltr"
                    placeholder="www.twitter"
                    type="url"
                    name="twitter"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={handleSetData}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-around align-items-center flex-wrap mb-3 ">
                <div style={{ minWidth: "300px" }}>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    يوتيوب
                  </label>
                  <input
                    dir="ltr"
                    placeholder="www.youtube"
                    type="url"
                    name="youtube"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleSetData}
                  />
                </div>
                <div style={{ minWidth: "300px" }}>
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    لينكداين
                  </label>
                  <input
                    dir="ltr"
                    placeholder="www.linkedin"
                    type="url"
                    name="linkedin"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={handleSetData}
                  />
                </div>
              </div>
              <div style={{ minWidth: "300px" }}>
                <label htmlFor="exampleInputPassword1" className="form-label">
                  الهاتف
                </label>
                <input
                  dir="ltr"
                  value={data?.phone}
                  placeholder="phone"
                  type="number"
                  name="phone"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={handleSetData}
                />
              </div>
            </>
          )}
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
    </div>
  );
}

export default StudentProfile;
