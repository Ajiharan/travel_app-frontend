import React, { useState } from "react";
import "./ManagerBookingTable.css";
import { useStateValue } from "../../StateProvider";
const ManagerBookingTable = () => {
  const [{ bookingDetails }] = useStateValue();
  return (
    <div className="booking_table table-striped">
      <h3 className="text-info">Hotel Booking Details</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">hotelName</th>
            <th scope="col">date</th>
            <th scope="col">days stay</th>
            <th scope="col">peoples</th>
            <th scope="col">room type</th>
            <th scope="col">userName</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tbody>
          {bookingDetails.map(
            ({
              hotelName,
              date,
              days,
              peoples,
              roomType,
              userName,
              _id,
              price,
            }) => (
              <tr key={_id}>
                <td>{hotelName}</td>
                <td>{date}</td>
                <td>{days}</td>
                <td>{peoples}</td>
                <td>{roomType}</td>
                <td>{userName}</td>
                <td>{`Rs.${price}`}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerBookingTable;
