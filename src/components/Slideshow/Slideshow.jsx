import React from "react"
import './Slideshow.scss'
import arrow from '../../assets/arrow-back.png'

class Slideshow extends React.Component {
    constructor(props) {
		super(props)
        this.state = {currentSlide: 0}
	}
    
    prevSlide() {
		let newSlide =this.state.currentSlide === 0 ? this.props.pictures.length - 1 : this.state.currentSlide - 1;
		this.setState({ currentSlide: newSlide });
	} 
    nextSlide() {
        let newSlide =this.state.currentSlide === this.props.pictures.length-1 ? 0 : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
    } 
    render (){
        return (
            <div className="carousel">
                {this.props.pictures.map((picture, index) => {
                            return (
                                <img
                                    alt=""
                                    src={picture}
                                    key={index}
                                    className={index === this.state.currentSlide ? "carrousel__img" : "hide-img"}></img>
                            );
                        })}
                <img src={arrow}  alt='précédente' onClick={() => {this.prevSlide();}} className='arrow_left'/>
                <img src={arrow}  alt='précédente' onClick={() => {this.nextSlide();}} className='arrow_right'/>
            </div>
        )
    }
    
}

export default Slideshow