import React from "react";
import { RatingView } from "react-simple-star-rating";
const GuidCard = ({ guide }) => {
  return (
    <div className="card-box">
      <div className="card-body">
        <figure>
          <img
            src={guide.profilePic}
            alt={guide.name}
            className="card-image guid"
          />
          <figcaption className="p-1 text-sm-start fw-lighter">
            {guide.name}
          </figcaption>
          <figcaption>
            <RatingView ratingValue={guide?.rating} />
          </figcaption>
          <figcaption className="p-1">
            <p>{` ${guide.experience} years experience`}</p>
          </figcaption>
          <figcaption>
            <button className="btn btn-danger btn-sm btn-block m-0 btn__bookHotel">
              Book Guide
            </button>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default GuidCard;
