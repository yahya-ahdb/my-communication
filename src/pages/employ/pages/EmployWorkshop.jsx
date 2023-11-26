import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useHeaders } from "../../../hooks/useHeaders";
import { useGetAllWorkshopQuery } from "../../../store/RtkSlices/adminSlice";
import { apiStorge } from "../../../constans/url";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateWorkShop from "../components/UpdateWorkShop";
import DeleteWorkShop from "../components/DeleteWorkShop";
import LayoutEmploy from "../components/LayoutEmploy";

function EmployWorkshop() {
  const headers = useHeaders();
  const [id, setId] = useState(1);
  const { data , isLoading} = useGetAllWorkshopQuery({ headers: headers , id :id });
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [dataDilog, setDataDilog] = useState();

  const handleClose = ()=>{
    setOpen(false)
    setOpenDelete(false)
  }
  const scrollToTop = () => {
    const element = document.getElementById("topWork");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <LayoutEmploy
        pages={
          <div>
          <div id="topWork" ></div>
            <h3>الورشات</h3>
            <div className="d-flex justify-content-between flex-wrap ">

            {data?.data?.map((item) => (
              <div
                key={item?.id}
                className="mt-2"
                style={{ maxWidth: "350px", minWidth: "280px" }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <div>
                      <div style={{ width: 270, margin: "0 auto" }}>
                        <img
                          style={{ width: "100%", height: 270, objectFit:"contain" }}
                          alt=".."
                          src={
                            apiStorge +
                            item?.image?.id +
                            "/" +
                            item?.image?.file_name
                          }
                        />
                      </div>
                    </div>
                    <Typography gutterBottom variant="body1" component="div">
                      {item?.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                    onClick={() => {
                      setOpen(true);
                      setDataDilog(item);
                    }}
                    >
                      <EditIcon />
                تعديل
                    </Button>
                    <div onClick={() => {}}>
                      <Button
                        onClick={() => {
                          setOpenDelete(true), setDataDilog(item);
                        }}
                        color="warning"
                      >
                        <DeleteIcon />
                        حذف
                      </Button>
                    </div>
                  </CardActions>
                  {open && (
              <UpdateWorkShop
                dataDia={dataDilog}
                open={open}
                handleClose={handleClose}
              />
            )}
            {openDelete && (
              <DeleteWorkShop
                dataDia={dataDilog}
                open={openDelete}
                handleClose={handleClose}
              />
            )}
                </Card>
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
        }
      ></LayoutEmploy>
    </div>
  );
}

export default EmployWorkshop;
