import { Component } from 'react'
import '../styles/HostDetails.css'
 
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
 