import { Component } from "react"
import { Link} from 'react-router-dom'
import Banner from '../components/Banner'
import homeBanner from '../assets/homeBanner.jpg'
import accomodationData from '../data/logements.json'
import Card from '../components/Card'
import '../styles/Home.css'

export default class Home extends Component {
  render() { 
    return (
      <main>
        <div className='homeWrapper'>
            <span className='homeBanner'>
              <Banner image={homeBanner} alternate='Rocks by the sea coastline'/>
              <h1 className='slogan'>Chez vous, partout et ailleurs</h1>    
            </span>  
          <div className='accomodationContainer'>
              {accomodationData.map((data) => (
                <Link key={`accomodation-${data.id}`} to={`/accomodation/${data.id}`}>
                    <Card title={data.title} cover={data.cover}/>
                </Link> 
              ))}  
                
          </div>
        </div>
      </main>
    )
  }
}