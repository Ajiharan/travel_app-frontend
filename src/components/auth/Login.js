import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../../StateProvider";

const Login = () => {
  let history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [{ user }, dispatch] = useStateValue();
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/user/login", userDetails)
      .then((result) => {
        localStorage.setItem("token", result?.data.token);
        localStorage.setItem("userLevel", result?.data.preference);
        localStorage.setItem("uid", result?.data?.id);
        dispatch({
          type: "LOGIN_USER",
          user: {
            token: result?.data.token,
            userLevel: result?.data.preference,
            id: result?.data?.id,
          },
        });
        history.replace("/");
      })
      .catch((err) => {});
  };

  return (
    <div className="login-form">
      <h1 className="heading">Login</h1>
      <p className="lead">
        <i className="fas fa-user"></i>
        Logging Your Account
      </p>
      <br />
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
