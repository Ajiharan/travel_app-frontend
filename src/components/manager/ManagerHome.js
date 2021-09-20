import React, { useEffect } from "react";
import ManagerBookingTable from "./ManagerBookingTable";
import ManagerHeader from "./ManagerHeader";
import { useStateValue } from "../../StateProvider";
import axios from "axios";
const ManagerHome = () => {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    axios
      .get("http://localhost:5000/hotelBooking/viewAll", {
        headers: { tour: user?.token },
      })
      .then((result) => {
        dispatch({
          type: "GET_BOOKING_DETAILS",
          bookingDetails: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <div className="manager_home">
      <ManagerHeader />
      <ManagerBookingTable />
    </div>
  );
};

export default ManagerHome;
