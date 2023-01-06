import React from "react"
import GalleryStyle from './Gallery.module.scss'
import arrow from '../../assets/arrow-back.png'

//Retourner le composant Gallerie de photo
class Gallery extends React.Component {
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
            <div className={GalleryStyle.Gallery}>
                {this.props.pictures.map((picture, index) => {
                        return (
                            <React.Fragment key={index}>
                                <img
                                    alt=""
                                    src={picture}
                                    className={index === this.state.currentSlide ? `${GalleryStyle.Gallery_img}` : `${GalleryStyle.hide_img}`}>
                                </img>
                            </React.Fragment>
                        )
                })}
                <div className = {this.props.pictures.length === 1 ? `${GalleryStyle.hide_arrow}` :""}>
                    <p className={GalleryStyle.bullet_point}>{this.state.currentSlide+1}/{this.props.pictures.length}</p>
                    <img src={arrow}  alt='précédente' onClick={() => {this.prevSlide();}} className={GalleryStyle.arrow_left}/>
                    <img src={arrow}  alt='suivante' onClick={() => {this.nextSlide();}} className={GalleryStyle.arrow_right}/>
                </div>
            </div>
        )
    }
    
}

export default Gallery