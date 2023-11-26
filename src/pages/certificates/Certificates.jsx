import React, { useEffect, useState } from "react";
import { dataImage } from "./data";

function Certificates() {
  const [data, setData] = useState();
  const handleFillter = (country) => {
    country == ""
      ? setData(dataImage)
      : setData(dataImage.filter((x) => x.country == country));
  };
  useEffect(() => {
    setData(dataImage);
  }, []);
  return (
    <div>
      <div
        style={{
          minHeight: "250px",
          background: "url(/certificate.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div>
          <div className="home-shadow"></div>
          <div
            className="container py-5"
            style={{ zIndex: 6, position: "relative" }}
          >
            <h3 className="text-warning fw-bold">الإعتمادات والشركاء</h3>
            <h3 className="text-white fw-bold">
              هنا، نحن نؤمن بأهمية العمل كفريق واحد فدعونا نستمر في التواصل
              والتقدم في عملنا لنتخطى التحديات كي نحقق المزيد من النجاح
            </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="text-warning fw-bold mt-3">شركاء النجاح</h3>
        <div className="d-flex justify-content-center mt-5">
          <div
            style={{ minWidth: "320px" }}
            className="d-flex justify-content-around align-items-center"
          >
            <div
              className="fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => handleFillter("")}
            >
              الكل
            </div>
            <div
              className="fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => handleFillter("sy")}
            >
              سوريا
            </div>
            <div
              className="fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => handleFillter("le")}
            >
              ليبيا
            </div>
            <div
              className="fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => handleFillter("eg")}
            >
              مصر
            </div>
            <div
              className="fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => handleFillter("jo")}
            >
              الاردن
            </div>
            <div
              className="fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => handleFillter("er")}
            >
              العراق
            </div>
          </div>
        </div>
        <div className="py-5 d-flex flex-wrap justify-content-between align-itmes-center ">
          {data?.map((item, i) => (
            <div
              key={item.id}
              data-aos="fade-up"
              style={{ margin: "0 auto" }}
              data-aos-delay={i + "00"}
            >
              <div style={{ width: "180px", maxHeight: 180 }}>
                <img style={{ width: "100%" }} src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;
