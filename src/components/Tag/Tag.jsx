import PropTypes from 'prop-types'
import TagStyles from './Tag.module.scss'

function Tag({key, tag}) {
    return (
      <div className={TagStyles.tag_container}>
        <p>{tag}</p>
      </div>
    )
  }

Tag.propTypes = {
    tags: PropTypes.string
}

export default Tag