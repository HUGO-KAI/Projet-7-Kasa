import PropTypes from 'prop-types'

function Card({ id, title, picture }) {
    return (
      <div>
        <img src={picture} alt="logement" />
        <p>{title}</p>
      </div>
    )
  }

  Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }