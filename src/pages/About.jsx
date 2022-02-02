import { Component } from "react"
import Banner from '../components/Banner'
import aboutBanner from '../assets/aboutBanner.jpg'
import { dropDownList} from '../data/aboutDropdownData.js'
import DropDown from '../components/DropDown'
import '../styles/About.css'
import '../styles/keyframes.css'
/**
 * Renders About/A propos page
 * @function About
 * @extends Component
 * @param {string} aboutBanner: image for the banner from file
 * @param {array} dropDownList: content for dropdown list from file
 * @returns {JSX}
 */
export default class About extends Component {
  render() { 
    return ( 
      <main>
        <div className="aboutWrapper">
          <span className='aboutBanner'>
              <Banner image={aboutBanner} alternate='A Mountain Scene'/>
              <h1 className='sr-only'>A Propos</h1>
          </span>     
            {dropDownList.map((data) => (
            <DropDown key={data.id} dropdownWidth='DropdownAboutPage' dropdownHeight='dropDownListAbout' title={data.title} content={data.content}/>
            ))}   
        </div>
      </main>
    )
  }
}