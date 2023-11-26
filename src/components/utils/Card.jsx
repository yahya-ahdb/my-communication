import React, { useState } from "react";
import DialogPayment from "../../pages/courses/course/Dialog/DialogPayment";
import { useNavigate } from "react-router-dom";

function Card({
  id,
  image,
  price,
  overview,
  level,
  dis,
  title,
  desc,
  titleBtn,
  eventBtn,
  openDial,
}) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div data-aos="fade" className="card p-1" style={{ maxWidth: "340px" }}>
      <div
        style={{ maxWidth: "300px", margin: "auto", objectFit: "contain" }}
        className="card-top"
      >
        <img
          style={{ width: "100%", height: "300px", objectFit: "contain" }}
          src={image}
        />
      </div>
      <h5 className="mt-2 text-title">{title}</h5>
      {price && (
        <span>
          التكلفة :{" "}
          {(dis == 0 || dis == null) ? (
            price
          ) : (
            <span style={{ textDecoration: "line-through" }}>{price}</span>
          )}{" "}
          $ {dis > 0 && " /  "} {dis > 0 ? `${dis}$` : ""}{" "}
        </span>
      )}
      {desc && <span>{desc}</span>}
      {level && <span>المستوى :{level}</span>}
      <div className="d-flex justify-content-between align-items-center">
        <button
          onClick={eventBtn}
          className={`btn btn-warning px-3 ${!openDial && "w-100"} text-white `}
        >
          {titleBtn}
        </button>
        {openDial && (
          <button
            onClick={() =>{localStorage.getItem("token") ? setOpen(true) : navigate("/login")}}
            className="btn btn-warning px-3 text-white "
          >
            {"شراء"} {"  " + dis != 0 ? dis : price}
            {"$"}{" "}
          </button>
        )}{" "}
      </div>
      {open && (
        <DialogPayment
          cost={dis != 0 ? dis : price}
          id={id}
          open={open}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}

export default Card;
