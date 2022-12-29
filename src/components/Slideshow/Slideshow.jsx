import React from "react"
import { useState } from 'react'
import './Slideshow.scss'
import arrow from '../../assets/arrow-back.png'

const Slideshow = ({image}) => {
    return (
        <div>
            <div><img src={arrow} alt='précédente'/></div>
            <div><img src={image} alt='logment'/></div>
            <div><img src={arrow} alt='suivante'/></div>
        </div>
    )
}

export default Slideshow