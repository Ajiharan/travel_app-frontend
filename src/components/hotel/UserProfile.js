import React from "react";
import Header from "../Header";
import "./userProfile.css";
const UserProfile = () => {
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
            <p>userName</p>
          </div>
        </div>
        <div className="profile__container__right">
          <form>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control user_profile_control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control user_profile_control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">userName</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control user_profile_control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Bio</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control user_profile_control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Address</label>
            </div>
            <button className="btn btn-danger">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
