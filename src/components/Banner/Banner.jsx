import React from "react";
import BannerStyle from './Banner.module.scss'

const Banner = ({text}) => {
  return (
    <div className={BannerStyle.BannerContainer} >
      {text ? <h1>{text}</h1> : null}
    </div>
  );
};

export default Banner;