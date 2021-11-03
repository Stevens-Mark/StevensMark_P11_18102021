import { Component } from "react"
import PropTypes from 'prop-types'
import solidStar from '../assets/stars/red_solid_star.svg'
import clearStar from '../assets/stars/clear_solid_star.svg'
import '../styles/Ratings.css'
 
// Host "star" rating

export default class Ratings extends Component {

    render() { 
        const {ratingNumber} = this.props
        const range = [1, 2, 3, 4, 5]

	return (
		<div className='ratingsWrapper'>
			{range.map((rangeElem) =>
				ratingNumber >= rangeElem ? (
					<img className='star' key={rangeElem.toString()} src={solidStar} alt='' />
				) : <img className='star' key={rangeElem.toString()} src={clearStar} alt='' />
			)}
		</div>
		)
	}
}

Ratings.propTypes = {
	ratingNumber: PropTypes.oneOf(['1', '2', '3', '4', '5']).isRequired,
}
  