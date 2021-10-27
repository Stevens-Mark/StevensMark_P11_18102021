import { Component } from "react"
import PropTypes from 'prop-types'
import '../styles/Banner.css'

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
