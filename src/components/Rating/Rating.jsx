import "./Rating.scss";
import { Component } from "react";
import Star from "../../assets/star.svg";
import StarGray from "../../assets/starGray.svg"
import '../../utils/colors.scss'

export default class RentalRatings extends Component {
	render() {
		const ratingScale = [1, 2, 3, 4, 5];
		return (
			<div className="stars">
				{ratingScale.map((n) => (
					<img
                        src ={n <= this.props.ratings ? `${Star}` : `${StarGray}`}
                        alt = 'Rating'
						key={`star-${n}`}
						className="star"
					></img>
				))}
			</div>
		);
	}
}