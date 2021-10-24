import { Component } from 'react'
import accomodationData from '../data/logements.json'
import Host from '../components/Host'

import '../styles/Accomodation.css'
 
export default class Accomodation extends Component {
    render() {
        const accomodationId = this.props.match.params.id
        const chosenAccomodation = accomodationData.find((data) => data.id === accomodationId)

        const {id, pictures, title, location, tags, host, rating, description, equipments,
        } = chosenAccomodation
        
        return (
            <main>
                <div className='accomodationWrapper'>
                    <div>
                        <h1 className='accomodationTitle'>{title} </h1>
                        <span className='accomodationLocation'>{location}</span>    
                    </div>
                    <Host name={host.name} picture={host.picture}/>
                </div>
            </main>
        )
    }
}
 
