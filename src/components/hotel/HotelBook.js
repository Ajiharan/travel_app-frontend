import React, { useState, useEffect } from "react";
import Header from "../Header";
import "./HotelBook.css";
import { useHistory } from "react-router-dom";
import { RatingView } from "react-simple-star-rating";
import { useStateValue } from "../../StateProvider";
import { toast } from "react-toastify";
import axios from "axios";
const HotelBook = () => {
  const history = useHistory();
  const [hotel, setHotel] = useState(null);
  const [{ userInfo, user }, dispatch] = useStateValue();
  const [formData, setFormData] = useState({
    date: "",
    days: 1,
    roomType: "none",
    peoples: 1,
    cardNo: "",
    holderName: "",
    cvc: "",
  });

  useEffect(() => {
    if (!userInfo && user?.id) {
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
  }, [user, userInfo]);

  useEffect(() => {
    setHotel(history.location.state.hotel);
  }, [history.location.state]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const postData = {
      ...formData,
      hid: hotel?.id,
      hotelName: hotel?.name,
      uid: userInfo?._id,
      userName: userInfo?.userName,
      price: hotel?.price,
    };

    axios
      .post(`http://localhost:5000/hotelBooking/book`, postData, {
        headers: { tour: user?.token },
      })
      .then((res) => {
        toast.success("booked sucessfully");
        history.replace("/");
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("error");
        setFormData({
          date: "",
          days: 1,
          roomType: "none",
          peoples: 1,
          cardNo: "",
          holderName: "",
          cvc: "",
        });
      });
  };
  return (
    <div className="hotel__book">
      <Header />
      <div className="hotel__book__container">
        <div className="hotel__boook__left">
          <div className="container-box">
            <img src={hotel?.imageUrl || ""} alt={hotel?.name || ""} />
            <p className="m-1">{hotel?.name}</p>
            <p className="m-1 hotel__price">{`Rs.${hotel?.price}`}</p>
            <RatingView ratingValue={hotel?.stars} />
            <p className="m-1">
              hotel is an establishment that provides paid lodging on a
              short-term basis. ... Hotel rooms are usually numbered (or named
              in some smaller hotels and B&Bs) to allow guests to identify their
              room. Some boutique, high-end hotels have custom decorated rooms.
              Some hotels offer meals as part of a room and board arrangement
            </p>
          </div>
        </div>
        <div className="hotel__boook__right">
          <form onSubmit={(e) => formSubmit(e)}>
            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control book_form_control"
                id="floatingInput"
                value={formData.date}
                name="date"
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="floatingInput">Book date</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control book_form_control"
                id="floatingInput"
                value={formData.days}
                name="days"
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="floatingInput">No of days</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control book_form_control"
                id="floatingInput"
                value={formData.peoples}
                name="peoples"
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="floatingInput">No of peoples</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-select"
                value={formData.roomType}
                name="roomType"
                onChange={(e) => onChange(e)}
                required
              >
                <option value="none">None</option>
                <option value="classA">Class A</option>
                <option value="classB">Class B</option>
                <option value="classC">Class C</option>
                <option value="classD">Class D</option>
              </select>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control book_form_control"
                id="floatingInput"
                value={formData.holderName}
                name="holderName"
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="floatingInput">Holder Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control book_form_control"
                id="floatingInput"
                value={formData.cardNo}
                name="cardNo"
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="floatingInput">Card No</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control book_form_control"
                id="floatingInput"
                value={formData.cvc}
                name="cvc"
                onChange={(e) => onChange(e)}
                required
              />
              <label htmlFor="floatingInput">cvc</label>
            </div>
            <button className="btn btn-danger btn-sm m-0" type="submit">
              Book Hotel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HotelBook;
