import React from "react";
import './Banner.scss'

const Banner = ({ image, text }) => {
  return (
    <div className="BannerContainer">
      <img src={image} alt="" />
      {text ? <h1>{text}</h1> : null}
    </div>
  );
};

export default Banner;