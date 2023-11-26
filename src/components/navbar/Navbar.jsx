import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <header
        className="d-flex align-items-center"
        style={{ minHeight: "55px", background: "#154875" }}
      >
        <div className="container d-flex align-items-center justify-content-around " style={{flexWrap: "wrap"}} >
          <a className="text-white" href="mailto:admin@my-communication.com">
            admin@my-communication.com
            {"    "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
          </a>
          <a className="text-white d-flex align-items-center">
            خيارك الاول في عالم التدريب لهندسة الاتصالات
          </a>
        </div>
      </header>
      <nav className="container">
        <div className="logo">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="btn-nav"  id="menuToggle" >
          <input id="checkbox"  checked={open} type="checkbox" />
          <label className="toggle" onClick={()=>setOpen(!open)} htmlFor="checkbox">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </div>
        <div className={open ? "links active" : "links"} >
          <li onClick={()=>setOpen(false)} >
            <Link to="/">الرئيسية</Link>
          </li>
          <li onClick={()=>setOpen(false)} >
            <Link to="/about-academy">عن الأكادمية</Link>
          </li>
          <li onClick={()=>setOpen(false)} >
            <Link to="/courses">الدورات</Link>
          </li>
          <li onClick={()=>setOpen(false)} >
            <Link to="/Achievements">إنجازات الاكادمية</Link>
          </li>
          <li onClick={()=>setOpen(false)} >
            <Link to="/Articles">المقالات</Link>
          </li>
          <li onClick={()=>setOpen(false)} >
            <Link to="/workshop">الورشات</Link>
          </li>
          {/* <li onClick={()=>setOpen(false)} >
            <Link to="">قاعدة المعارف</Link>
          </li> */}
          <li  >
            <a
              className="dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              الشهادات
            </a>
            <ul className="dropdown-menu p-2">
              <li onClick={()=>setOpen(false)} >
                <Link className="dropdown-item text-end " to="/certificates">
                  الاعتمادات و الشركات
                </Link>
              </li>
              <li className="my-2" onClick={()=>setOpen(false)} >
                <Link className="dropdown-item text-end " to="">
                  توثيق الشهادات
                </Link>
              </li>
              <li onClick={()=>setOpen(false)} >
                <Link className="dropdown-item text-end " to="/common-quastions">
                  الأسئلة الشائعة عم الشهادات
                </Link>
              </li>
            </ul>
          </li>
          <li onClick={()=>setOpen(false)} >
            <Link to="/contact">تواصل</Link>
          </li>
        {!localStorage.getItem("token") &&  <li onClick={()=>setOpen(false)} >
            <Link to="/login">دخول/حساب جديد</Link>
          </li>}
        {(localStorage.getItem("token") && localStorage.getItem("role")) &&  <li onClick={()=>setOpen(false)} >
            <Link to={ localStorage.getItem("role") =="admin" &&"/admin-courses" || localStorage.getItem("role") =="teacher" && "/techer-Addcouse"
            || localStorage.getItem("role") =="student" && "/student"
            || localStorage.getItem("role") =="employee" && "/employ-InquiryPage"
            }>لوحة التحكم <SpaceDashboardIcon /></Link>
          </li>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
