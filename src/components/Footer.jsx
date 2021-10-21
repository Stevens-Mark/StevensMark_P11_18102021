import { Component } from "react"
import { Link} from 'react-router-dom'
import logo from '../assets/kasa_white_logo.svg'
import '../styles/Footer.css'

export default class Footer extends Component {
    render() { 
      return (
        <footer className='footer'>
            <Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>
            <p>© 2020 Kasa. All rights reserved</p>

        </footer>
      )
    }
  }