import React from "react"
import { useState } from 'react'
import './Collapse.scss'
import arrow from '../../assets/arrow_down.png'

const Collapse = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false)
	return isOpen ? (
		<div className="collapse">
			<div onClick={() => setIsOpen(false)} className = "collapse_bar" >
                <h2 className = "collapse_title">{title}</h2>
                <div className="collapse_arrow__open"><img src={arrow} alt='arrow open'></img></div>
			</div>
			<div className="collapse_content__container"><h3 className="collapse_content" id='content'>{content}</h3></div>	
		</div>
	) : (
		<div onClick={() => setIsOpen(true)} className = "collapse_bar" >
            <h2 className = "collapse_title">{title}</h2>
            <div className="collapse_arrow__close"><img src={arrow} alt='arrow close'></img></div>
        </div>
	)
}

export default Collapse;