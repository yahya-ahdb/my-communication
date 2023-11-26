import { useState } from "react";
import LayoutAdmin from "../../components/LayoutAdmin";
import avatar from "../../../../../public/avatar.png";
import {
  useGetAllCategoriesQuery,
  useGetAllTechersQuery,
} from "../../../../store/RtkSlices/adminSlice";
import { useHeaders } from "../../../../hooks/useHeaders";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { apiUrl } from "../../../../constans/url";

export default function AddCoursePage() {
  const headers = useHeaders();

  const {
    isLoading: isLoadingCategories,
    data: dataCategories,
    status: statusCategoy,
  } = useGetAllCategoriesQuery({ headers: headers });
  const {
    isLoading: isLoadingTechers,
    data: dataTechers,
    status: statusTechers,
  } = useGetAllTechersQuery({ headers: headers });

  const [nameCourse, setNameCourse] = useState("");
  const [level, setLevel] = useState("");
  const [cost, setCost] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  const [overview, setOverview] = useState("");
  const [category, setCategory] = useState("");
  const [studey_hour, setStudey_hour] = useState("");
  const [teacher, setTecher] = useState("");

  const [img, setImg] = useState(avatar);
  const [slectedFile, setSlectedFile] = useState(null);
  const [loaing, setLoading] = useState(false);

  function onImageChange(event) {
    if (event.target.files && event.target.files[0])
      setImg(URL.createObjectURL(event.target.files[0]));
    setSlectedFile(event.target.files[0]);
  }
  const handelCloseImage = () => {
    setImg(avatar);
    setSlectedFile(null);
  };
  // console.log( isLoadingTechers )
  // console.log( dataTechers )
  // console.log( statusTechers )
  const handelSubmit = async () => {
    const formData = new FormData();
    formData.append("name", nameCourse);
    formData.append("cost", Number(cost));
    formData.append("discount", Number(discount));
    formData.append("level", level);
    formData.append("teacher_id", teacher);
    formData.append("description", description);
    formData.append("category_id", category);
    formData.append("overview", overview);
    formData.append("studey_hour", studey_hour);
    formData.append("image", slectedFile);
    const dataValue = Object.fromEntries(formData.entries());
    console.log("dataValue", dataValue);

      // createCourse( { headers: headers, data: formData } )
      setLoading(true);
      await axios
        .post(apiUrl + "createCourse", formData, {
          headers: { ...headers, "Content-Type": "multipart/form-data" },
        })
        .then(() => {
          toast.success(`تم انشاء ${nameCourse}`);
          setLoading(false);
        })
        .catch((err) => toast.error(err.response.data.message));
  };
  return (
    <LayoutAdmin
      pages={
        <div className="container ">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <h1>إضافة كورس جديد</h1>
          </div>
          <div className="categories-container"></div>
          <div className="container form-addCourse">
            <h3 className="text-center text-warning">
              معلومات الكورس <i className="fa-solid fa-book"></i>
            </h3>

            <div className="mb-3">
              <label htmlFor="nameCourse" className="form-label">
                اسم الكورس
              </label>
              <input
                value={nameCourse}
                type="text"
                name="text"
                className="form-control"
                id="nameCourse"
                onChange={(e) => setNameCourse(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="cost" className="form-label">
                سعر الكورس
              </label>
              <input
                value={cost}
                type="number"
                name="email"
                className="form-control"
                id="cost"
                onChange={(e) => setCost(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="costAfter" className="form-label">
                الخصم
              </label>
              <input
                value={discount}
                type="number"
                name="email"
                className="form-control"
                id="costAfter"
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="level" className="form-label">
                المستوى
              </label>
              <input
                value={level}
                type="text"
                name="email"
                className="form-control"
                id="level"
                onChange={(e) => setLevel(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Study-hour" className="form-label">
              عدد الساعات الدراسية
              </label>
              <input
                value={studey_hour}
                type="number"
                className="form-control"
                id="Study-hour"
                onChange={(e) => setStudey_hour(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                الوصف
              </label>
              <input
                value={description}
                type="email"
                name="email"
                className="form-control"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                التصنيف
              </label>
              <select
                value={category}
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option selected>اختر تصنيف</option>
                {dataCategories?.map((el) => {
                  return (
                    <option value={el.id} key={el.id}>
                      {el.value}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                المدرس
              </label>
              <select
                value={teacher}
                className="form-select"
                aria-label="Default select example"
                placeholder=""
                onChange={(e) => setTecher(e.target.value)}
              >
                <option>اختر مدرس</option>

                {dataTechers?.map((el) => {
                  return (
                    <option value={el.user_id} key={el.id}>
                      {el.first_name + " " + el.last_name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-3 upload-photo">
              {img !== avatar ? (
                <i
                  onClick={handelCloseImage}
                  className="fa-regular fa-circle-xmark "
                  style={{ margin: "10px", cursor: "pointer" }}
                ></i>
              ) : (
                <div></div>
              )}
              {img === avatar ? (
                <span className="text-gray-500">إضافة صورة للكورس</span>
              ) : null}
              <label
                htmlFor="upload-photo"
                style={{ cursor: "pointer", width: "200px" }}
              >
                <img src={img} alt="" width={200} height={200} />
              </label>
              <input
                id="upload-photo"
                type="file"
                name="photo"
                onChange={onImageChange}
                style={{ display: "none" }}
              />
            </div>

            <div className="mb-3" style={{ margin: " 0" }}>
              <label className="form-label">ملخص عن الكورس</label>
              <div>
                <ReactQuill
                  theme="snow"
                  value={overview}
                  onChange={setOverview}
                  style={{ direction: "ltr", background: "white" }}
                />
              </div>
            </div>

            <button
              onClick={handelSubmit}
              className="btn btn-warning text-white px-4 py-2"
            >
              تسجيل
            </button>
          </div>
        </div>
      }
    />
  );
}
