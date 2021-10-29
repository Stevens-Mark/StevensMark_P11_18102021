import { Component } from "react"
import PropTypes from 'prop-types'
import previousArrow from '../assets/arrows/white_back_arrow.svg'
import nextArrow from '../assets/arrows/white_forward_arrow.svg'
import '../styles/Carousel.css'
import Blank from '../assets/blank.jpg'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: 0,
    }
  }

	render() { 
    const {currentImageIndex} = this.state
    const pictures = this.props.photoAlbum
    const length = pictures?.length
  
    const previousSlide = () => {
        this.setState((prevState) => ({
          currentImageIndex: prevState.currentImageIndex !== 0 ? prevState.currentImageIndex - 1 : prevState.currentImageIndex = length - 1
        }))
    };

    const nextSlide = () => {
        this.setState((prevState) => ({
          currentImageIndex: prevState.currentImageIndex !== length - 1 ? prevState.currentImageIndex + 1 : prevState.currentImageIndex = 0
        }))
    };

    return (   
          <div className='carouselWrapper'>
            <div className='carouselControls'>
              <img className='previousControlArrows' src={previousArrow} alt='précédent' onClick={previousSlide} />
              <img className='nextControlArrows' src={nextArrow} alt='suivant' onClick={nextSlide} />
            </div>
              <img className='carouselImages' src={pictures? pictures[currentImageIndex] : Blank} alt='Carousel Gallery' />
              <p className='counter'>{currentImageIndex+1}/{ pictures?.length || 0 }</p>
          </div>     
    )
  }
}

Carousel.propTypes = {
  photoAlbum : PropTypes.array.isRequired,
 }


