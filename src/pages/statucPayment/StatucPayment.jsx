import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
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

function StaticPayment() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bolder" fontSize={24} color="#ffc107">
            السودان
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold" align="right">
                    طریقة التحویل
                  </TableCell>
                  <TableCell className="fw-bold" align="right">
                    التفاصیل
                  </TableCell>
                  <TableCell className="fw-bold" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">تحویل البنك العربي الاردن</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">بیبال</TableCell>
                  <TableCell align="right">رابط یطلب من آلاء براوي</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">ویسترن او موني جرام</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    962797619342 العنوان الاردن عمان أم المقابلین نوال مصطفى
                    محمود سلمان
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">بنك الخرطوم</TableCell>
                  <TableCell align="right">
                    حساب بنكك الخرطوم
                    <br />
                    مھا حمد خلف الله
                    <br />
                    3631525
                  </TableCell>
                  <TableCell align="right">
                    ملاحظة : تواصل مع مھا قبل التحویل او اعطاء السعر للتأكد من
                    سعر التصریف
                    <br />
                    ھاتف : 0024996512131 9
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography fontWeight="bolder" fontSize={24} color="#ffc107">
            لیبیا
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold" align="right">
                    طریقة التحویل
                  </TableCell>
                  <TableCell className="fw-bold" align="right">
                    التفاصیل
                  </TableCell>
                  <TableCell className="fw-bold" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">مصارف</TableCell>
                  <TableCell align="right">
                    مصرف التجارة رقم الحساب والتنمیة 0012263316001 رقم الحساب
                    مصرف الجمھوریة 00620100032715
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">تحویل داخلي</TableCell>
                  <TableCell align="right">
                    المھندس عبد الرحمن الجالي +218917091280
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">فیزا</TableCell>
                  <TableCell align="right">رابط یطلب من مھندس علاء</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">دفع بالمكتب لیبیا</TableCell>
                  <TableCell align="right">
                    ملاحظة : انتبھ لمكتب طرابس ومكتب بنغازي یوجد عمولة عند الدفع
                    قیمتھا 20
                    <br />
                    مكتب مدینة دینار اي ما یعادل 4 بنغازي الفویھات الشمالي شارع
                    الحدائق خلف شركة كونكت
                    <br />
                    <a href="https://maps.app.goo.gl/rdLkqrkycs7SrNgx5">هنا</a>
                    <br />
                    مواعید العمل من الساعة 12 إلى الساعة 6 مساءً 0916940520
                    <br />
                    مكتب الرئیسي مصراتة وسط المدینة - مقابل محلات الذھب - بجوار
                    مدرسة الھدایة
                    <br />
                    <a href="https://maps.app.goo.gl/1tsKarkpjsRmLLeq8">هنا</a>
                    <br />
                    مكتب العاصمة طرابلس الفرناج - صفة محلات الذھب
                    <br />
                    مجوھرات مكنون
                    <br />
                    <a href="https://goo.gl/maps/9cAx18MQFjNm87Qi8">هنا</a>
                    <br />
                    +218 91-3669633
                    <br />
                    فرع مدینة البیضاء ، مركز الامتیاز مدخل مدینة البیضاء الشرقي
                    علي جزیرة مسجد رویفع الانصاري
                    <br />
                    +218 92-7962518
                  </TableCell>
                  <TableCell align="right">
                    ملاحظة : انتبھ لمكتب طرابس ومكتب بنغازي یوجد عمولة عند الدفع
                    قیمتھا 20 دینار اي ما یعادل 4 دولار
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">تسلیم بالید</TableCell>
                  <TableCell align="right">ضمن بنغازي لابراھیم</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    حوالة بنكیة للبنك العربي بالاردن
                  </TableCell>
                  <TableCell align="right">ضمن بنغازي لابراھیم</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography fontWeight="bolder" fontSize={24} color="#ffc107">
            الیمن
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold" align="right">
                    طریقة التحویل
                  </TableCell>
                  <TableCell className="fw-bold" align="right">
                    التفاصیل
                  </TableCell>
                  <TableCell className="fw-bold" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    بنك الكریمي تحویل بالریال الیمني
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    محمد عبدالسلام حمود عبدالله
                    <br />
                    00967713480809
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    بنك الكریمي تحویل بالدولار
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    محمد عبدالسلام حمود عبدالله
                    <br />
                    00967713480809
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">تحویل داخلي</TableCell>
                  <TableCell align="right">
                    محمد عبدالسلام حمود عبدالله
                    <br />
                    00967713480809
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    بنك الكریمي تحویل بالریال السعودي
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    حساب بنكك الخرطوم
                    <br />
                    مھا حمد خلف الله
                    <br />
                    3631525
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography fontWeight="bolder" fontSize={24} color="#ffc107">
            الجزائر
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold" align="right">
                    طریقة التحویل
                  </TableCell>
                  <TableCell className="fw-bold" align="right">
                    التفاصیل
                  </TableCell>
                  <TableCell className="fw-bold" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">ccp تحویل بریدي</TableCell>
                  <TableCell align="right">
                    الاسم واللقب :شخنابة عبد الفتاح رقم حسابي البردي 1958291787
                    المفتاح
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">بیبال</TableCell>
                  <TableCell align="right">رابط یطلب من آلاء براوي</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">فیزا</TableCell>
                  <TableCell align="right">رابط یطلب من مھندس علاء</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography fontWeight="bolder" fontSize={24} color="#ffc107">
            سوریا
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold" align="right">
                    طریقة التحویل
                  </TableCell>
                  <TableCell className="fw-bold" align="right">
                    التفاصیل
                  </TableCell>
                  <TableCell className="fw-bold" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">حوالة داخلیة</TableCell>
                  <TableCell align="right">
                    رنیم أمین عودة0930007241 دمشق
                  </TableCell>
                  <TableCell align="right">
                    ملاحظة : تواصل مع رنیم قبل التحویل او اعطاء السعر للتأكد من
                    سعر التصریف
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">تسلیم بالید</TableCell>
                  <TableCell align="right">
                    لأي موظف موجود بنفس المحافظة (اسأل مھندس علاء )
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography fontWeight="bolder" fontSize={24} color="#ffc107">
            الصومال
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold" align="right">
                    طریقة التحویل
                  </TableCell>
                  <TableCell className="fw-bold" align="right">
                    التفاصیل
                  </TableCell>
                  <TableCell className="fw-bold" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">ویسترن او موني جرام</TableCell>
                  <TableCell align="right">
                    رنیم أمین عودة0930007241 دمشق
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    962797619342 العنوان الاردن عمان أم المقابلین نوال مصطفى
                    محمود سلمان
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">فیزا</TableCell>
                  <TableCell align="right">رابط یطلب من مھندس علاء</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">بیبال</TableCell>
                  <TableCell align="right">رابط یطلب من آلاء براوي</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography fontWeight="bolder" fontSize={24} color="#ffc107">
            مصر
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold" align="right">
                    طریقة التحویل
                  </TableCell>
                  <TableCell className="fw-bold" align="right">
                    التفاصیل
                  </TableCell>
                  <TableCell className="fw-bold" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    تحویل للبنك العربي بالاردن
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">دفع بالمكتب مصر</TableCell>
                  <TableCell align="right">
                    شارع النصر، جرین بلازا، الإسكندریة 21648
                    <br />
                    <a href="https://goo.gl/maps/myvcWoF9s9HsfTiX9">هنا</a>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">فودافون كاش</TableCell>
                  <TableCell align="right">
                    د.ھبا نبیل
                    <br />
                    +20 102 4556339
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">فیزا</TableCell>
                  <TableCell align="right"> رابط یطلب من مھندس علاء</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">تحویل بنكي داخل مصر</TableCell>
                  <TableCell align="right">
                    ھبه الله نبیل محمد مصطفى ھلال بنك مصر فرع الجمرك رقم الحساب
                    4460330000000260
                    <br />
                    *Iban* EG6900020446 0446033000
                    <br />
                    *Swift code* BMISEEGCX14 0
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">بیبال</TableCell>
                  <TableCell align="right">رابط یطلب من آلاء براوي</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography fontWeight="bolder" fontSize={24} color="#ffc107">
            السعودیة
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold" align="right">
                    طریقة التحویل
                  </TableCell>
                  <TableCell className="fw-bold" align="right">
                    التفاصیل
                  </TableCell>
                  <TableCell className="fw-bold" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">ویسترن او موني جرام</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">فیزا</TableCell>
                  <TableCell align="right">رابط یطلب من مھندس علاء</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">تسلیم بالید</TableCell>
                  <TableCell align="right">ضمن جدة لمحمد نور</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">STC Pay</TableCell>
                  <TableCell align="right">
                    ملاحظة : تواصل مع المھندس علاء قبل التحویل
                    <br />: رقم التحویل 500160778
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">بیبال</TableCell>
                  <TableCell align="right">رابط یطلب من آلاء براوي</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    تحویل للبنك العربي بالاردن
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">تحویل بنكي داخلي</TableCell>
                  <TableCell align="right">
                    یتم سؤال المھندس علاء في حال توفر التحویل الداخلي بالسعودیة
                    وتؤخذ التفاصیل منھ
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography fontWeight="bolder" fontSize={24} color="#ffc107">
            الاردن
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold" align="right">
                    طریقة التحویل
                  </TableCell>
                  <TableCell className="fw-bold" align="right">
                    التفاصیل
                  </TableCell>
                  <TableCell className="fw-bold" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">دفع بالمكتب الاردن</TableCell>
                  <TableCell align="right">
                    عمان- العبدلي - خلف مبنى المخابرات القدیم- عمارة المساحون
                    العرب - الطابق الثاني - مكتب 201
                    <br />
                    <a href="https://goo.gl/maps/zpnv6CV7rLmrmNRYA">هنا</a>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">زین كاش الاردن</TableCell>
                  <TableCell align="right">797619342</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">فیزا</TableCell>
                  <TableCell align="right">رابط یطلب من مھندس علاء</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    تحویل للبنك العربي بالاردن
                  </TableCell>
                  <TableCell align="right"> </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">تحویل داخلي</TableCell>
                  <TableCell align="right">
                    نفس تفاصیل الویسترن من خلال / العلاونة ، زمزم ، ابو شیخة
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">ویسترن او موني جرام</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">بیبال</TableCell>
                  <TableCell align="right"> رابط یطلب من آلاء براوي</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
      >
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography fontWeight="bolder" fontSize={24} color="#ffc107">
            المغرب
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold" align="right">
                    طریقة التحویل
                  </TableCell>
                  <TableCell className="fw-bold" align="right">
                    التفاصیل
                  </TableCell>
                  <TableCell className="fw-bold" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">فیزا</TableCell>
                  <TableCell align="right">رابط یطلب من مھندس علاء</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">ویسترن او موني جرام</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">عملات رقمیة</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">بیبال</TableCell>
                  <TableCell align="right">رابط یطلب من الاء </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    تحویل للبنك العربي بالاردن
                  </TableCell>
                  <TableCell align="right">
                    نفس تفاصیل الویسترن من خلال / العلاونة ، زمزم ، ابو شیخة
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel11"}
        onChange={handleChange("panel11")}
      >
        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
          <Typography fontWeight="bolder" fontSize={24} color="#ffc107">
            العراق
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold" align="right">
                    طریقة التحویل
                  </TableCell>
                  <TableCell className="fw-bold" align="right">
                    التفاصیل
                  </TableCell>
                  <TableCell className="fw-bold" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">زین كاش العراق</TableCell>
                  <TableCell align="right">
                    مھندس ماھر
                    <br />
                    +964 770 4322208
                  </TableCell>
                  <TableCell align="right">
                    تواصل مع مھندس ماھر على نفس الرقم قبل التحویل وبعد التحویل
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">فیزا</TableCell>
                  <TableCell align="right"> رابط یطلب من مھندس علاء</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    حوالة داخلیة على سوق البورصة بأربیل
                  </TableCell>
                  <TableCell align="right">ALAA RAJAB 07510061752</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">تسلیم بالید</TableCell>
                  <TableCell align="right">ضمن اربیل للمھندس علاء</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">ویسترن او موني جرام</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    تحویل للبنك العربي بالاردن
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">دفع بالمكتب العراق</TableCell>
                  <TableCell align="right">
                    بغداد - الكرادة داخل - دایموند مول _ الطابق السادس
                    <br />
                    <a href="https://goo.gl/maps/UjC2nwp3ZM37VBs88">هنا</a>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel12"}
        onChange={handleChange("panel12")}
      >
        <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
          <Typography fontWeight="bolder" fontSize={24} color="#ffc107">
            سلطنة عمان
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold" align="right">
                    طریقة التحویل
                  </TableCell>
                  <TableCell className="fw-bold" align="right">
                    التفاصیل
                  </TableCell>
                  <TableCell className="fw-bold" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    تحویل للبنك العربي بالاردن
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">بیبال</TableCell>
                  <TableCell align="right"> رابط یطلب من آلاء براوي</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">ویسترن او موني جرام</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">فیزا</TableCell>
                  <TableCell align="right">رابط یطلب من مھندس علاء</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel13"}
        onChange={handleChange("panel13")}
      >
        <AccordionSummary aria-controls="panel13d-content" id="panel13d-header">
          <Typography fontWeight="bolder" fontSize={24} color="#ffc107">
            فلسطین
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="fw-bold" align="right">
                    طریقة التحویل
                  </TableCell>
                  <TableCell className="fw-bold" align="right">
                    التفاصیل
                  </TableCell>
                  <TableCell className="fw-bold" align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">ویسترن او موني جرام</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">بیبال</TableCell>
                  <TableCell align="right"> رابط یطلب من آلاء براوي</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default StaticPayment;
