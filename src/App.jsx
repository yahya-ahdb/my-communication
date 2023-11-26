import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TecherAddCourse from "./pages/Techer/pages/TecherAddCourse";

import AdminAddTecher from "./pages/Admin/pages/techers/AdminAddTecher";
import AdminAddStudent from "./pages/Admin/pages/students/AdminAddStudent";
import AdminCategories from "./pages/Admin/pages/category/AdminCategories";
import AdminCourses from "./pages/Admin/pages/courses/AdminCourses";
import EditCoursePage from "./pages/Admin/pages/courses/EditCoursePage";
import AddCoursePage from "./pages/Admin/pages/courses/AddCoursePage";
import AminAddMarketing from "./pages/Admin/pages/marketing/AminAddMarketing";

import Courses from "./pages/courses/Courses";
import Course from "./pages/courses/course/Course";
import TecherProfile from "./pages/Techer/pages/TecherProfile";
import { useEffect, useState } from "react";
import Curriculum from "./pages/curriculum/Curriculum";
import StaticPayment from "./pages/statucPayment/StatucPayment";
import Certificates from "./pages/certificates/Certificates";
import CommonQuastions from "./pages/commonQuastions/CommonQuastions";
import Workshop from "./pages/workshop/Workshop";

import AchievementsPage from "./pages/achievements/AchievementsPage";
import Achievements_Details from "./pages/achievements/Achievements-Details";
import AdminAchievements from "./pages/Admin/pages/achievements/AdminAchievements";
import AddAchievementsPage from "./pages/Admin/pages/achievements/AddAchievementsPage";
import EditAchievementsPage from "./pages/Admin/pages/achievements/EditAchievementsPage";
import ArticlesPage from "./pages/articles/ArticlesPage";
import AdminArticles from "./pages/Admin/pages/articles/AdminArticles";
import AddArticles from "./pages/Admin/pages/articles/AddArticles";
import ArticleDetails from "./pages/articles/ArticleDetails";
import EditArticle from "./pages/Admin/pages/articles/EditArticle";
import InquiryPage from "./pages/employ/pages/InquiryPage";
import AdminEmploy from "./pages/Admin/pages/employ/AdminEmploy";
import ArticlesCategory from "./pages/Admin/pages/articles/ArticlesCategory";
import ListOfPayPage from "./pages/employ/pages/ListOfPayPage";
import Forgetpassword from "./pages/forgetpassword/Forgetpassword";
import Student from "./pages/student/Student";
import Loader from "./components/utils/Loader";
import WorkShopById from "./pages/workshop/WorkShopById";
import WorkShop from "./pages/Admin/components/workshop/WorkShop";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import JoinUs from "./pages/joinUs/JoinUs";
import NoFound from "./pages/notFound/NoFound";
import EmployWorkshop from "./pages/employ/pages/EmployWorkshop";
import SendMessageAll from "./pages/Admin/pages/message/SendMessageAll";

