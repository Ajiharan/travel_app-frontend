import React, { useEffect, useState } from "react";
import Header from "../Header";
import GuidList from "./GuidList";
import "./hotelHome.css";
import HotelList from "./HotelList";
import axios from "axios";
import { useStateValue } from "../../StateProvider";
const HotelHome = () => {
  const [{ userInfo, user }, dispatch] = useStateValue();
  useEffect(() => {
    if (user?.id) {
      axios
        .get(`http://localhost:5000/user/${user.id}`, {
          headers: { tour: user?.token },
        })
        .then((res) => {
          console.log(res.data);

          dispatch({
            type: "GET_USER_INFO",
            userInfo: res.data,
          });
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
    getTouristList();
  }, []);

  const getTouristList = () => {
    axios
      .get(`http://localhost:5000/user/tourist/2`, {
        headers: { tour: user?.token },
      })
      .then((res) => {
        console.log(res.data);

        dispatch({
          type: "GET_USER_INFO",
          userInfo: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  //getting async storage data

  return (
    <div className="hotel-home-container">
      <Header />
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="assets/images/h1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/h2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/h3.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card-container mt-4">
        <HotelList />
        <GuidList />
      </div>
    </div>
  );
};

export default HotelHome;
