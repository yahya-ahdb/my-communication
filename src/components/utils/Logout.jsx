import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
} from "@mui/material";
import axios from "axios";
import { apiUrl } from "../../constans/url";
import { useHeaders } from "../../hooks/useHeaders";
import { useNavigate } from "react-router-dom";

function Logout({ open, handleClose }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const headers = useHeaders();
  const handelLogout = async () => {
    try {
      setLoading(true);
    //   await axios.post(apiUrl + "logout", { headers: headers });
      setLoading(false);
      localStorage.clear();
      navigate("/");
    } catch (error) {
    setLoading(false);
    console.log(error);
    }
  };
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle style={{ direction: "rtl" }}>تسجيل الخروج</DialogTitle>
      <DialogContent>
        <h3>هل تود تسجيل الخروج</h3>
      </DialogContent>
      <DialogActions>
        <Button color="warning" onClick={handleClose}>
          إلغاء
        </Button>
        <Button variant="contained" color="error" onClick={handelLogout}>
          تسجيل الخروج
        </Button>
      </DialogActions>
      {loading ? <LinearProgress /> : <div></div>}
    </Dialog>
  );
}

export default Logout;
