import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StudentProfile from "./components/StudentProfile";
import MonyAndCourse from "./components/MonyAndCourse";
import MyPayment from "./components/MyPayment";
import Logout from "../../components/utils/Logout";
import { useState } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Student() {
  const storedValue = localStorage.getItem("selectedTab");
  const [openLog , setOpenLog] = useState(false)
  const [value, setValue] = React.useState(storedValue ? parseInt(storedValue, 10) : 0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("selectedTab", newValue.toString());
  };

  return (
    <div className="container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="ملف الشخصي" {...a11yProps(0)} />
            <Tab label="المحفظة و كورساتي" {...a11yProps(1)} />
            <Tab label="دفعاتي" {...a11yProps(2)} />
            <Tab
              label="تسجيل الخروج"
              onClick={() => {
                setOpenLog(true)
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <StudentProfile />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <MonyAndCourse />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <MyPayment />
        </CustomTabPanel>
      </Box>
      {openLog &&
      <Logout open={openLog} handleClose={()=>setOpenLog(false)} />
      }
    </div>
  );
}

export default Student;
