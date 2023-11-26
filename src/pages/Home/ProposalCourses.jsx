import React, { useEffect, useState } from "react";
import { useHeaders } from "../../hooks/useHeaders";
import { useGetProposalCoursesQuery } from "../../store/RtkSlices/studentSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Card from "../../components/utils/Card";
import { apiStorge } from "../../constans/url";
import { useNavigate } from "react-router-dom";

function ProposalCourses() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const headers = useHeaders();
  const { data } = useGetProposalCoursesQuery({ headers: headers });
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
  return (
    <>
      {localStorage.getItem("token") &&
        localStorage.getItem("role") == "student" && (
          <div className="container pt-5">
            <h3 className="text-title fw-bold">الدورات المقترحة</h3>
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
              {data?.data?.map((item) => (
                <SwiperSlide key={item?.id}>
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
    </>
  );
}

export default ProposalCourses;
