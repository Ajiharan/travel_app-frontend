import React, { useState, useEffect } from "react";
import Header from "../Header";
import { useStateValue } from "../../StateProvider";
import axios from "axios";
import "./GuideProfile.css";
const GuideProfile = () => {
  const [{ userInfo, user }, dispatch] = useStateValue();
  const [userData, setUserData] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    bio: "",
    living: "",
    experience: 1,
    price: "",
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
        price: userInfo?.price,
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
    setFormData({
      ...formData,
      bio: "",
      living: "",
      userName: "",
      experience: 1,
      price: "",
    });
    // console.log(formData);
  };
  return (
    <div className="userProfile">
      <Header />
      <div className="profile__container">
        <div className="profile__container__left">
          <div className="profile__image">
            <img
              src={
                userInfo?.profilePic ||
                "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              }
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
                required
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
                required
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
                required
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
                required
              />
              <label htmlFor="floatingInput">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control user_profile_control"
                id="floatingInput"
                value={formData.experience}
                name="experience"
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="floatingInput">experience</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control user_profile_control"
                id="floatingInput"
                value={formData.price}
                name="price"
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="floatingInput">price</label>
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

export default GuideProfile;
