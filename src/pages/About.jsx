import { Component } from "react"
import Banner from '../components/Banner'
import aboutBanner from '../assets/aboutBanner.jpg'
import aboutData from '../data/aboutDropdownData.json'
import DropDown from '../components/Dropdown'
import '../styles/About.css'

export default class About extends Component {
 
  render() { 
    return ( 
      <main>
        <div className="aboutWrapper">
          <span className='aboutBanner'>
              <Banner image={aboutBanner} alternate='A Mountain Scene'/>
              <h1 className='slogan'>About</h1>
          </span>     
            {aboutData.map((data) => (
            <DropDown key={data.id} title={data.title} content={data.content}/>
            ))}   
        </div>
      </main>
    )
  }
}