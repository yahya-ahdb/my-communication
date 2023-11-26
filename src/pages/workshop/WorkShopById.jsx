import React, { useEffect } from "react";
import { HTMLDisplay } from "../../components/utils/HTMLDisplay";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetLastFFourWorkshopQuery,
  useGetWorkshopByIdQuery,
} from "../../store/RtkSlices/workShopSlice";
import { apiStorge } from "../../constans/url";
import Loader from "../../components/utils/Loader";

function WorkShopById() {
  const { id } = useParams();
  const { data, isLoading } = useGetWorkshopByIdQuery(id);
  const { data: dataD } = useGetLastFFourWorkshopQuery();
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll(0, 0);
  }, [id]);
  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>{data?.title}</h1>
          <Link
            target="_blank"
            className="my-3 px-4 fs-5 text-white btn btn-warning"
            to={data?.you_tube_link}
          >
            رابط الحضور
          </Link>
          {/* <h3>تبداء :{data?.start_at}</h3> */}
          <div className="container w-100">
            <img
              className="w-100"
              style={{ maxHeight: "500px", objectFit: "contain" }}
              src={apiStorge + data?.image?.id + "/" + data?.image?.file_name}
            />
          </div>
          <HTMLDisplay html={data?.description} />
        </>
      )}
      <h3 className="mt-5">مقالات ذات صلة</h3>
      <div className="d-flex justify-content-between flex-wrap my-3">
        {dataD?.map((item) => (
          <div
            onClick={() => navigate("/workshop/" + item?.id)}
            className="card p-3 mt-2"
            key={item?.id}
          >
            <div style={{ maxWidth: "320px" }}>
              <img
                style={{ width: "100%" }}
                src={apiStorge + item?.image?.id + "/" + item?.image?.file_name}
                alt=""
              />
            </div>
            <h4 className="title-card">{item?.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkShopById;
