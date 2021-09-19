import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    type: "tourist",
  });

  const { userName, email, password, password2, type } = formData;

  const onChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password === password2) {
      const newUser = {
        userName,
        email,
        password,
        type,
      };

      axios
        .post("http://localhost:5000/user/signup", newUser)
        .then((response) => {
          history.push("/login");
        })
        .catch((err) => {
          // alert(err);
          console.log(err.response);
        });
    } else {
      alert("Password not same");
    }
  };

  return (
    <div className="register-form">
      <h1 className="heading">Register</h1>
      <p className="lead">
        <i className="fas fa-user"></i>
        Create Your Account
      </p>

      <br />
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group d-flex justify-content-center">
          <select
            className="form-select select-type"
            onChange={(e) => onChange(e)}
            value={type}
            name="type"
            required
          >
            <option>None</option>
            <option value="tourist">Tourist</option>
            <option value="guide">Guide</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="userName"
            value={userName}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
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
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="link">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default Register;
