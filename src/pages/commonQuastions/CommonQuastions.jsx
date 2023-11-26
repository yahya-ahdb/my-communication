import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderRadius:"10px",
    overflow:"hidden",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon color="warning" sx={{ fontSize: "0.9rem" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#07294d",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function CommonQuastions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="py-5">
        <h3 className="py-5 text-center fw-bolder">
          الأسئلة الأكثر شيوعا{" "}
          <span className="text-warning"> حول الشهادات</span>
        </h3>
      </div>
      <div className="container">
        <Accordion
          className="my-4"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography fontWeight="bolder" fontSize={20} color="#ffc107">
              هل يمكن تقديم الشهادات كجزء من السيرة الذاتية؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-web">
              نعم، يمكن تقديم الشهادات كجزء من السيرة الذاتية لإثبات المهارات
              والخبرات المكتسبة.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="my-4"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography fontWeight="bolder" fontSize={20} color="#ffc107">
              هل يمكن الحصول على نسخة ورقية من الشهادات؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-web">
              الإجابة: نعم، يمكن الحصول على نسخة ورقية من الشهادات بعد الحصول
              عليها بشكل رقمي.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="my-4"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography fontWeight="bolder" fontSize={20} color="#ffc107">
              هل يمكن الحصول على شهادات بعد انتهاء فترة الكورس؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-web">
              يمكن الحصول على الشهادات فقط بعد اجتياز الامتحان الأخير، وليس بعد
              انتهاء فترة الكورس.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="my-4"
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography fontWeight="bolder" fontSize={20} color="#ffc107">
              هل يمكن الحصول على الشهادات إذا تم الانسحاب من الكورس؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-web">
              لا، يجب استكمال الكورس بنجاح واجتياز الامتحان الأخير للحصول على
              الشهادات.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="my-4"
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography fontWeight="bolder" fontSize={20} color="#ffc107">
              هل يمكن استخدام الشهادات لتطوير مهنتي؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-web">
              نعم، يمكن استخدام الشهادات لتطوير مهنتك وزيادة فرص الحصول على فرص
              عمل جديدة وزيادة الراتب.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="my-4"
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography fontWeight="bolder" fontSize={20} color="#ffc107">
              كيف يمكن الحصول على الشهادات بعد اجتياز الكورس؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-web">
              يتم الحصول على الشهادات بعد اجتياز الامتحان الأخير الذي يتم تقديمه
              في نهاية الكورس عن طريق موقعنا
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="my-4"
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography fontWeight="bolder" fontSize={20} color="#ffc107">
            هل يمكن الحصول على الشهادات إذا لم يتم اجتياز الامتحان الأخير؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-web">
            لا، يجب عليك اجتياز الامتحان الأخير للحصول على الشهادات.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="my-4"
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
            <Typography fontWeight="bolder" fontSize={20} color="#ffc107">
            هل يوجد تكلفة إضافية للحصول على الشهادات؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-web">
            لا، لا يوجد تكلفة إضافية للحصول على الشهادات. يتم تضمين تكلفة الشهادات في تكلفة الكورس الأصلية.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default CommonQuastions;
