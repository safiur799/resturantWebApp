import React from "react";
import "./Card.css";

export default function Card({ food }) {
  return (
    <div className="parent">
      <div className="card  container d-flex flex-row">
        <div className="p-2">
          <img
            src={food.img}
            alt="Avatar"
            style={{ width: "80%", padding: "0px " }}
          />
        </div>
        <div className="container1 ">
          <h4>
            <b>{food.naem}</b>
          </h4>
          <span>{food.description}</span>
          <p>
            Cost ${food.price} for one<br></br>
            <span>
              min ${food.min} to up {food.max}min
            </span>
            <br></br>
            <span>{food.payment}</span>
          </p>
        </div>
        <div className="">
          <p>
            <b>Rating-{food.rating}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
