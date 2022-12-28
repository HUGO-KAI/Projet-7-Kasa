import PropTypes from 'prop-types'
import {DivCard,ImgCard,PCard } from './Styled'

function Card({ id, title, picture }) {
    return (
      <DivCard>
        <ImgCard src={picture} alt="logement" />
        <PCard>{title}</PCard>
      </DivCard>
    )
  }

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Card