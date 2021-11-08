import { Component } from 'react'
import Carousel from '../components/Carousel'
import Host from '../components/Host'
import Tags from '../components/Tags'
import DropDown from '../components/DropDown'
import Ratings from '../components/Ratings'
import Error from './Error'
import '../styles/Accomodation.css'

//Individual accomodation page template
// Displays Loading, error or page depending on state
// relevant announcement displayed based on ID extracted from Url params
export default class Accomodation extends Component {

  constructor(props) {
    super(props)
    this.state = {
      place: "",
      isLoaded: false,
      isError: false,
    }
  }

  componentDidMount() {
    const idUrl = this.props.match.params.id

    const placeToShow = this.props.kasaPlaces.find((room) => room.id === idUrl)

    if (placeToShow){
        this.setState({
          place: placeToShow,
          isLoaded: this.props.isLoaded,
          isError: this.props.Error,
        })
      }
      else {
        this.setState({
          isLoaded: this.props.isLoaded,
          isError : true,
        })
      }

  }

    render() {
      const { place, isLoaded, isError } = this.state
      

      if (!isLoaded) return (  
        <main>   
          <div className='loading'>  
            <div>Loading ... </div> 
          </div> 
        </main> 
        ) 
      
        if (isError) 
          return <Error />
        
        else 
        {
          return (
              <main>
   
                  <div className='accomodationWrapper'>
                    <Carousel photoAlbum={place.pictures}/>
                    <div className='accomodationHeader'>

                        <div>
                            <h1 className='accomodationTitle'>{place.title} </h1>
                            <p className='accomodationLocation'>{place.location}</p> 
                            <Tags tagData={place.tags} />
                        </div>

                        <div className='hostSummary'>
                            <Host hostData={place.host} />
                            <Ratings ratingNumber={place.rating}/>
                        </div>
                    </div>   

                    <div className='accomodationDetails'>
                        <DropDown dropdownWidth='DropdownAccomPage' dropdownHeight='dropDownListAccomodation' title={'Description'} content={place.description}/>
                        <DropDown dropdownWidth='DropdownAccomPage' dropdownHeight='dropDownListAccomodation'  title={'Equipment'} content={place.equipments}/>
                    </div>
                  </div>    
                   
              </main>
          )
        }
    }
}
