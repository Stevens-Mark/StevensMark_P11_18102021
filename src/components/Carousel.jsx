import { Component } from "react"
import aboutBanner from '../assets/aboutBanner.jpg'
import '../styles/Carousel.css'

export default class Carousel extends Component {
 
  render() { 
    return (   
          <div className='carouselWrapper'>
              <img className='carouselImages' src={aboutBanner} alt=''/>
              {/* <h1 className='slogan'>About</h1> */}
          </div>     
    )
  }
}