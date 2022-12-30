import PropTypes from 'prop-types'
import './Tag.scss'

function Tag({key, tag}) {
    return (
      <div className='tag_container'>
        <p>{tag}</p>
      </div>
    )
  }

Tag.propTypes = {
    tags: PropTypes.string
}

export default Tag