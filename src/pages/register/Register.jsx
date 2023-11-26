import React, { useState } from "react";
import "./register.css";
import { apiUrl } from "../../constans/url";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "react-oauth-google";

const notify = () => toast.success("تم انشاء حسابك");
const notifyError = (e) => toast.error(e);
// const clientId =
//   "97602380245-aro2uk0iq53h1hf6d3kerrca8lepm4rn.apps.googleusercontent.com";

function Register() {
  const navigate = useNavigate();
  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setSelectImage(URL.createObjectURL(e.target.files[0]));
  };
  const [gender, setGender] = useState(false);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState();
  const [selectImage, setSelectImage] = useState("person.png");
  const [data, setData] = useState();
  const handleSetData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", data?.email);
    formData.append("password", data?.password);
    formData.append("first_name", data?.first_name);
    formData.append("last_name", data?.last_name);
    data?.biographical && formData.append("biographical", data?.biographical);
    data?.facebook && formData.append("facebook", data?.facebook);
    data?.twitter && formData.append("twitter", data?.twitter);
    data?.youtube && formData.append("youtube", data?.youtube);
    formData.append("gender", gender);
    image && formData.append("image", image);
    await axios
      .post(apiUrl + "register", formData)
      .then(() => {
        notify();
        navigate("/login");
      })
      .catch((err) => notifyError(err.response.data.message));
  };
  return (
    <div className="py-5" style={{ background: "#f1f1f1c4" }}>
      <div
        className="container p-2"
        style={{ background: "#fff", boxShadow: "1px 1px 10px #ccc" }}
      >
        <h3 className="text-center">اشترك مجانا</h3>
        <form onSubmit={handleUpload}>
          <div className="image">
            <input type="file" onChange={handleImage} id="image" hidden />
            <label htmlFor="image">
              <img src={selectImage} width={150} />
            </label>
          </div>
          <div
            className="d-flex justify-content-around align-items-center mb-3 "
            style={{ flexWrap: "wrap" }}
          >
            <div style={{ minWidth: "300px" }}>
              <label htmlFor="exampleInputEmail1" className="form-label">
                الاسم الأول *
              </label>
              <input
                type="text"
                name="first_name"
                required
                className="form-control"
                id="exampleInputEmail1"
                onChange={handleSetData}
                aria-describedby="emailHelp"
              />
            </div>
            <div style={{ minWidth: "300px" }}>
              <label htmlFor="exampleInputEmail1" className="form-label">
                الاسم الأخير *
              </label>
              <input
                type="text"
                required
                className="form-control"
                id="exampleInputEmail1"
                name="last_name"
                onChange={handleSetData}
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div
            className="d-flex justify-content-around align-items-center mb-3 "
            style={{ flexWrap: "wrap" }}
          >
            <div style={{ minWidth: "300px" }}>
              <label htmlFor="exampleInputEmail1" className="form-label">
                البريد الالكتروني *
              </label>
              <input
                type="email"
                required
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleSetData}
              />
            </div>
            <div style={{ minWidth: "300px" }}>
              <label htmlFor="exampleInputPassword1" className="form-label">
                كلمة المرور
              </label>
              <input
                required
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleSetData}
              />
            </div>
          </div>
          <div className="d-flex justify-content-around align-items-center mb-3 ">
            <div style={{ minWidth: "300px" }}>
              <select
                required
                className="form-select form-select-lg mb-3"
                aria-label="Large select example"
                onChange={(e) => setGender(e.target.value)}
              >
                <option hidden>الجنس</option>
                <option value="0">ذكر</option>
                <option value="1">انثى</option>
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-around align-items-center mb-3 ">
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
              <div className="d-flex justify-content-around align-items-center mb-3 ">
                <div style={{ minWidth: "300px" }}>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="biographical"
                    onChange={handleSetData}
                    placeholder="السيرة الذاتية"
                  ></textarea>
                </div>
              </div>
            </>
          )}
          <div>
            <GoogleOAuthProvider clientId="495968315752-sts4srtgopdei3ol0tbntom09g1gmvi7.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>
          <button
            type="submit"
            className="btn btn-warning text-white px-4 py-2"
          >
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
