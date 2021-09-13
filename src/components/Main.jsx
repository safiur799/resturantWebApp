import React from "react";
import "./Card.css";
// import Form from "./Form";
// import Data from "./Data";
import { useState } from "react";
import Data from "./Data";

// const data = [
//   {
//     img: "",
//     naem: "",
//     description: "",
//     price: "",
//     min: "",
//     max: "",
//     payment: "",
//     rating: "",
//     votes: "",
//     review: "",
//   },
// ];
export default function Main() {
  // const [formvalue, setForvalue] = useState(data);
  // const ondata = (formData) => {
  //   console.log(formData);
  //   setForvalue([{ ...formvalue, formData }]);
  // };
  const [hotels, setHotels] = useState(Data);
  const filterItem = (rating) => {
    const updateData = Data.filter((el) => {
      return el.rating >= rating;
    });
    setHotels(updateData);
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">Resturant Web App</h1>
      <hr />
      <div classNam="menu-tabs container">
        <div className="menu-tabs d-flex justify-content-around">
          <button className="btn btn-primary" onClick={() => filterItem(3)}>
            Ratin1
          </button>
          <button className="btn btn-primary">Ratin2</button>

          <button className="btn btn-primary">Ratin3</button>

          <button className="btn btn-primary">Ratin4 </button>
        </div>
      </div>

      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {hotels.map((el) => {
                const { img, name, description, price, rating } = el;
                return (
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="row Item-inside">
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img
                          src={img}
                          alt=""
                          className="img-fluid"
                          style={{ height: "80%" }}
                        />
                      </div>
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-litle pt-4 pb-3">
                          <h1>{name}</h1>
                          <p>{description}</p>
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between">
                            <h2>{price}</h2>
                            <a href="#">
                              <button className="btn btn-primary">
                                {rating}
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
