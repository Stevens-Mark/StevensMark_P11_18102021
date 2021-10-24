import { Component } from "react"

import '../styles/Carousel.css'

export default class Carousel extends Component {
 
  render() { 
    return ( 
      <main>
        <div className="carouselWrapper">
          <span className='aboutBanner'>
              <Banner image={aboutBanner} alternate='A Mountain Scene'/>
              <h1 className='slogan'>About</h1>
          </span>     

        </div>
      </main>
    )
  }
}