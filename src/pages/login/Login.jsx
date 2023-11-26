import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../../constans/url";
import { toast } from "react-toastify";

const notify = () => toast.success("مرحبا");
const notifyError = (e) => toast.error(e);
function Login() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const handleSetData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleUpload = async () => {
    await axios
      .post(apiUrl + "login", data)
      .then((res) => {
        notify();
        navigate("/");
        localStorage.setItem("token", res.data.authorisation.token)
        localStorage.setItem("email", res.data.user)
        localStorage.setItem("role", res.data.role)
        localStorage.setItem("image", res.data.info?.image?.id + "/" + res.data.info?.image?.file_name )
        localStorage.setItem("first_name", res.data.info.first_name)
        localStorage.setItem("about", res.data.info?.about)
        localStorage.setItem("last_name", res.data.info.last_name )
        localStorage.setItem("name", res.data.info.first_name + " "+ res.data.info.last_name )
      })
      .catch((err) => notifyError(err.response.data.message));
  };

  return (
    <div className="py-5">
      <div className="login">
        <h3 className="text-center text-warning">
          تسجيل الدخول <i className="fa-solid fa-right-to-bracket"></i>
        </h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            البريد الالكتروني *
          </label>
          <input
            type="email"
            name="email"
            onChange={handleSetData}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            كلمة المرور
          </label>
          <input
            type="password"
            name="password"
            onChange={handleSetData}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button disabled={!data} onClick={handleUpload} type="submit" className="btn btn-warning text-white px-4 py-2">
          تسجيل
        </button>
        <div>
          <Link to="/register">
            <small>إنشاء حساب جديد</small>
          </Link>
          <br />
          <Link to="/forgetpassword">
            <small>لقد نسيت كلمة السر</small>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
