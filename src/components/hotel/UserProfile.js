import React, { useState, useEffect } from "react";
import Header from "../Header";
import "./userProfile.css";
import { useStateValue } from "../../StateProvider";
import axios from "axios";
const UserProfile = () => {
  const [{ userInfo, user }, dispatch] = useStateValue();
  const [userData, setUserData] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    bio: "",
    living: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setUserData(userInfo);
    if (userInfo) {
      setFormData({
        bio: userInfo?.bio || "",
        email: userInfo.email,
        living: userInfo?.living || "",
        userName: userInfo?.userName,
      });
    }
  }, [userInfo]);

  useEffect(() => {
    if (user?.id) {
      axios
        .get(`http://localhost:5000/user/${user.id}`, {
          headers: { tour: user?.token },
        })
        .then((res) => {
          console.log("res", res.data);

          dispatch({
            type: "GET_USER_INFO",
            userInfo: res.data,
          });
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [user]);
  const submitForm = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    axios
      .put(`http://localhost:5000/user/${user.id}`, formData, {
        headers: { tour: user?.token },
      })
      .then((res) => {
        dispatch({
          type: "GET_USER_INFO",
          userInfo: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
    setFormData({ ...formData, bio: "", living: "", userName: "" });
    // console.log(formData);
  };
  return (
    <div className="userProfile">
      <Header />
      <div className="profile__container">
        <div className="profile__container__left">
          <div className="profile__image">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt="user"
            />
            <p>{userInfo?.userName}</p>
          </div>
        </div>
        <div className="profile__container__right">
          <form
            onSubmit={(e) => {
              submitForm(e);
            }}
          >
            <div className="form-floating mb-3">
              <input
                type="email"
                disabled
                className="form-control user_profile_control"
                value={formData.email}
                name="email"
                onChange={(e) => onChange(e)}
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control user_profile_control"
                id="floatingInput"
                value={formData.userName}
                name="userName"
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="floatingInput">userName</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control user_profile_control"
                id="floatingInput"
                value={formData.bio}
                name="bio"
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="floatingInput">Bio</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control user_profile_control"
                id="floatingInput"
                value={formData.living}
                name="living"
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="floatingInput">Address</label>
            </div>
            <button type="submit" className="btn btn-danger">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
