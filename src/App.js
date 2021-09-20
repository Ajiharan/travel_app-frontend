import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/auth/landing";
import TravelerHome from "./components/traveler/travelerHome";
import AdminHome from "./components/admin/adminHome";
import HotelHome from "./components/hotel/hotelHome";
import hotelAdmin from "./components/hotel/hotelAdmin";
import GuideHome from "./components/guide/GuideHome";
import Switch from "react-bootstrap/esm/Switch";
import { useStateValue } from "./StateProvider";
import UserProfile from "./components/hotel/UserProfile";
import HotelBook from "./components/hotel/HotelBook";
import GuideProfile from "./components/guide/GuideProfile";
import GuideBook from "./components/hotel/GuideBook";
import ManagerHome from "./components/manager/ManagerHome";
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    console.log("user", user);
  }, [user]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch({
        type: "LOGIN_USER",
        user: {
          token: localStorage.getItem("token"),
          userLevel: localStorage.getItem("userLevel"),
          id: localStorage.getItem("uid"),
        },
      });
    }
  }, []);

  const userHome = () => {
    if (user?.userLevel == 1) {
      return (
        <React.Fragment>
          <Route exact path="/" component={HotelHome} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/hotelBook" component={HotelBook} />
          <Route exact path="/guideBook" component={GuideBook} />
        </React.Fragment>
      );
    } else if (user?.userLevel == 2) {
      return (
        <React.Fragment>
          <Route exact path="/" component={GuideHome} />
          <Route exact path="/profile" component={GuideProfile} />
        </React.Fragment>
      );
    } else if (user?.userLevel == 3) {
      return (
        <React.Fragment>
          <Route exact path="/" component={ManagerHome} />
        </React.Fragment>
      );
    } else if (user?.userLevel == 4) {
      return (
        <React.Fragment>
          <Route exact path="/" component={AdminHome} />
        </React.Fragment>
      );
    }
    return <Route exact path="/" component={Landing} />;
  };

  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <Router>
        <Switch>
          {userHome()}

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/travelerhome" component={TravelerHome} />
          <Route exact path="/adminhome" component={AdminHome} />

          <Route exact path="/hoteladmin" component={hotelAdmin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
