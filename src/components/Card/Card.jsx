import PropTypes from 'prop-types'
import cardSyles from './Card.module.scss'
import { Link } from 'react-router-dom'

function Card({ id, title, picture }) {
    return (
      <Link className={cardSyles.linkCard} to={`/logements/${id}`} >
        <img className={cardSyles.ImgCard} src={picture} alt="logement" />
        <p className={cardSyles.PCard}>{title}</p>
      </Link>
    )
  }

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Card