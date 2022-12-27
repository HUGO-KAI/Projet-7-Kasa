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
  margin-bottom:20px;
  border-radius:10px;
  object-fit:cover;
  filter: brightness(75%);
  z-index:99;
`

const PCard = styled.p`
  display: block;
  width: 80%;
  margin: auto auto;
  position:absolute;
  z-index:100;
  color:white;
  margin-top: -80px;
  margin-left:20px;
  font-size: 1.2rem;
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
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Card