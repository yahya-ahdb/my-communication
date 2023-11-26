import React from "react";
import { useMyMoneyInfoQuery } from "../../../store/RtkSlices/studentSlice";
import { useHeaders } from "../../../hooks/useHeaders";
import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { apiStorge } from "../../../constans/url";
import moment from "moment/moment";
import Loader from "../../../components/utils/Loader";

function MyPayment() {
  const headers = useHeaders();
  const { data, isLoading } = useMyMoneyInfoQuery({ headers: headers });
  return (
    <div className="conatiner">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data?.data &&
            data?.data?.map((item) => (
              <Card
                key={item?.id}
                className="mt-3"
                sx={{ position: "relative" }}
              >
                <CardContent>
                  <Typography
                    className="d-flex align-items-center"
                    gutterBottom
                    variant="body1"
                    component="div"
                  >
                    <div>
                      <Avatar
                        alt="Travis Howard"
                        src={apiStorge + localStorage.getItem("image")}
                      />
                    </div>
                    <div>
                      <h5 className="me-3">{localStorage.getItem("name")}</h5>
                    </div>
                  </Typography>
                  <Typography variant="body" color="text.secondary">
                    <p>
                      دفعة :{item?.creditor}
                      <br />
                      عن طريق : {item?.via}
                      <br />
                      تاريخ الدفع :{" "}
                      {moment(item?.created_at).format("DD/MM/YYYY")}
                    </p>
                  </Typography>
                </CardContent>
              </Card>
            ))}
        </>
      )}
    </div>
  );
}

export default MyPayment;
