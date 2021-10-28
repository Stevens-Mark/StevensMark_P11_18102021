import { Component } from "react"
// import PropTypes from 'prop-types'
import previousArrow from '../assets/arrows/white_back_arrow.svg'
import nextArrow from '../assets/arrows/white_forward_arrow.svg'
import '../styles/Carousel.css'
import Blank from '../assets/blank.jpg'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: 0,
      length : 0,
    }
    this.nextSlide = this.nextSlide.bind(this)
		this.previousSlide = this.previousSlide.bind(this)
  }

	previousSlide () {
		const shouldResetIndex = this.state.currentImageIndex === 0
		const index =  shouldResetIndex ? this.state.length - 1 : this.state.currentImageIndex - 1
		this.setState({
			currentImageIndex: index,
		})
    console.log(this.state.length)
	}

  nextSlide () {
		const shouldResetIndex = this.state.currentImageIndex === this.state.length - 1
		const index =  shouldResetIndex ? 0 : this.state.currentImageIndex + 1
		this.setState({
			currentImageIndex: index, 
		})
    console.log(this.state.length)
	}


  componentDidMount() {
    if (this.props.photoAlbum) {
      this.setState({length : this.props.photoAlbum.length })
      console.log(this.state.length)
  }
  }

  
  render() { 
    // const { photoAlbum } = this.props
  const {currentImageIndex} = this.state


    return (   
          <div className='carouselWrapper'>
            <div className='carouselControls'>
              <img className='previousControlArrows' src={previousArrow} alt='précédent' onClick={this.previousSlide} />
              <img className='nextControlArrows' src={nextArrow} alt='suivant' onClick={this.nextSlide} />
            </div>
              <img className='carouselImages' src={this.props.photoAlbum? this.props.photoAlbum[currentImageIndex] : Blank} alt='Carousel Gallery' />
              <p className='counter'>{currentImageIndex+1}/{ this.props.photoAlbum?.length || 0 }</p>
          </div>     
    )
  }
}

// Carousel.propTypes = {
//   photoAlbum : PropTypes.array.isRequired,
//  }
