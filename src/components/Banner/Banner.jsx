import React from "react";
import BannerStyle from './Banner.module.scss'

//Retourner le composant Banner avec le text ou sans
const Banner = ({text}) => {
  return (
    <div className={BannerStyle.BannerContainer} >
      {text ? <h1>{text}</h1> : null}
    </div>
  );
};

export default Banner;