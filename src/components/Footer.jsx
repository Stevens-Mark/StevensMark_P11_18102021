import { Component } from "react"
import { Link} from 'react-router-dom'
import FooterLogo from '../assets/kasa_white_logo.svg'
import '../styles/Footer.css'

// Footer component displayed on all pages
export default class Footer extends Component {
    render() { 
      return (
        <footer className='footer'>
            <Link to="/"><img src={FooterLogo} alt="logo"></img></Link>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
      )
    }
  }