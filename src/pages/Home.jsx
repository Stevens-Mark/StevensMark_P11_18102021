// import colors from '../../utils/style/colors'
import { Component } from "react"
import bannerImage from '../assets/homeBanner.jpg'
import '../styles/Home.css'

export default class Home extends Component {
  render() { 
    return (
      <div className='wrapper'>
          <img className="banner"  src={bannerImage} alt="kasa"></img>
      </div>
    )
  }
}