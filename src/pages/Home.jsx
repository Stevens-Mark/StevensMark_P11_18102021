import { Component } from "react"
import Banner from '../components/Banner'
import homeBanner from '../assets/homeBanner.jpg'
import Card from '../components/Card'
import Error from "./Error"
import '../styles/Home.css'
// key={`${data.id}-${index}`}


//Home page template
// Displays Loading, error or page depending on state

export default class Home extends Component {

  render() { 
 
    return (
      <main>
         {this.props.isError && (
          <Error />
        )} 
        {!this.props.isLoaded ? (      
            <div className='loading'>  
              <div>Loading ... </div> 
            </div>
          )  :
        (   
        <div className='homeWrapper'>
            <span className='homeBanner'>
              <Banner image={homeBanner} alternate='Rocks by the sea coastline'/>
              <h1 className='slogan'>Chez vous, partout et ailleurs</h1>    
            </span>  
          <div className='accomodationContainer'>
              {this.props.kasaGoods.map((data) => ( 
                    <Card key={data.id} id={data.id} title={data.title} cover={data.cover}/> 
              ))}         
          </div>
        </div>
        )}
      </main>
    )
  }
}



