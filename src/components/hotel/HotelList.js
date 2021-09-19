import React, { useState } from "react";
import HotelCard from "./HotelCard";
import "./hotelList.css";
const HotelList = () => {
  const [hotels, setHotels] = useState([
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/desktop-application-46c8f.appspot.com/o/h1.jpg?alt=media&token=8b72a2b3-a34e-416a-b764-6cc77b03e5c4",
      name: "us hotel",
      stars: 4,
      place: "America",
      price: 25000,
      id: 1,
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/desktop-application-46c8f.appspot.com/o/h2.jpg?alt=media&token=9eb11dab-4d70-4dd1-b8fa-e1c64b37e963",
      name: "us hotel",
      stars: 3,
      place: "America",
      price: 21000,
      id: 2,
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/desktop-application-46c8f.appspot.com/o/h3.jpg?alt=media&token=3d8a2c56-7a19-4548-8f48-eae7f0e7c1d6",
      name: "us hotel",
      stars: 4,
      place: "America",
      price: 28000,
      id: 3,
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/desktop-application-46c8f.appspot.com/o/h3.jpg?alt=media&token=3d8a2c56-7a19-4548-8f48-eae7f0e7c1d6",
      name: "us hotel",
      stars: 3,
      place: "America",
      price: 28000,
      id: 4,
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/desktop-application-46c8f.appspot.com/o/h3.jpg?alt=media&token=3d8a2c56-7a19-4548-8f48-eae7f0e7c1d6",
      name: "us hotel",
      stars: 3,
      place: "America",
      price: 28000,
      id: 5,
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/desktop-application-46c8f.appspot.com/o/kelsey-curtis--27u_GzlAFw-unsplash.jpg?alt=media&token=630d1da6-6830-44d6-9f92-966df8b5106b",
      name: "us hotel",
      stars: 5,
      place: "America",
      price: 35000,
      id: 6,
    },
  ]);
  return (
    <div className="hotel_list_container">
      <h4 className="m-4">BOOK HOTELS</h4>
      <div className="hotel__list">
        {hotels.map((res, i) => (
          <HotelCard hotel={res} key={i} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