function App() {
  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    document.onkeydown = function (e) {
      if (e.keyCode === 123) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
        e.preventDefault();
      }
    };
    
  }, []);
  const [open, setOpen] = useState(true);
  setTimeout(() => {
    setOpen(false);
  }, 3000);
  const location = useLocation();
  const currentPath = location.pathname;
  const PublicRoute = ({ children }) => {
    if (localStorage.getItem("token")) {
      return <Navigate to={"/"} />;
    } else {
      return children;
    }
  };
  const PrivteRoute = ({ children }) => {
    if (localStorage.getItem("token")) {
      return children;
    } else {
      return <Navigate to={"/"} />;
    }
  };

  const AdminRoute = ({ children }) => {
    if (
      localStorage.getItem("role") == "admin" &&
      localStorage.getItem("token")
    ) {
      return children;
    } else {
      return <Navigate to={"/"} />;
    }
  };

  const EmployeeRoute = ({ children }) => {
    if (
      localStorage.getItem("role") == "employee" &&
      localStorage.getItem("token")
    ) {
      return children;
    } else {
      return <Navigate to={"/"} />;
    }
  };

  const TecherRoute = ({ children }) => {
    if (
      localStorage.getItem("role") == "teacher" &&
      localStorage.getItem("token")
    ) {
      return children;
    } else {
      return <Navigate to={"/"} />;
    }
  };

  const StudentRoute = ({ children }) => {
    if (
      localStorage.getItem("role") == "student" &&
      localStorage.getItem("token")
    ) {
      return children;
    } else {
      return <Navigate to={"/"} />;
    }
  };
  

  return (
    <div dir="rtl">
      <div style={{ position: "fixed", bottom: 20, right: 10, zIndex: 1000 }}>
        <a target="_blank" href="https://wa.me/962778931656">
          <img src="/whatsapp.webp" width={65} />
        </a>
      </div>
      {open && <Loader />}
      {currentPath.startsWith("/admin") ||
      currentPath.startsWith("/staticPayment") ||
      currentPath.startsWith("/curriculum") ||
      currentPath.startsWith("/employ") ||
      currentPath.startsWith("/techer") ? null : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-academy" element={<About />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              {" "}
              <Login />{" "}
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              {" "}
              <Register />{" "}
            </PublicRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<Course />} />
        <Route
          path="/curriculum"
          element={
            <PrivteRoute>
              <Curriculum />{" "}
            </PrivteRoute>
          }
        />
        <Route path="/staticPayment" element={<StaticPayment />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/joinUs" element={<JoinUs />} />
        <Route path="/common-quastions" element={<CommonQuastions />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/workshop/:id" element={<WorkShopById />} />
        <Route path="/Achievements" element={<AchievementsPage />} />
        <Route
          path="/Achievements_Details"
          element={<Achievements_Details />}
        />
        <Route path="/Articles" element={<ArticlesPage />} />
        <Route path="/Articles_Details" element={<ArticleDetails />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/*" element={<NoFound />} />

        <Route
          path="/admin-courses"
          element={
            <AdminRoute>
              <AdminCourses />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-Addcourse"
          element={
            <AdminRoute>
              <AddCoursePage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-Editecourse/:id"
          element={
            <AdminRoute>
              <EditCoursePage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-category"
          element={
            <AdminRoute>
              <AdminCategories />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-AddTecher"
          element={
            <AdminRoute>
              <AdminAddTecher />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-AddMarketing"
          element={
            <AdminRoute>
              <AminAddMarketing />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-AddStudent"
          element={
            <AdminRoute>
              <AdminAddStudent />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-addEmploy"
          element={
            <AdminRoute>
              <AdminEmploy />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-Achievements"
          element={
            <AdminRoute>
              <AdminAchievements />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-AddAchievements"
          element={
            <AdminRoute>
              <AddAchievementsPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-EditAchievements"
          element={
            <AdminRoute>
              <EditAchievementsPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-Articles"
          element={
            <AdminRoute>
              <AdminArticles />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-AddArticles"
          element={
            <AdminRoute>
              <AddArticles />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-EidtArticles"
          element={
            <AdminRoute>
              <EditArticle />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-sendMessage"
          element={
            <AdminRoute>
              <SendMessageAll />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-ArticlesCategory"
          element={
            <AdminRoute>
              <ArticlesCategory />
            </AdminRoute>
          }
        />
        <Route
          path="/admin-workshop"
          element={
            <AdminRoute>
              <WorkShop />
            </AdminRoute>
          }
        />

        <Route
          path="/techer-Addcouse"
          element={
            <TecherRoute>
              <TecherAddCourse />{" "}
            </TecherRoute>
          }
        />
        <Route
          path="/techer-profile"
          element={
            <TecherRoute>
              <TecherProfile />{" "}
            </TecherRoute>
          }
        />

        <Route
          path="/employ-InquiryPage"
          element={
            <EmployeeRoute>
              {" "}
              <InquiryPage />{" "}
            </EmployeeRoute>
          }
        />
        <Route
          path="/employ-ListOfPayPage"
          element={
            <EmployeeRoute>
              {" "}
              <ListOfPayPage />{" "}
            </EmployeeRoute>
          }
        />
        <Route
          path="/employ-workshop"
          element={
            <EmployeeRoute>
              <EmployWorkshop />{" "}
            </EmployeeRoute>
          }
        />

        <Route
          path="/student"
          element={
            <StudentRoute>
              {" "}
              <Student />{" "}
            </StudentRoute>
          }
        />
      </Routes>
      {currentPath.startsWith("/admin") ||
      currentPath.startsWith("/staticPayment") ||
      currentPath.startsWith("/curriculum") ||
      currentPath.startsWith("/employ") ||
      currentPath.startsWith("/techer") ? null : (
        <Footer />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
