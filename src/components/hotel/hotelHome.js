import React, { useEffect, useState } from "react";
import Header from "../Header";
import GuidList from "./GuidList";
import "./hotelHome.css";
import HotelList from "./HotelList";
const HotelHome = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const email = localStorage.getItem("userEmail");
      const usertype = localStorage.getItem("usertype");
      const token = localStorage.getItem("token");

      //   setEmail(email);
      console.log(email);
      console.log(usertype);
      console.log(token);
    } catch (error) {
      console.log(error);
    }
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
