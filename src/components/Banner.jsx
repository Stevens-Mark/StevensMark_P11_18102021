import { Component } from "react"
import PropTypes from 'prop-types'
import '../styles/Banner.css'

/**
 * Renders banner at top of Home/About page
 * @function Banner
 * @extends Component
 * @param {string} props image: image for the banner
 * @param {string} props alternate: the alternative text for the image
 * @returns {JSX}
 */
export default class Banner extends Component {

  render() { 
    const {image, alternate} = this.props
    return (
          <img className="banner" src={image} alt={alternate}/>
    )
  }
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  alternate: PropTypes.string.isRequired,
}
