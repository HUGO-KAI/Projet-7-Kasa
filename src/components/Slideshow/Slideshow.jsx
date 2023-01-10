import React from "react"
import SlideshowStyle from './Slideshow.module.scss'
import arrow from '../../assets/arrow-back.png'

//Retourner le composant Gallerie de photo
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
            <div className={SlideshowStyle.Gallery}>
                {this.props.pictures.map((picture, index) => {
                        return (
                            <React.Fragment key={index}>
                                <img
                                    alt=""
                                    src={picture}
                                    className={index === this.state.currentSlide ? `${SlideshowStyle.Gallery_img}` : `${SlideshowStyle.hide_img}`}>
                                </img>
                            </React.Fragment>
                        )
                })}
                <div className = {this.props.pictures.length === 1 ? `${SlideshowStyle.hide_arrow}` :""}>
                    <p className={SlideshowStyle.bullet_point}>{this.state.currentSlide+1}/{this.props.pictures.length}</p>
                    <img src={arrow}  title='Image précédente' alt='Précédente' onClick={() => {this.prevSlide();}} className={SlideshowStyle.arrow_left}/>
                    <img src={arrow}  title='Image suivante' alt='Suivante' onClick={() => {this.nextSlide();}} className={SlideshowStyle.arrow_right}/>
                </div>
            </div>
        )
    }
    
}

export default Slideshow