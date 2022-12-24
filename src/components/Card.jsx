import PropTypes from 'prop-types'
import styled from 'styled-components'

const DivCard = styled.div`
  width:100%;
  border-radius:10px;
  position:relative;
  
`
const ImgCard = styled.img`
  width:100%;
  height:255px;
  border-radius:10px;
  object-fit:cover;
  z-index:99;
`

const PCard = styled.p`
  display:block;
  position:absolute;
  z-index:100;
`

function Card({ id, title, picture }) {
    return (
      <DivCard>
        <ImgCard src={picture} alt="logement" />
        <PCard>{title}</PCard>
      </DivCard>
    )
  }

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Card