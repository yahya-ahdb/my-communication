import Card from "../../components/utils/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import {
  useGetAllCoursesQuery,
  useGetFavoriteCoursesQuery,
} from "../../store/RtkSlices/coursesSlice";
import { useEffect, useState } from "react";
import { apiStorge, apiUrl } from "../../constans/url";
import { useGetAllCategoriesQuery } from "../../store/RtkSlices/adminSlice";
import { useHeaders } from "../../hooks/useHeaders";
import { Button, LinearProgress, Skeleton } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import ProposalCourses from "../Home/ProposalCourses";

function Courses() {
  //
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //
  const [newOrLast, setNewOrLast] = useState("");
  const [id, setId] = useState(1);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();
  const headers = useHeaders();
  const { data, isLoading } = useGetAllCoursesQuery({
    id: id,
    search: search ? `&for_search=${search}` : "",
    category_id: categoryId ? `&category_id=${categoryId}` : "",
    date: newOrLast ? `&date=${newOrLast}` : "",
    price: price ? `&cost=${price}` : "",
  });
  const { data: dataCategory } = useGetAllCategoriesQuery({ headers: headers });
  // contact
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhon] = useState("");
  const [message, setMessage] = useState("");
  const [loadingQuestion, setLoadingQuestion] = useState(false);
  const { data: dataFa } = useGetFavoriteCoursesQuery();
  const onQuestionSubmite = async () => {
    setLoadingQuestion(true);
    const formData = new FormData();
    if (!name || !email || !phone || !message) {
      toast.error("الرجاء إكمال جميع البيانات");
      setLoadingQuestion(false);
      return;
    }

    if (message.toString().length > 65500) {
      toast.error("رسالتك طويلة جداً الرجاء اختصار استفسارك ");
      setLoadingQuestion(false);
      return;
    }

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    await axios
      .post(apiUrl + "createQuestion", formData)
      .then(() => {
        toast.success(
          `تم ارسال رسالتك للمشرفين سوف يتم التواصل معك في اقرب وقت ممكن`
        );
        setName("");
        setEmail("");
        setPhon("");
        setMessage("");
        setLoadingQuestion(false);
      })
      .catch((err) => toast.error(err.response.data.message));
    setLoadingQuestion(false);
  };
  const scrollToTop = () => {
    const element = document.getElementById("topCourses");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <section className="about-academy">
        <div className="home-shadow"></div>
        <div
          className="container pt-5"
          style={{ position: "relative", zIndex: 5 }}
        >
          <h1 className="text-white fw-bold">الدورات</h1>
        </div>
      </section>
      {/* Our special courses */}
      <section className="container">
      <ProposalCourses />
        <h1 className="mt-5 fw-bold text-title">دوراتنا المميزة</h1>
        <div className="d-flex justify-content-between align-items-center flex-wrap"></div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper py-5"
        >
          {dataFa?.map((item) => (
            <SwiperSlide key={item?.id}>
              <Card
                image={
                  apiStorge + item?.image?.id + "/" + item?.image?.file_name
                }
                price={item?.cost}
                title={item?.name}
                level={item?.level}
                dis={+item?.discount && +item.cost - +item?.discount}
                overview={item?.overview}
                titleBtn={"شاهد المزيد"}
                eventBtn={() => navigate("/course/" + item?.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* all courses */}
      <section className="px-2 py-5 as" id="topCourses">
        <div className="d-flex justify-content-between ">
          <div
            className="p-3 container"
            style={{
              maxWidth: "320px",
              position: "relative",
              background: "#f5f5f5",
            }}
          >
            <p>فئة الدورة</p>
            <div className="d-flex align-items-center mt-3 ">
              <input
                className="form-check-input m-2"
                type="radio"
                name="radio"
                value={""}
                onChange={(e) => setCategoryId(e.target.value)}
                id={"all"}
              />
              <label htmlFor={"all"}>الجميع</label>
            </div>
            {dataCategory?.map((item, i) => (
              <div key={i} className="d-flex align-items-center mt-3 ">
                <input
                  className="form-check-input m-2"
                  type="radio"
                  name="radio"
                  value={item?.id}
                  onChange={(e) => setCategoryId(e.target.value)}
                  id={item?.value}
                />
                <label htmlFor={item?.value}>{item?.value}</label>
              </div>
            ))}
          </div>
          <div className="container">
            <div
              className="p-2 d-flex flex-wrap "
              style={{ background: "#f5f5f5" }}
            >
              <input
                style={{ maxWidth: "320px" }}
                placeholder="ابدأ البحث"
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                className="form-control"
              />
              <select
                value={newOrLast}
                onChange={(e) => setNewOrLast(e.target.value)}
                className="me-2"
              >
                <option value={""}>الاقدم</option>
                <option value={"1"}>الاحدث</option>
              </select>
              <input
                className="form-control me-2"
                style={{ maxWidth: "320px" }}
                placeholder="حسب السعر"
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            {data?.data?.length == 0 && (
              <h3 className="text-center fw-bold mt-5">Empty</h3>
            )}
            {isLoading ? (
              <section className="d-flex justify-content-between align-items-center flex-wrap py-2">
                <div className="text-center">
                  <Skeleton animation="wave" width={260} height={450} />
                </div>
                <div className="text-center">
                  <Skeleton animation="wave" width={260} height={450} />
                </div>
                <div className="text-center">
                  <Skeleton
                    animation="wave"
                    sx={{ margin: "auto" }}
                    width={260}
                    height={450}
                  />
                </div>
                <div className="text-center">
                  <Skeleton animation="wave" width={260} height={450} />
                </div>
                <div className="text-center">
                  <Skeleton animation="wave" width={260} height={450} />
                </div>
                <div className="text-center">
                  <Skeleton
                    animation="wave"
                    sx={{ margin: "auto" }}
                    width={260}
                    height={450}
                  />
                </div>
              </section>
            ) : (
              <section className="d-flex justify-content-between align-items-center flex-wrap py-2">
                {data?.data?.map((item) => (
                  <div className="mt-2" key={item?.id}>
                    <Card
                      image={
                        apiStorge +
                        item?.image?.id +
                        "/" +
                        item?.image?.file_name
                      }
                      price={item.cost}
                      dis={+item?.discount && +item.cost - +item?.discount}
                      title={item?.name}
                      level={item?.level}
                      overview={item?.overview}
                      titleBtn={"شاهد المزيد"}
                      eventBtn={() => navigate("/course/" + item?.id)}
                      openDial={true}
                      id={item?.id}
                    />
                  </div>
                ))}
              </section>
            )}
            <Button
              className="fs-4"
              disabled={id == 1 || isLoading}
              onClick={() => {
                setId(id - 1);
                scrollToTop();
              }}
            >
              {"<"}
            </Button>
            <Button
              className="fs-4"
              disabled={id == data?.last_page || isLoading}
              onClick={() => {
                setId(id + 1);
                scrollToTop();
              }}
            >
              {">"}
            </Button>
          </div>
        </div>
      </section>
      {/* send message */}
      <section className="py-5 container ">
        <h4 className="text-warning">لا تستطيع اختيار الدورة المناسبة لك؟</h4>
        <h3 className="text-title">
          تواصل مع خبراء أكاديمية اتصالاتي واحصل على استشارة مجانية
        </h3>
        <div>
          <div
            className="mt-5"
            style={{
              padding: "15px",
              boxShadow: "1px 1px 10px #ccc",
              borderRadius: "8px",
            }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                الاسم
              </label>
              <input
                disabled={loadingQuestion}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                البريد الالكتروني *
              </label>
              <input
                disabled={loadingQuestion}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                الرقم
              </label>
              <input
                disabled={loadingQuestion}
                value={phone}
                onChange={(e) => setPhon(e.target.value)}
                type="text"
                className="form-control"
                id="phone"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <textarea
                disabled={loadingQuestion}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="رسالتك"
                className="form-control"
                id="exampleFormControlTextarea1"
                style={{ minHeight: "180px" }}
              ></textarea>
            </div>
            <button
              disabled={loadingQuestion}
              onClick={onQuestionSubmite}
              className="btn btn-warning py-3 px-4 text-white"
            >
              إرسال استفسارك
            </button>
          </div>
          {loadingQuestion ? <LinearProgress /> : <div></div>}
        </div>
      </section>
    </div>
  );
}

export default Courses;
