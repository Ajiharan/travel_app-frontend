import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect
// } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/auth/landing";
import TravelerHome from "./components/traveler/travelerHome";
import AdminHome from "./components/admin/adminHome";
import HotelHome from "./components/hotel/hotelHome";
import hotelAdmin from "./components/hotel/hotelAdmin";
import GuideHome from "./guide/GuideHome";

function App() {
  const [token, setToken] = useState(false);
  const [localToken, setLocalToken] = useState(null);

  useEffect(() => {});

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Landing} />
        <Route exzct path="/guideHome" component={GuideHome} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/travelerhome" component={TravelerHome} />
        <Route exact path="/adminhome" component={AdminHome} />
        <Route exact path="/hotel" component={HotelHome} />
        <Route exact path="/hoteladmin" component={hotelAdmin} />
      </Router>
    </div>
  );
}

export default App;
