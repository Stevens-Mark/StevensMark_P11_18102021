import { Component } from "react"


export default class Carousel extends Component {

    render() { 
        const {tagData} = this.props
        const tags = tagData
        const range = [1, 2, 3, 4, 5]
        const scaleType =
            careType === 'light' ? (
                <img src={Sun} alt='sun-icon' />
            ) : (
                <img src={Water} alt='water-icon' />
            )
	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}
}