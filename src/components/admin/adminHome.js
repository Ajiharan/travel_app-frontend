import React, { useEffect } from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import { useStateValue } from "../../StateProvider";
import AdminUsersList from "./AdminUsersList";

const AdminHome = () => {
  const [{ userDetails, user }, dispatch] = useStateValue();
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/view/all", {
        headers: { tour: user?.token },
      })
      .then((result) => {
        dispatch({
          type: "GET_USER_DETAILS",
          userDetails: result.data.filter((r) => r.userLevel != 4),
        });
      })
      .catch((err) => {});
  }, [user]);
  return (
    <div className="login-form">
      <AdminHeader />
      <AdminUsersList />
    </div>
  );
};

export default AdminHome;
