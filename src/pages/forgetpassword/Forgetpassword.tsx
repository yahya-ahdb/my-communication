import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUrl } from "../../constans/url";

const notify = () => toast.success("Changed password");
const notifyError = (error) => toast.error(error);

function Forgetpassword() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState();
  const [codeStatus, setCodeStatus] = useState(false);
  const [password, setPassword] = useState();
  const [passwordStatus, setPasswordStatus] = useState(false);
  const navigate = useNavigate();
  const handleUploadEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(apiUrl + "forgetPassowrd", { email: email });
      res.status == 200 && setCodeStatus(true);
    } catch (error) {
      console.log(error);
      notifyError(error.response.data)
    }
  };
  const handleUploadCode = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(apiUrl + "checkIfCodeIsTrue", {
        code: code,
        email: email,
      });
      if (res.data.success == "true") setPasswordStatus(true);
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.success)
    }
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(apiUrl + "changePassowrd", {
        new_password: password,
        email: email,
      });
      if (res.status == 202) {
        notify();
        navigate("/login");
      }
    } catch (error) {
      notifyError(error.response.data)
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <Grid item xs={12} sm={8} md={5} marginTop={5}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forget password
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              variant="filled"
              id="email"
              disabled={passwordStatus === true || codeStatus}
              label="Email Address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            {!passwordStatus && (
              <>
                {codeStatus && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    variant="filled"
                    label="Code"
                    type="number"
                    onChange={(e) => setCode(e.target.value)}
                  />
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={!codeStatus ? handleUploadEmail : handleUploadCode}
                >
                  Soumettre
                </Button>
              </>
            )}
            {passwordStatus && (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  variant="filled"
                  label="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleChangePassword}
                >
                  Soumettre
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Grid>
    </div>
  );
}

export default Forgetpassword;
