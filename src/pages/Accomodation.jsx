import { Component } from 'react'
import accomodationData from '../data/logements.json'
import Carousel from '../components/Carousel'
import Host from '../components/Host'
import Tags from '../components/Tags'

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
                    <Carousel />
                    <div className='accomodationHeader'>
                        <div>
                            <h1 className='accomodationTitle'>{title} </h1>
                            <p className='accomodationLocation'>{location}</p>    
                        </div>
                        <Host name={host.name} picture={host.picture}/>
                    </div>
                    <Tags tagData={tags}/>
                </div>
                
            </main>
        )
    }
}
 
