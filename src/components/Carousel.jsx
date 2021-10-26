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

  previousePhoto = () => {
    this.setState({ currentPhoto: this.state.currentPhoto - 1 })
  }

  render() { 
    const { photoAlbum } = this.props
    const { currentPhoto } = this.state
    return (   
          <div className='carouselWrapper'>
            
            <div className='carouselControls'>
              <div>
              <img className='previousControlArrows' src={previousArrow} alt=''/>
              </div>
              <img className='nextControlArrows' src={nextArrow} alt=''/>

            </div>
            <img className='carouselImages' src={photoAlbum[currentPhoto]} alt=''/>
              
            {/* {photoAlbum.map((photo) => (
              <img className='carouselImages' src={photo} alt=''/>
               ))} */}
          </div>     
    )
  }
}