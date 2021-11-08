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
    super(props);
    this.state = {
      good: "",
      isLoaded: false,
    };
  }

  componentDidMount() {
    const idUrl = this.props.match.params.id;

    const gd = this.props.kasaGoods.find((g) => g.id === idUrl);

    this.setState({
      good: gd,
      isLoaded: this.props.isLoaded,
    });
  }

    render() {
      const { good, isLoaded } = this.state

       console.log(good)
        // if (error)  
        // return ( <Error />)
        if (!isLoaded) return <div></div>;
        // if (this.props.good === undefined) return <Error />;
            return (
                <main>
                   {!isLoaded ? (      
                  <div className='loading'>  
                    <div>Loading ... </div> 
                  </div> )  :
                  (      
                    <div className='accomodationWrapper'>
                      <Carousel photoAlbum={good.pictures}/>
                      <div className='accomodationHeader'>

                          <div>
                              <h1 className='accomodationTitle'>{good.title} </h1>
                              <p className='accomodationLocation'>{good.location}</p> 
                              <Tags tagData={good.tags} />
                          </div>

                          <div className='hostSummary'>
                              <Host hostData={good.host} />
                              <Ratings ratingNumber={good.rating}/>
                          </div>
                      </div>   

                      <div className='accomodationDetails'>
                          <DropDown dropdownWidth='DropdownAccomPage' dropdownHeight='dropDownListAccomodation' title={'Description'} content={good.description}/>
                          <DropDown dropdownWidth='DropdownAccomPage' dropdownHeight='dropDownListAccomodation'  title={'Equipment'} content={good.equipments}/>
                      </div>
                    </div>    
                  )}   
                </main>
          )
    }
}
 
