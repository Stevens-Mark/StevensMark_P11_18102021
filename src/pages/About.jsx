import { Component } from "react"
import Banner from '../components/Banner'
import aboutBanner from '../assets/aboutBanner.jpg'
import '../styles/About.css'
import DropDown from "../components/DropDown"

export default class About extends Component {
  render() { 
    return ( 
      <main className="aboutWrapper">
        <div className='aboutBanner'>
            <Banner image={aboutBanner} alternate='A Mountain Scene'/>
            {/* <h1 className='slogan'>About</h1> */}
        </div>
        <DropDown />
      </main>

    )
  }
}