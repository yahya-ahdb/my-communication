import React, { useState } from "react";
import LayoutAdmin from "../LayoutAdmin";
import AddWorkShop from "./AddWorkShop";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetAllWorkshopQuery } from "../../../../store/RtkSlices/adminSlice";
import { apiStorge } from "../../../../constans/url";
function WorkShop() {
  const [id, setId] = useState(1);
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllWorkshopQuery(id);

  return (
    <div>
      <LayoutAdmin
        pages={
          <div className="container">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <h3>الورشات</h3>
              <AddWorkShop />
            </div>
            <div className="container my-5 d-flex justify-content-between aligin-items-center flex-wrap">
              {data?.data?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate("/workshop/" + item?.id)}
                  className="achievements-card"
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
                      src={
                        apiStorge +
                        item?.image?.id +
                        "/" +
                        item?.image?.file_name
                      }
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
                onClick={() => setId(id - 1)}
                variant="outlined"
                className="fs-4 ms-3"
              >
                {"<"}
              </Button>
              <Button
                disabled={isLoading || id == data?.last_page}
                onClick={() => setId(id + 1)}
                variant="outlined"
                className="fs-4"
              >
                {">"}
              </Button>
            </div>
          </div>
        }
      ></LayoutAdmin>
    </div>
  );
}

export default WorkShop;
