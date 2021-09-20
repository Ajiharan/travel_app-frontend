import React, { useEffect, useState } from "react";

const TravelerHome = () => {
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
    <div className="login-form">
      <h1 className="heading">TravelerHome</h1>
      <p className="lead">
        <i className="fas fa-user"></i>
        TravelerHome
      </p>
      <br />
    </div>
  );
};

export default TravelerHome;
