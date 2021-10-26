import { Component } from "react"
import solidStar from '../assets/stars/red_solid_star.svg'
import clearStar from '../assets/stars/clear_solid_star.svg'
import '../styles/Ratings.css'
 

export default class Ratings extends Component {

    render() { 
        const {ratingNumber} = this.props
        const ratingValue = ratingNumber
        const range = [1, 2, 3, 4, 5]

	return (
		<div className='ratingsWrapper'>
			{range.map((rangeElem) =>
				ratingValue >= rangeElem ? (
					<img className='star' key={rangeElem.toString()} src={solidStar} alt='' />
				) : <img className='star' key={rangeElem.toString()} src={clearStar} alt='' />
			)}
		</div>
	)
}
}