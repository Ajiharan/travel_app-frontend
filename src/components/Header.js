import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
const Header = () => {
  const history = useHistory();
  const [{}, dispatch] = useStateValue();
  const checkAuth = () => {
    const token = localStorage.getItem("token");

    return !token;
    // const preference = localStorage.getItem("preference");
  };

  const signOut = () => {
    localStorage.clear();
    dispatch({
      type: "RESET_USER",
    });
    history.replace("/");
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div className="container">
        {/* <h2 style={{ color: "white" }}>STUDENT MANAGMENT SYSTEM</h2> */}
        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
                About
              </a>
            </li>
            {!checkAuth() && (
              <li className="nav-item mx-0 mx-lg-1">
                <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/">
                  Home
                </Link>
              </li>
            )}
            {!checkAuth() && (
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  to="/login"
                >
                  Feedback
                </Link>
              </li>
            )}
            {checkAuth() && (
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}

            {checkAuth() && (
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  to="/register"
                >
                  SignUp
                </Link>
              </li>
            )}

            {!checkAuth() && (
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
            )}

            {!checkAuth() && (
              <li className="nav-item mx-0 mx-lg-1">
                <Link
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  to="/"
                  onClick={signOut}
                >
                  SignOut
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
