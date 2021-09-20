import React, { useState, useEffect } from "react";
import Header from "../Header";
import "./GuideBook.css";
import { useHistory } from "react-router-dom";
import { RatingView } from "react-simple-star-rating";
import { useStateValue } from "../../StateProvider";
import { toast } from "react-toastify";
import axios from "axios";

const GuideBook = () => {
  const history = useHistory();
  const [guide, setGuide] = useState(null);
  const [{ userInfo, user }, dispatch] = useStateValue();
  const [formData, setFormData] = useState({
    date: "",
    days: 1,
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
    setGuide(history.location.state.guide);
  }, [history.location.state]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const postData = {
      ...formData,
      uid: userInfo?._id,
      userName: userInfo?.userName,
      price: guide?.price,
    };

    axios
      .post(`http://localhost:5000/guideBooking/book`, postData, {
        headers: { tour: user?.token },
      })
      .then((res) => {
        toast.success(" guide booked sucessfully");
        history.replace("/");
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("error");
        setFormData({
          date: "",
          days: 1,
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
        <div className="hotel__boook__left ">
          <div className="container-box guide_book_box">
            <img src={guide?.profilePic || ""} alt={guide?.name || ""} />
            <p className="m-1">{guide?.name}</p>
            <p className="m-1 hotel__price">{`Rs.${guide?.price}`}</p>
            <RatingView ratingValue={guide?.rating} />
            <p className="m-1">
              {`My name is ${guide?.userName}. On behalf of Ida-Viru Tour Agency I'd
              like to welcome you all to Narva. The bus ride to your hotel
              Vanalinn takes you about fifteen minutes. Right now I'd like to
              take a minute to familiarize you with the area and tell a brief
              safety precaution. You have to fasten safety belts and remain
              seated until we reach our destination.`}
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
              Book Guide
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GuideBook;
