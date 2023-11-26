import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiStorge } from "../../constans/url";
import { useGetAllWorkshopQuery } from "../../store/RtkSlices/workShopSlice";
import Loader from "../../components/utils/Loader";
import { Button } from "@mui/material";

function Workshop() {
  const [id, setId] = useState(1);
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllWorkshopQuery(id);
  const scrollToTop = () => {
    const element = document.getElementById("topWorkShop");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
    <div id="topWorkShop" ></div>
      <div
        style={{
          background: "url(workshop.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
          minHeight: 300,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            background: "#1f1fab42",
          }}
        ></div>
        <div
          className="py-5 container"
          style={{ position: "relative", zIndex: 2 }}
        >
          <h3 data-aos="fade-left" className="text-warning fw-bold">
            ورش العمل
          </h3>
          <h4 data-aos="fade-up" className="text-white mt-2 fw-bold">
            تجد هنا ورش العمل وفعاليات الأكاديمية
          </h4>
        </div>
      </div>
      <div className="mx-2">
        <div className="d-flex justify-content-between my-5 align-items-center flex-wrap">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <i className="fa-solid fa-layer-group fa-bounce ms-2 fs-3"></i>
            </div>
            <div>
              <h4 className="text-title">طور من مهاراتك</h4>
              <p className="text-title">
                تساعد ورش العمل على تطوير مهاراتك بشكل فعال
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <i className="fa-solid fa-id-card fa-bounce ms-2 fs-3"></i>
            </div>
            <div>
              <h4 className="text-title">تواصل مع المدربين</h4>
              <p className="text-title">
                يمكنك التواصل مع المدربين بشكل مباشر اثناء الورش
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-brands fa-get-pocket fa-bounce ms-2 fs-3"></i>
            </div>
            <div>
              <h4 className="text-title">احصل على خصومات</h4>
              <p className="text-title">
                احصل على خصومات خاصة بدورتنا عند حضورك للورش
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 d-flex justify-content-between aligin-items-center flex-wrap">
        {data?.data.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate("/workshop/" + item?.id)}
            className="achievements-card mt-2"
            style={{
              maxWidth: "300px",
              display: "flex",
              flexDirection: "column",
              background: "#F7F8FB",
            }}
          >
            <div style={{ position: "relative" }}>
              <div className="overlay">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </div>
              <img
                src={apiStorge + item?.image?.id + "/" + item?.image?.file_name}
                width={300}
                height={300}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <h5 style={{ padding: "20px 10px" }}>{item?.title}</h5>
          </div>
        ))}
      </div>
      <div className="container my-3">
        <Button
          disabled={isLoading || id == 1}
          onClick={() => {
            setId(id - 1);
            scrollToTop();
          }}
          variant="outlined"
          className="fs-4 ms-3"
        >
          {"<"}
        </Button>
        <Button
          disabled={isLoading || id == data?.last_page}
          onClick={() => {
            setId(id + 1);
            scrollToTop();
          }}
          variant="outlined"
          className="fs-4"
        >
          {">"}
        </Button>
      </div>
    </div>
  );
}

export default Workshop;
