import { Component } from 'react'
// import accomodationData from '../data/logements.json'
import Carousel from '../components/Carousel'
import Host from '../components/Host'
import Tags from '../components/Tags'
import DropDown from '../components/DropDown'
import Ratings from '../components/Ratings'
import Error from './Error'

import '../styles/Accomodation.css'
 

export default class Accomodation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      datas: [],
    }
  }

  getData(url) {
    fetch(url)
      .then((response) => response.json())
      .then(
        (jsonResponse) => {
          const idInUrl = this.props.match.params.id
          const itemToShow = jsonResponse.find((item) => item.id === idInUrl)

          if (itemToShow) {
            this.setState({
              isLoaded: true,
              datas: itemToShow,
            })
          }
        },
        (error) => {
          this.setState({ error })
        }
      )
  }

  componentDidMount() {
    this.getData("../logements.json")
  }
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         profileData: {},
    //     }
    // }
 
    // componentDidMount() {
    //     const { id } = this.props.match.params
 
    //     fetch(`../src/data/logements.json`)
    //     .then((response) => response.json())
    //     .then(({ surveyData }) => console.log(surveyData))
    //     .catch((error) => console.log(error))
    // }

    // render() {
    //     const { profileData } = this.state
    //     const {
    //         id, pictures, title, location, tags, host, rating, description, equipments,
    //     } = profileData


    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         profileData: {},
    //     }
    // }
        
    // componentDidMount() {
    //     const { id } = this.props.match.params


    //     fetch('logements.json', {
    //         mode: 'no-cors'
    //      })
    //      .then(response => response.text())
    //      .then(data => console.log(data))
    //      .catch(error => console.error(error));

    //     const chosenAccomodation = accomodationData.find((data) => data.id === id)
    //     this.setState({ profileData: chosenAccomodation })
    // }


   

    render() {
        const { datas } = this.state
        const {
            id, pictures, title, location, tags, host, rating, description, equipments,
        } = datas

        console.log(pictures)
        
        // if (isLoaded) {
        //   return <p>Loading ...</p>;
        // }
        // const accomodationId = this.props.match.params.id
        // const chosenAccomodation = accomodationData.find((data) => data.id === accomodationId)

        // if (chosenAccomodation) {
        //     const {pictures, title, location, tags, host, rating, description, equipments,
        //     } = chosenAccomodation
            
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
                                <Host hostData={host} />
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
    //         else {
    //             return (
    //             <Error />
    //             )
    //         }
    // }
}
 
