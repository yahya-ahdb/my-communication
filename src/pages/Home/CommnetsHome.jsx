import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";
import StarIcon from '@mui/icons-material/Star';
// import required modules
import { EffectCoverflow, Pagination , Autoplay , Navigation} from "swiper/modules";
import { Avatar } from "@mui/material";
import "swiper/css/pagination";

function CommnetsHome() {
  return (
    <div style={{background:"linear-gradient(180deg,#1973b9 0%,#19284e 100%)"}} >
    <div className="container py-5" >
    <h3 className="text-warning fw-bold" >بعض آراء المتدربين</h3>
    <p className="text-white" >نشكر كل المتدربين على ثقتهم بنا</p>
    <p className="text-white fs-5" >2,394 تقييم</p>
    <h2 className="text-white" >4.9</h2>
    <p>
        <StarIcon color="warning" />
        <StarIcon color="warning" />
        <StarIcon color="warning" />
        <StarIcon color="warning" />
        <StarIcon color="warning" />
    </p>
    <div style={{ maxWidth: "650px", margin: "0 auto" }}>
      <Swiper
    effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[EffectCoverflow, Pagination  , Autoplay ,  Navigation]}
      style={{ maxHeight: "400px" }}
      >
        <SwiperSlide
          className="p-3 mb-5"
          style={{
              borderRadius: "20px",
              maxWidth:"450px",
              background: "#fff",
              boxShadow: "1px 1px 10px #ccc",
          }}
        >
          <div
            className=""
          >
            <div className="d-flex align-items-center">
              <Avatar src="/comment/1.jpeg" sx={{ width: 100, height: 100 }} />
              <div>
                <h4 className="text-warning text-end me-3">أحمد عواد </h4>
                <small className="me-3">دورة هندسة الاتصالات اللاسلكية </small>
              </div>
            </div>
            <hr />
            <div>
              <small className="text-web text-right">
                الحمد لله الذي أكرمني بهذا كورس المتكامل الشامل. إنه كورس مهم
                جدا للحياة العملية، تتوسع فيه كأنكَ تقومُ به على ارض الواقع
                يفيدني للمستقبل ويجعلني ذو معرفة وعلم واطلاع بكل تفاصيل
                الاتصالات بشكل واسع وعملي.وأكسب خبرة عملية تعادل خبرة سنين من
                العمل. شكرًا للمهندس إبراهيم على مجهوده في إعطاء هذا الكورس.
              </small>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="p-3 mb-5"
          style={{
              borderRadius: "20px",
              maxWidth:"450px",
              background: "#fff",
              boxShadow: "1px 1px 10px #ccc",
          }}
        >
          <div
            className=""
          >
            <div className="d-flex align-items-center">
              <Avatar src="/comment/2.jpeg" sx={{ width: 100, height: 100 }} />
              <div>
                <h4 className="text-warning text-end me-3">أحمد السيد </h4>
                <small className="me-3">دورة هندسة الاتصالات الضوئية </small>
              </div>
            </div>
            <hr />
            <div>
              <small className="text-web text-right">
                أكاديمية متميزة و تقدم دورات رائعة و مفيدة جداً و خير دليل علي
                الطريق الصحيح نحو فهم و تطبيق ما قمنا بدراسته في هندسة الاتصالات
                و المشرفين علي الدورات مهندسين محترمين و رائعين جداً و أحببت
                متابعتهم مع المشتركين في الدورات و تيسير جميع أمورهم ، شكراً my
                communications و لجميع القائمين عليها
              </small>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="p-3 mb-5"
          style={{
              borderRadius: "20px",
              maxWidth:"450px",
              background: "#fff",
              boxShadow: "1px 1px 10px #ccc",
          }}
        >
          <div
            className=""
          >
            <div className="d-flex align-items-center">
              <Avatar src="/comment/3.webp" sx={{ width: 100, height: 100 }} />
              <div>
                <h4 className="text-warning text-end me-3">حسين جميل</h4>
                <small className="me-3">دورة هندسة الاتصالات المتكاملة </small>
              </div>
            </div>
            <hr />
            <div>
              <small className="text-web text-right">
                الصراحة بعد ما سجلت بالكورس تفاجأت بما تقدمه الأكاديمية من حيث
                المعلومات القيمة والمفيدة لكل طالب أو خريج هندسة اتصالات، كم
                هائل من المعلومات العلمية والعملية الموثوقة والحديثة بعلم
                الاتصالات بكافة أجياله مع مواكبة التطور والتحديث المستمر، كما
                سعدت بمعرفة المهندس إبراهيم إبراهيم وبقربه من الطلبة بالاجتماع
                أسبوعيًا.
              </small>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="p-3 mb-5"
          style={{
              borderRadius: "20px",
              maxWidth:"450px",
              background: "#fff",
              boxShadow: "1px 1px 10px #ccc",
          }}
        >
          <div
            className=""
          >
            <div className="d-flex align-items-center">
              <Avatar src="/comment/4.webp" sx={{ width: 100, height: 100 }} />
              <div>
                <h4 className="text-warning text-end me-3">عامر حداد </h4>
                <small className="me-3">دورة هندسة الاتصالات اللاسلكية </small>
              </div>
            </div>
            <hr />
            <div>
              <small className="text-web text-right">
                طبعًا أنا أخذت الكورس قبل سنتين، كنت مهندس ميداني في شركة الخلية
                الذكية، صراحة الكورس كان إضافة رائعة مع طبيعة عملي كمهندس ميداني
                حاليًا طبيعة عملي منسق مشاريع في شركة الخلية الذكية ومتواجد عنا
                متدربين من الأكاديمية وصراحة مستواهم جدا رائع، الله يعطيكم
                العافية على جهودكم
              </small>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="p-3 mb-5"
          style={{
              borderRadius: "20px",
              maxWidth:"450px",
              background: "#fff",
              boxShadow: "1px 1px 10px #ccc",
          }}
        >
          <div
            className=""
          >
            <div className="d-flex align-items-center">
              <Avatar src="/comment/5.webp" sx={{ width: 100, height: 100 }} />
              <div>
                <h4 className="text-warning text-end me-3">
                  فؤاد صالح الخداشي{" "}
                </h4>
                <small className="me-3">دورة هندسة الاتصالات اللاسلكية </small>
              </div>
            </div>
            <hr />
            <div>
              <small className="text-web text-right">
                بصراحة هذا الكورس ممتاز وأكثر من رائع، كمية المعلومات التي حصلت
                عليها كبيرة عن طريق هذا الكورس، أنت تكتسب خبرة عمل فعليه، مع
                كامل الشكر لأكاديمية my communication الرائدة ويلي كان لها الفضل
                بعد الله في التوظيف بمجالي الذي اجتهدت من أجله، والشكر الجزيل
                للمهندس إبراهيم إبراهيم والمهندسة الرائعة جمانة الذي كان لهم دور
                كبير في عملي.
              </small>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="p-3 mb-5"
          style={{
              borderRadius: "20px",
              maxWidth:"450px",
              background: "#fff",
              boxShadow: "1px 1px 10px #ccc",
          }}
        >
          <div
            className=""
          >
            <div className="d-flex align-items-center">
              <Avatar src="/comment/6.jpeg" sx={{ width: 100, height: 100 }} />
              <div>
                <h4 className="text-warning text-end me-3">حيدر عباس </h4>
                <small className="me-3">دورة هندسة الاتصالات اللاسلكية </small>
              </div>
            </div>
            <hr />
            <div>
              <small style={{fontSize:12}} className="text-web text-right">
                كورس قادر على التعليم وإيصال الأفكار بكل وضوح وبساطة بفضل أسلوب
                المهندس إبراهيم الذي يدفعك إلى الاستمرار والمتابعة. من الناحية
                العملية الكورس يغني المتعلم بطريقة كبيرة جداً سواءً كان طالباً
                أو مهندساً في هذا المجال ويجعله قادر على الخوض في مجال العمل
                الميداني بقوة وخبرة وثقة كبيرة. وخاصة بفضل التركيز على جميع
                التفاصيل المهمة التي تساعد على تأسيس مهندس اتصالات ناجح في مجال
                عمله. كل الشكر للأكاديمية على الجهد المبذول
              </small>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </div>
  );
}

export default CommnetsHome;
