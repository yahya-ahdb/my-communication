import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import CommnetsHome from "./CommnetsHome";
import { useGetFavoriteCoursesQuery } from "../../store/RtkSlices/coursesSlice";
import { apiStorge } from "../../constans/url";
import Card from "../../components/utils/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import FourWorkShop from "./FourWorkShop";
import FirstComponent from "./FirstComponent";
import ProposalCourses from "./ProposalCourses";

function Home() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const navigate = useNavigate();

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
  const { data: dataFa } = useGetFavoriteCoursesQuery();
  return (
    <section data-aos="fade">
      <FirstComponent />
      {/* <section className="home">
      <div className="home-shadow"></div>
      <div
        className="d-flex justify-content-around align-items-center container content-home"
        style={{ flexWrap: "wrap" }}
      >
        <div className="video">
          <iframe
            allowFullScreen
            allowTransparency={true}
            src="https://player.vimeo.com/video/797950376?autoplay=1&playsinline=1&color&autopause=0&loop=1&muted=1&title=1&portrait=1&byline=1&h=e83aa59b08#t="
          ></iframe>
        </div>
        <div className="left container" >
          <div data-aos="fade-right" data-aos-duration="500" className="text-white mb-4" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-play-circle text-warning"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
            </svg>
            <span className="me-2" >أكاديمية MY-COMMUNICATION</span>
          </div>
          <h3 data-aos="fade" data-aos-delay="500"  className="mb-4 text-white" >
          مرحبًا بكم في المنصة الأولى في الشرق الأوسط للتدريب على هندسة الاتصالات!
          </h3>
          <h5 data-aos="fade" data-aos-delay="1000" className="mb-4 text-white" >
          نحن نعملُ على تطوير مهندس الاتصالات العربي ليتمكن من النهوض ببلده في المجال التكنولوجي.
          </h5>
          <h5 data-aos="fade" data-aos-delay="1000" className="mb-4 text-white" >
          إذ يكفي أن تمتلك العزيمة والإصرار على التعلم، لأننا سنؤمِّن لك بيئة تدريبية مرنة تساعدك على التطور.
          </h5>
          <Link to={"/courses"} >
          <button className="btn btn-warning text-white ms-3" >ابدأ الان</button>
          <span className="text-white" >الدورات المتاحة</span>
          </Link>
        </div>
        <div>
        </div>
      </div>
    </section> */}
      <div
        className="py-5 my-5 container d-flex align-items-center justify-content-around "
        style={{ flexWrap: "wrap" }}
      >
        <h3 className="fw-700" data-aos="fade-up">
          تكنولوجيا ستتقنها من خلال دوراتنا
        </h3>
        <div
          className="container d-flex justify-content-between mt-2"
          style={{ flexWrap: "wrap" }}
        >
          <img
            data-aos="fade"
            data-aos-delay="100"
            src="/home/1.png"
            className="m-auto"
            width="100"
          />
          <img
            data-aos="fade"
            data-aos-delay="500"
            src="/home/2.png"
            className="m-auto"
            width="100"
          />
          <img
            data-aos="fade"
            data-aos-delay="900"
            src="/home/3.png"
            className="m-auto"
            width="100"
          />
          <img
            data-aos="fade"
            data-aos-delay="1200"
            src="/home/4.png"
            className="m-auto"
            width="100"
          />
          <img
            data-aos="fade"
            data-aos-delay="1500"
            src="/home/5.png"
            className="m-auto"
            width="100"
          />
          <img
            data-aos="fade"
            data-aos-delay="1900"
            src="/home/6.png"
            className="m-auto"
            width="100"
          />
          <img
            data-aos="fade"
            data-aos-delay="2200"
            src="/home/7.png"
            className="m-auto"
            width="100"
          />
          <img
            data-aos="fade"
            data-aos-delay="2500"
            src="/home/8.png"
            className="m-auto"
            width="100"
          />
        </div>
      </div>
      <section className="section-tow d-flex justify-content-center align-items-center flex-warp ">
        <div className="home-shadow"></div>
        <div style={{ zIndex: 3 }}>
          <h1 className="text-warning fw-bold text-center" data-aos="fade-up">
            أهلاً بك
          </h1>
          <h2
            className="text-white fw-700 pt-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            ابدأ معنا الآن ومجاناً من خلال حضور ورشة تدريبية مجانية
          </h2>
          <div className="text-center mt-2">
            <button
              className="btn btn-warning fw-700 mt-2 text-white fs-4"
              data-aos="fade"
              data-aos-delay="700"
            >
              شاهد الويبنار المجاني
            </button>
          </div>
        </div>
      </section>
      <ProposalCourses />
      <section className="py-5 container d-flex align-items-center justify-content-between ">
        <div>
          <small className="d-block fs-4 fw-bold text-warning">
            تعرَّف على
          </small>
          <p className="fs-4 fw-bold">دورات هندسة الاتصالات المتاحة لدينا</p>
        </div>
        <p className="fs-5">
          تشمل دوراتنا باقةً متنوعةً من المجالات التي تدور في فلك هندسة
          الاتصالات.
        </p>
        <div
          style={{
            borderRight: "3px solid ",
            borderTopRightRadius: "10px",
            minHeight: "120px",
          }}
        >
        <Link to={'/courses'} >
          <button className="btn btn-warning text-white fs-5"  >
            جميع الدورات
          </button>
        </Link>
        </div>
      </section>
      <section className="container">
        <h3 className="text-title fw-bold">الدورات المميزة</h3>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <FourWorkShop />
      <section className="container my-5 py-5">
        <div className="d-flex justify-content-around align-items-center flex-wrap">
          <div className="video">
            <iframe src="https://player.vimeo.com/video/800107446?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1&h=b289bde4bf#t="></iframe>
          </div>
          <div data-aos="fade" className="get-know">
            <small className="text-warning d-block">تعرف على</small>
            <h3>دورة الطريق إلى الجيل الخامس والألياف الضوئية</h3>
            <p>
              إن مـهندس الاتـصالات الـعربـي يـبحث دائـمًا عـن مـعلومـات تـخص
              مـجال دراسـته وعـمله، إذ أنـنا جـميعًا نـطمح إلـى تـطويـر
              مـهاراتـنا ومـعلومـاتـنا الـتقنية سواء عبر دورات هندسة الاتصالات
              أو عبر التعلم الذاتي.
            </p>
            <p>
              لـذلـك ومـن هـذا المنطلق، أعـد الـمهندس إبـراهـيم إبـراهـيم عــدة
              فــيديــوهــات قــصيرة تشــرح مــعلومــات تــقنية مــهمة لأي مهندس
              اتصالات فــي عــالــم
              <span className="text-warning">
                {" "}
                هــندسة الاتــصالات المتكاملة،
              </span>
            </p>
            <p>
              لذا نــوجهكم عــند مــتابــعة هــذه الفيديوهات إلى تدوينها ضمن
              دفتر خاص لها وتسجيل كل كلمة وكل حرف يشرحه المهندس إبراهيم.
            </p>
            <p>
              لأنه حتمًا سيأتي اليوم الذي ستحتاج به هذه المعلومات وذلك عند
              تحضيرك لمقابلة العمل التي ستغير حياتك المهنية.
            </p>
            <div>
              <button className="btn btn-warning text-white fs-5 fw-bold p-2 ">
                سجل مجانا
              </button>
              <span className="me-2">اعرف المزيد عن الدورة</span>
            </div>
          </div>
        </div>
      </section>
      <CommnetsHome />
      <section className="py-5 my-5 d-flex justify-content-between container flex-wrap">
        <div style={{ maxWidth: "500px" }}>
          <small className="text-warning fs-5">لماذا دائماً</small>
          <h4 className="mt-2 fw-bold mb-4">
            يجب أن يكون اختيارك لـ My-Communication
          </h4>
          <p className="w-75">
            تعرف على أسباب اختيارك لأكاديمية My Communication لتكون شريكاً في
            تنمية مهاراتك في مجال تكنولوجيا الاتصالات نحن نسعى دائماً للأفضل من
            أجل مهندسي المستقبل.
          </p>
        </div>
        <div style={{ maxWidth: "500px" }}>
          <div className="d-flex mt-3" data-aos="fade" data-aos-delay="100">
            <div className="w-75">
              <h5 className="fw-bold">طموح عالمي وليس محلي</h5>
              <p className="w-75">
                أول أكاديمية في الشرق الأوسط تهتم بتدريب طلبة ومهندسي الاتصالات
                حول العالم.
              </p>
            </div>
            <div className="d-flex jsutify-content-center align-items-center p-2">
              <span
                className="p-2 text-center"
                style={{
                  borderRadius: "50%",
                  background: "#154875",
                  width: "45px",
                  height: "45px",
                }}
              >
                <i className="fas fa-crown fs-4 text-white mt-1"></i>
              </span>
            </div>
          </div>
          <div
            className="d-flex mt-2"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div className="w-75">
              <h5 className="fw-bold">نطبق أقصى معايير الجودة</h5>
              <p className="w-75">
                إذ أنَّ دوراتنا امتثلت لأعلى معايير التميز والجودة، وذلك لما
                يتمتع به فريق عملنا من خبرة عريقة في مجال هندسة الاتِصالات.
              </p>
            </div>
            <div className="d-flex jsutify-content-center align-items-center p-2">
              <span
                className="p-2 text-center "
                style={{
                  borderRadius: "50%",
                  background: "#154875",
                  width: "45px",
                  height: "45px",
                }}
              >
                <i className="fas fa-star fs-4 text-white mt-1"></i>
              </span>
            </div>
          </div>
          <div
            className="d-flex mt-2"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <div className="w-75">
              <h5 className="fw-bold">مدربين على قدر عالي من التميز</h5>
              <p className="w-75">
                إيصال الأفكار العملية والنظرية للمتدربين بما يتماشى مع أساليب
                التدريب المعاصرة والتطورات التقنية الحديثة
              </p>
            </div>
            <div className="d-flex jsutify-content-center align-items-center p-2">
              <span
                className="p-2 d-block text-center"
                style={{
                  borderRadius: "50%",
                  background: "#154875",
                  width: "45px",
                  height: "45px",
                }}
              >
                <i className="fas fa-user-tie fs-4 text-white mt-1"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
