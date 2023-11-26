import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import {
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useGetCommentsQuery,
  useGetCourseByIdQuery,
  useGetRelatedCoursesQuery,
  useIsBuyMutation,
} from "../../../store/RtkSlices/coursesSlice";
import { apiStorge } from "../../../constans/url";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { HTMLDisplay } from "../../../components/utils/HTMLDisplay";
import { useHeaders } from "../../../hooks/useHeaders";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { toast } from "react-toastify";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LockIcon from "@mui/icons-material/Lock";
import Loader from "../../../components/utils/Loader";
import DialogPayment from "./Dialog/DialogPayment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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

function Course() {
  const { id } = useParams();
  // hooks
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const headers = useHeaders();
  // var
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [comment, setDataComment] = React.useState("");
  const [selectRange, setSelectRange] = React.useState(5);
  // method
  const { data, isLoading } = useGetCourseByIdQuery({ id });
  const [createComment, { status }] = useCreateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [isBuy, { data: dataCheck }] = useIsBuyMutation();

  const { data: dataCommnet } = useGetCommentsQuery({ id });
  // handles
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleAddComment = () => {
    createComment({
      headers: headers,
      body: { comment: comment, evaluation: selectRange, course_id: id },
    });
  };
  const { data: dataD } = useGetRelatedCoursesQuery({ id: id });
  const handleDeleteComment = (e) => {
    deleteComment({ headers: headers, id: e.target.id });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    isBuy({ headers: headers, id: id, body: "dsa" });
  }, [id]);

  useEffect(() => {
    if (status == "fulfilled") toast.success("تم اضافة التعليق");
  }, [status]);
  // swiper
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {/* landing */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            className="bg-web d-flex align-items-center bg-web"
            style={{ minHeight: "30vh" }}
          >
            <div className="container">
              <h3 className="text-white fw-bold">{data?.name}</h3>
              <small className="text-white">{data?.description}</small>
            </div>
          </div>
          <div>
            {/* card course */}
            <div className="container card mx-auto my-2 pb-3">
              <div className="row">
                <div className="col-md-5">
                  <img
                    src={
                      apiStorge + data?.image?.id + "/" + data?.image?.file_name
                    }
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-text mt-2 mb-5"></h4>
                    <h5 className="card-text mt-2">
                      <i className="fa-solid fa-person  fs-3 ms-2"></i>المتدربين
                      : {data?.studentBuyCourseCount}
                    </h5>
                    <hr />
                    <h5 className="card-text mt-2">
                      <i className="far fa-clock fa-person  fs-4 ms-2"></i>المدة
                      : {data?.studey_hour}
                      <hr />
                    </h5>
                    <h5 className="card-text mt-2">
                      <i className="fa-solid fa-book  fs-4 ms-2"></i>عدد الدروس:{" "}
                      {data?.curriculumCount}
                      <hr />
                    </h5>
                    <h5 className="card-text mt-2">
                      <i className="fas fa-signal  fs-4 ms-2"></i>المستوى :{" "}
                      {data?.level}
                      <hr />
                    </h5>
                  </div>
                  <div>
                    {localStorage.getItem("role") == "student" &&
                      dataCheck != "1" &&
                      localStorage.getItem("token") && (
                        <button
                          onClick={() => setOpen(true)}
                          className="btn btn-warning text-white px- fs-4"
                        >
                          شراء :{+data?.cost - +data?.discount}$
                        </button>
                      )}
                    {!localStorage.getItem("token") && (
                      <button
                        onClick={() => navigate("/login")}
                        className="btn btn-warning text-white px- fs-4"
                      >
                        شراء :{+data?.cost - +data?.discount}$
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="container my-3">
              <h3>كورسات ذات صلة</h3>
              <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                centeredSlides={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper py-5"
              >
                {dataD?.data.map((item) => (
                  <SwiperSlide key={item?.id}>
                    <div
                      onClick={() => navigate("/course/" + item?.id)}
                      className="card p-3 mt-2"
                      key={item?.id}
                    >
                      <div style={{ width: "320px" }}>
                        <img
                          style={{
                            width: "100%",
                            objectFit: "contain",
                            height: 320,
                          }}
                          src={
                            apiStorge +
                            item?.image?.id +
                            "/" +
                            item?.image?.file_name
                          }
                          alt=""
                        />
                      </div>
                      <h4 className="title-card">{item?.title}</h4>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="container mt-5">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  scrollButtons
                  variant="scrollable"
                >
                  <Tab label="ملخص" {...a11yProps(0)} />
                  <Tab label="الاستاذ" {...a11yProps(1)} />
                  <Tab label="التعليقات" {...a11yProps(2)} />
                  <Tab label="الدروس" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <HTMLDisplay html={data?.overview} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div className="d-flex justify-conetnt-between aligm-items-center flex-wrap">
                  <div className="image  p-2">
                    <img
                      src={
                        apiStorge +
                        data?.teacher_debend?.teacher?.image?.id +
                        "/" +
                        data?.teacher_debend?.teacher?.image?.file_name
                      }
                    />
                  </div>
                  <div className="p-2" style={{ minWidth: "320px" }}>
                    <h3 className=" w-100">
                      {data?.teacher_debend?.teacher?.first_name}
                      {" " + data?.teacher_debend?.teacher?.last_name}
                    </h3>
                    <HTMLDisplay html={data?.teacher_debend?.teacher?.about} />
                  </div>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                {dataCommnet &&
                  dataCommnet?.data?.map((item) => (
                    <div key={item?.id} className="mt-2">
                      <Card sx={{ position: "relative" }}>
                        {localStorage.getItem("name") ==
                          item?.student?.first_name +
                            " " +
                            item?.student?.last_name && (
                          <Button
                            className="btn"
                            id={item?.id}
                            style={{
                              position: "absolute",
                              left: "5px",
                              top: "5px",
                              cursor: "pointer",
                              zIndex: 5,
                            }}
                            onClick={handleDeleteComment}
                            color="inherit"
                          >
                            X
                          </Button>
                        )}
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
                                src={
                                  apiStorge +
                                  item?.student?.image?.id +
                                  "/" +
                                  item?.student?.image?.file_name
                                }
                              />
                            </div>
                            <div className="me-3">
                              {item?.student?.first_name}{" "}
                              {item?.student?.last_name}
                              <br />
                              <div>
                                {Array.from(
                                  { length: item?.evaluation },
                                  (_, index) => (
                                    <StarIcon key={index} color="warning" />
                                  )
                                )}
                                {Array.from(
                                  { length: 5 - item?.evaluation },
                                  (_, index) => (
                                    <StarBorderIcon
                                      key={index}
                                      color="warning"
                                    />
                                  )
                                )}
                              </div>
                            </div>
                          </Typography>
                          <Typography
                            variant="body"
                            className="mt-2"
                            color="text.secondary"
                          >
                            <HTMLDisplay
                              html={item?.comment?.substring(0, 30)}
                            />
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                {data?.curriculum?.map((item) => (
                  <Card
                    className="mt-2"
                    key={item?.id}
                    sx={{
                      position: "relative",
                      borderRight: "3px solid #07294d",
                      background: "#dddddd7a",
                      borderBottom: "2px solid #07294d",
                    }}
                    onClick={() => {
                      (localStorage.getItem("role") != "student" ||
                        dataCheck == "1" ||
                        item?.is_free == "1") &&
                        navigate("/curriculum", {
                          state: {
                            id: item?.id,
                            description: item?.description,
                            title: item?.title,
                            free: item?.is_free,
                            video_link: item?.video_link,
                            course_id: item?.course_id,
                          },
                        });
                    }}
                  >
                    {(localStorage.getItem("role") != "student" ||
                      (dataCheck != "1" && item?.is_free != "1")) && (
                      <Button
                        className="btn"
                        id={item?.id}
                        style={{
                          position: "absolute",
                          left: "5px",
                          top: "5px",
                          cursor: "pointer",
                          zIndex: 5,
                        }}
                        color="warning"
                      >
                        <LockIcon />
                      </Button>
                    )}
                    <CardContent>
                      <Typography
                        className="d-flex align-items-center"
                        gutterBottom
                        variant="body1"
                        component="div"
                      >
                        <p>{item?.title} </p>
                      </Typography>
                      <Typography
                        variant="body"
                        className="mt-2"
                        color="text.secondary"
                      >
                        <HTMLDisplay html={item?.comment?.substring(0, 30)} />
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </CustomTabPanel>
            </div>
            {/* add Comment */}
            {localStorage.getItem("role") == "student" && (
              <div className="container">
                <div
                  className="my-5"
                  style={{
                    padding: "15px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <h4>اضف تعليق</h4>
                  <div className="mb-3">
                    <textarea
                      placeholder="اكتب"
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      onChange={(e) => setDataComment(e.target.value)}
                      style={{ minHeight: "180px" }}
                    ></textarea>
                  </div>
                  <div>
                    <FormControl className="mb-2">
                      قيم الكورس
                      <Select
                        value={selectRange}
                        sx={{ minWidth: "100px" }}
                        onChange={(e) => setSelectRange(e.target.value)}
                      >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <button
                    disabled={!comment}
                    onClick={handleAddComment}
                    className="btn btn-warning py-3 px-4 text-white"
                  >
                    ادراج تعليق
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
      {open && (
        <DialogPayment
          cost={data?.cost - data?.discount}
          id={data?.id}
          open={open}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}

export default Course;
