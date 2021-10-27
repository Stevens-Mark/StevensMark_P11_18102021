import { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/HostDetails.css'
import DefaultPicture from '../assets/profile.png'
 
export default class Host extends Component {

    render() {
        const {name, picture} = this.props    
        return (
        <div className='hostWrapper'>
            <h2 className='hostTitle'>{name}</h2>
            <img className='hostPhoto' src={picture} alt={name}/>
        </div>
        )
    }
}

Host.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }

  Host.defaultProps = {
    picture: DefaultPicture,
}