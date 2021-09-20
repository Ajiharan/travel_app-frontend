import React from "react";
import PropTypes from "prop-types";
import "./hotelCard.css";
import { RatingView } from "react-simple-star-rating";
import { useHistory } from "react-router-dom";
const HotelCard = ({ hotel }) => {
  const history = useHistory();
  const navigateUrl = () => {
    history.push("/hotelBook", { hotel });
  };
  return (
    <div className="card-box">
      <div className="card-body">
        <figure>
          <img
            src={hotel.imageUrl}
            alt={hotel.name}
            className="card-image"
            loading="lazy"
          />
          <figcaption className="p-1 text-sm-start fw-lighter">
            {hotel.name}
          </figcaption>
          <figcaption>
            <RatingView ratingValue={hotel.stars} />
          </figcaption>
          <figcaption className="p-1">
            <p>{`Rs ${hotel.price}`}</p>
          </figcaption>
          <figcaption>
            <button
              className="btn btn-danger btn-sm btn-block m-0 btn__bookHotel"
              onClick={navigateUrl}
            >
              Book Hotel
            </button>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
HotelCard.propTypes = {
  hotel: PropTypes.object,
};

export default HotelCard;
