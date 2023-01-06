import { Component } from "react";
import Star from "../../assets/star.svg";
import StarGray from "../../assets/starGray.svg"
import '../../utils/colors.scss'
import RatingStyles from "./Rating.module.scss";

//Retourner le composant rating pour le logemnt
export default class logementRatings extends Component {
	render() {
		const ratingScale = [1, 2, 3, 4, 5];
		return (
			<div className={RatingStyles.stars}>
				{ratingScale.map((n) => (
					<img
                        src ={n <= this.props.ratings ? `${Star}` : `${StarGray}`}
                        alt = 'Rating'
						key={`star-${n}`}
						className={RatingStyles.star}
					></img>
				))}
			</div>
		);
	}
}