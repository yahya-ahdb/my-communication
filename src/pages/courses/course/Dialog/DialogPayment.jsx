import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import Stripe from "../../../cart/Cart";
import { Link } from "react-router-dom";
import { useGetMyMoneyQuery } from "../../../../store/RtkSlices/studentSlice";
import { useHeaders } from "../../../../hooks/useHeaders";
import axios from "axios";
import { apiUrl } from "../../../../constans/url";
import { toast } from "react-toastify";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const notify = ()=> toast.success("تم شراء الكورس")
const notifyError = (e)=> toast.error(e)
function DialogPayment({ id, cost, open, handleClose }) {
  const headers = useHeaders();
  const { data: dataMo } = useGetMyMoneyQuery({ headers: headers });
  const handleBy = async () => {
    try {
      await axios.post(apiUrl + "buyCourse/" + id, "sdas",{
          headers
      }).then(()=>{ notify();window.location.reload()})
    } catch (error) {
      notifyError(error.response.data)
      console.log(error);
    }
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <DialogTitle dir="rtl" sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          اختر طريقة الدفع
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            left: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div dir="rtl" className="d-flex justify-content-around">
            <div>
              <h3>اضف الى محفظتك</h3>
              <div>
                <Stripe totalPrice={cost} />
              </div>
            </div>
            <div>
              <h3>شراء الكورس</h3>
              <div>
                <h5> لديك : {dataMo}$</h5>
                <button
                  onClick={handleBy}
                  className="btn btn-primary text-white mt-3  px-4"
                >
                  شراء {cost}
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            الرجوع
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default DialogPayment;
