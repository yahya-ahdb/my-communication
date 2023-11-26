import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Card, LinearProgress } from "@mui/material";
import { useHeaders } from "../../../../hooks/useHeaders";
import { useGetStudentByIdMutation } from "../../../../store/RtkSlices/employSlice";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Twitter, YouTube } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

export default function StudentBar({
  id,
  userId,
  first_name,
  last_name,
  image,
}) {
  const headers = useHeaders();
  const [getStudentById, { data, isLoading }] = useGetStudentByIdMutation();
  const handleGetTecherById = () => {
    getStudentById({ headers: headers, id: id });
  };
  function createMarkup(data) {
    return { __html: data };
  }
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <List sx={{ mb: 2 }} onClick={handleGetTecherById}>
        <div>
          <ListItem
            button
            onClick={handleClickOpen}
            sx={{
              background: "#3f51b50d",
              borderRadius: "8px",
              minWidth: "180px",
            }}
          >
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={image} />
            </ListItemAvatar>
            {/* <ListItemText primary={ first_name + " " + last_name } secondary={ "EmailUser@gmail.com" } /> */}
            <ListItemText primary={first_name + " " + last_name} />
          </ListItem>
        </div>
      </List>

      <div style={{ direction: "rtl" }}>
        <Dialog open={open} onClose={handleClose} fullWidth >
          <DialogTitle style={{ direction: "rtl", minWidth: "320px" }}>
            تفاصيل حساب {first_name + " " + last_name}
          </DialogTitle>
          <DialogContent>
            {!image?.endsWith("undefined") ? (
              <img width={210} height={210} alt="Profile Picture" src={image} />
            ) : (
              <div></div>
            )}
            {data && (
              <div className="getByIdAbout">
                <h5 dir="ltr">{data?.user?.email}</h5>
                <div
                  dangerouslySetInnerHTML={createMarkup(data?.biographical)}
                ></div>
                <h6>لديه في رصيده: {data?.money?.value}</h6>
                <div>
                  {data?.money_info?.map((item) => (
                    <Card key={item?.id} className="mt-3 p-2">
                      {item?.creditor != 0 && (
                        <p>
                          تم دفع مبلغ لقاء الحصول على دورة : {item?.creditor}
                        </p>
                      )}
                      {item?.debtor != 0 && (
                        <p>تم اضافة مبلغ الى محفظة الطالب : {item?.debtor}</p>
                      )}
                      {item?.via && <p>طريق الدفع : {item?.via} </p>}
                    </Card>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "25px auto",
                  }}
                >
                  {data?.facebook ? (
                    <a href={data?.facebook} target="_blank" rel="noreferrer">
                      <FacebookIcon style={{ color: "#395693" }} />
                    </a>
                  ) : null}
                  {data?.linkedin ? (
                    <a href={data?.linkedin} target="_blank" rel="noreferrer">
                      <LinkedIn style={{ color: "#0475b3" }} />
                    </a>
                  ) : null}
                  {data?.youtube ? (
                    <a href={data?.youtube} target="_blank" rel="noreferrer">
                      <YouTube style={{ color: "#f40000" }} />
                    </a>
                  ) : null}
                  {data?.twitter ? (
                    <a href={data?.twitter} target="_blank" rel="noreferrer">
                      <Twitter style={{ color: "#00a5e5" }} />
                    </a>
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    direction: "rtl",
                    color: "#5c5c5e",
                  }}
                >
                  <div>تاريخ الإنشاء : </div>
                  {data?.created_at.slice(0, 10)}
                </div>
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button color="warning" onClick={handleClose}>
              إلغاء
            </Button>
          </DialogActions>
          {isLoading ? <LinearProgress /> : <div></div>}
        </Dialog>
      </div>
    </div>
  );
}
