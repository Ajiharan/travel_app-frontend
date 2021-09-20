import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import { useStateValue } from "../../StateProvider";
const GuideHome = () => {
  const [{ userInfo, user }, dispatch] = useStateValue();
  useEffect(() => {
    if (user?.id) {
      axios
        .get(`http://localhost:5000/user/${user.id}`, {
          headers: { tour: user?.token },
        })
        .then((res) => {
          console.log(res.data);

          dispatch({
            type: "GET_USER_INFO",
            userInfo: res.data,
          });
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, []);
  return (
    <div className="guide-home">
      <Header />
    </div>
  );
};

export default GuideHome;
