import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { Link } from "react-router-dom";

function FirstComponent() {
  return (
    <div style={{ minHeight: "88vh" }}>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{ minHeight: "88vh" }}
      >
        <SwiperSlide>
          <div className="w-100 slide-image slide-image1">
            <div className="slide-content">
              <div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  className="text-white mb-4"
                >
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
                  <span className="me-2">أكاديمية MY-COMMUNICATION</span>
                </div>
                <h3
                  data-aos="fade"
                  data-aos-delay="500"
                  className="mb-4 text-white"
                >
                  مرحبًا بكم في المنصة الأولى في الشرق الأوسط للتدريب على هندسة
                  الاتصالات!
                </h3>
                <h5
                  data-aos="fade"
                  data-aos-delay="1000"
                  className="mb-4 text-white"
                >
                  نحن نعملُ على تطوير مهندس الاتصالات العربي ليتمكن من النهوض
                  ببلده في المجال التكنولوجي.
                </h5>
                <h5
                  data-aos="fade"
                  data-aos-delay="1000"
                  className="mb-4 text-white"
                >
                  إذ يكفي أن تمتلك العزيمة والإصرار على التعلم، لأننا سنؤمِّن لك
                  بيئة تدريبية مرنة تساعدك على التطور.
                </h5>
                <Link to={"/courses"}>
                  <button className="btn btn-warning text-white ms-3">
                    ابدأ الان
                  </button>
                  <span className="text-white">الدورات المتاحة</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-100 slide-image slide-image4">
            <div className="slide-content">
              <div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  className="text-white mb-4"
                >
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
                  <span className="me-2">أكاديمية MY-COMMUNICATION</span>
                </div>
                <h3
                  data-aos="fade"
                  data-aos-delay="500"
                  className="mb-4 text-white"
                  style={{ maxWidth: 850 }}
                >
                  مقالات غنية ومحتوى قيم مجاني: بوابتك لتوسيع معرفتك
                </h3>
                <h5
                  data-aos="fade"
                  data-aos-delay="1000"
                  className="mb-4 text-white"
                  style={{ maxWidth: 850 , lineHeight :2}}
                >
                  إذا كنت متحمسًا وملتزمًا بالتعلم، فإننا نوفر بيئة تدريبية مرنة
                  تدعمك في رحلتك نحو التقدم والنجاح. نحن نلتزم بتقديم مقالات
                  مميزة ومحتوى ذي قيمة عالية بشكل مجاني. هذه المواد تمنحك فرصة
                  فريدة للتعلم واكتساب معلومات جديدة دون أي تكلفة مالية. نهدف
                  إلى نشر المعرفة والمعلومات الهامة بأسلوب شيق واحترافي لضمان
                  توفير بوابة مثالية لتوسيع معرفتك وتطوير مهاراتك بسهولة ويسر.
                  انضم إلينا في هذه الرحلة التعليمية المجانية واستفد من مصادرنا
                  المتميزة.
                </h5>
                <Link to={"/Articles"}>
                  <button className="btn btn-warning text-white ms-3">
                    ابدأ الان
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-100 slide-image slide-image2">
            <div className="slide-content">
              <div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  className="text-white mb-4"
                >
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
                  <span className="me-2">أكاديمية MY-COMMUNICATION</span>
                </div>
                <h3
                  data-aos="fade"
                  data-aos-delay="500"
                  className="mb-4 text-white"
                  style={{ maxWidth: 850 }}
                >
                  نحن نسعى لرفع مستوى المهندسين العرب في مجال الاتصالات من خلال
                  توفير فرص تعليمية وتدريبية تساهم في تطوير مهاراتهم التقنية.
                </h3>
                <h5
                  data-aos="fade"
                  data-aos-delay="1000"
                  className="mb-4 text-white"
                >
                  إذا كنت متحمسًا وملتزمًا بالتعلم، فإننا نوفر بيئة تدريبية مرنة
                  تدعمك في رحلتك نحو التقدم والنجاح.
                </h5>
                <Link to={"/courses"}>
                  <button className="btn btn-warning text-white ms-3">
                    ابدأ الان
                  </button>
                  <span className="text-white">الدورات المتاحة</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-100 slide-image slide-image3">
            <div className="slide-content">
              <div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  className="text-white mb-4"
                >
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
                  <span className="me-2">أكاديمية MY-COMMUNICATION</span>
                </div>
                <h3
                  data-aos="fade"
                  data-aos-delay="500"
                  className="mb-4 text-white"
                  style={{ maxWidth: 850 }}
                >
                  نحن نتيح فرصة مشاركة في ورشات تدريبية مجانية بمستوى عالٍ من
                  الجودة والتفرغ، لكل من يتطلع إلى تطوير مهاراتهم دون أي تكلفة
                  مادية
                </h3>
                <h5
                  data-aos="fade"
                  data-aos-delay="1000"
                  className="mb-4 text-white"
                >
                  إذا كنت متحمسًا وملتزمًا بالتعلم، فإننا نوفر بيئة تدريبية مرنة
                  تدعمك في رحلتك نحو التقدم والنجاح.
                </h5>
                <Link to={"/workshop"}>
                  <button className="btn btn-warning text-white ms-3">
                    ابدأ الان
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default FirstComponent;
