import { Component } from "react"
import previousArrow from '../assets/arrows/white_back_arrow.svg'
import nextArrow from '../assets/arrows/white_forward_arrow.svg'

import '../styles/Carousel.css'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPhoto: 0,
    }
  }

  nextPhoto = () => {
    this.setState({ currentPhoto: this.state.currentPhoto + 1 })
  }

  previousPhoto = () => {
    this.setState({ currentPhoto: this.state.currentPhoto - 1 })
  }

  render() { 
    const { photoAlbum } = this.props
    const { currentPhoto } = this.state
    console.log(photoAlbum.length)
    const totalPictures = photoAlbum.length
 

    return (   
          <div className='carouselWrapper'>
            <div className='carouselControls'>
              <img className='previousControlArrows' src={previousArrow} alt='précédent' onClick={this.previousPhoto} />
              <img className='nextControlArrows' src={nextArrow} alt='suivant' onClick={this.nextPhoto} />
            </div>
              <img className='carouselImages' src={photoAlbum[currentPhoto]} alt='' />
              <p className='counter'>{currentPhoto}/{totalPictures}</p>
          </div>     
    )
  }
}