import { Component } from 'react'
import accomodationData from '../data/logements.json'
import Carousel from '../components/Carousel'
import Host from '../components/Host'
import Tags from '../components/Tags'
import DropDown from '../components/DropDown'
import Ratings from '../components/Ratings'
import Error from './Error'
import '../styles/Accomodation.css'
 
/// Individual accomodation page template
export default class Accomodation extends Component {

    render() {


        const accomodationId = this.props.match.params.id
        const chosenAccomodation = accomodationData.find((data) => data.id === accomodationId)

        if (chosenAccomodation) {
            const {pictures, title, location, tags, host, rating, description, equipments,
            } = chosenAccomodation
            
            return (
                <main>
                    <div className='accomodationWrapper'>
                        <Carousel photoAlbum={pictures}/>
                        <div className='accomodationHeader'>

                            <div>
                                <h1 className='accomodationTitle'>{title} </h1>
                                <p className='accomodationLocation'>{location}</p> 
                                <Tags tagData={tags} />
                            </div>

                            <div className='hostSummary'>
                                <Host name={host.name} picture={host.picture}/>
                                <Ratings ratingNumber={rating}/>
                            </div>
                        </div>   

                        <div className='accomodationDetails'>
                            <DropDown dropdownPurpose='DropdownAccomPage' dropdownType='dropDownListAccomodation' title={'Description'} content={description}/>
                            <DropDown dropdownPurpose='DropdownAccomPage' dropdownType='dropDownListAccomodation'  title={'Equipment'} content={equipments}/>
                        </div>
                    </div>       
                </main>
            )
            } else {
                return (
                <Error />
                )
            }
    }
}
 
