import { Component } from 'react'
import accomodationData from '../data/logements.json'
import Carousel from '../components/Carousel'
import Host from '../components/Host'
import Tags from '../components/Tags'
import DropDown from '../components/Dropdown'
import Ratings from '../components/Ratings'

import '../styles/Accomodation.css'
 

export default class Accomodation extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         profileData: {},
    //     }
    // }
        
    // componentDidMount() {
    //     const { id } = this.props.match.params

    // //     fetch('../data/logements.json')
    // //     .then((response) => response.json()
    // //     .then(({ surveyData }) => console.log(surveyData))
    // //     .catch((error) => console.log(error))
    // // )
    // //     fetch(`http://localhost:8000/freelance?id=${id}`)
    // //     .then((response) => response.json())
    // //     .then((jsonResponse) => {
    // //         this.setState({ profileData: jsonResponse?.freelanceData })
    // //     })
    // // }

    //     const chosenAccomodation = accomodationData.find((data) => data.id === id)
    //     this.setState({ profileData: chosenAccomodation })
    // }

    render() {
        // const { profileData } = this.state
        // const {
        //     id, pictures, title, location, tags, host, rating, description, equipments,
        // } = profileData

        const accomodationId = this.props.match.params.id
        const chosenAccomodation = accomodationData.find((data) => data.id === accomodationId)
        const {id, pictures, title, location, tags, host, rating, description, equipments,
        } = chosenAccomodation
    
console.log(typeof description )
console.log(typeof equipments)
        return (
            <main>
                <div className='accomodationWrapper'>
                    <Carousel />
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
    }
}
 
