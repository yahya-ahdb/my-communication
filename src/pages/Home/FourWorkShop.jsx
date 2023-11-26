import React from "react";
import { useGetLastFFourWorkshopQuery } from "../../store/RtkSlices/workShopSlice";
import { apiStorge } from "../../constans/url";
import { useNavigate } from "react-router-dom";

function FourWorkShop() {
  const { data } = useGetLastFFourWorkshopQuery();
  const navigate = useNavigate();
  return (
    <div className="container">
      {data && (
        <>
          <h3 className="text-warning fw-bold">تعرف على</h3>
          <h4 className="fw-bold">احدث الورشات</h4>
          <div className="d-flex align-items-center flex-wrap">
            <div  data-aos="zoom-in" className="p-2 ms-2" style={{ border: "1px solid #ccc" }}>
              <div style={{ maxWidth: "500px" }}>
                <img
                  style={{ width: "100%" }}
                  src={
                    apiStorge +
                    data[0]?.image?.id +
                    "/" +
                    data[0]?.image?.file_name
                  }
                />
              </div>
              <div>
                <h3>{data[0]?.title}</h3>
                <button
                  onClick={() => navigate("/workshop/" + data[0]?.id)}
                  className="btn btn-warning text-white d-block"
                >
                  شاهد
                </button>
              </div>
            </div>
            {/*  */}
            <div>
              <div
                className="d-flex p-2 mt-2"
                style={{ border: "1px solid #ccc" }}
                data-aos="slide-right"
              >
                <div style={{ maxWidth: "175px" }}>
                  <img
                    style={{ width: "100%" }}
                    src={
                      apiStorge +
                      data[1]?.image?.id +
                      "/" +
                      data[1]?.image?.file_name
                    }
                  />
                </div>
                <div>
                  <div
                    className="d-flex align-items-center"
                    style={{ height: "100%" }}
                  >
                    <div>
                      <h3>{data[1].title}</h3>
                      <div>
                        <button
                          onClick={() => navigate("/workshop/" + data[1]?.id)}
                          className="btn btn-warning text-white d-block"
                        >
                          شاهد
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-flex p-2 my-2"
                style={{ border: "1px solid #ccc" }}
                data-aos="slide-right"
                data-aos-delay="150"
              >
                <div style={{ maxWidth: "175px" }}>
                  <img
                    style={{ width: "100%" }}
                    src={
                      apiStorge +
                      data[2]?.image?.id +
                      "/" +
                      data[2]?.image?.file_name
                    }
                  />
                </div>
                <div>
                  <div
                    className="d-flex align-items-center"
                    style={{ height: "100%" }}
                  >
                    <div>
                      <h3>{data[2].title}</h3>
                      <div>
                        <button
                          onClick={() => navigate("/workshop/" + data[2]?.id)}
                          className="btn btn-warning text-white d-block"
                        >
                          شاهد
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-flex p-2 mb-2"
                style={{ border: "1px solid #ccc" }}
                data-aos="slide-right"
                data-aos-delay="250"
              >
                <div style={{ maxWidth: "175px" }}>
                  <img
                    style={{ width: "100%" }}
                    src={
                      apiStorge +
                      data[3]?.image?.id +
                      "/" +
                      data[3]?.image?.file_name
                    }
                  />
                </div>
                <div>
                  <div
                    className="d-flex align-items-center"
                    style={{ height: "100%" }}
                  >
                    <div>
                      <h3>{data[3].title}</h3>
                      <button
                        onClick={() => navigate("/workshop/" + data[3]?.id)}
                        className="btn btn-warning text-white d-block"
                      >
                        شاهد
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FourWorkShop;
