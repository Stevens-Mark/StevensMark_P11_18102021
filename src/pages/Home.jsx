import { Component } from "react"
import Banner from '../components/Banner'
import homeBanner from '../assets/homeBanner.jpg'
import accomodationData from '../data/logements.json'
import Card from '../components/Card'
import '../styles/Home.css'

export default class Home extends Component {
  render() { 
    return (
      <main>
        <div className='homeBanner'>
            <Banner image={homeBanner} alternate='Rocks by the sea coastline'/>
            <h1 className='slogan'>Chez vous, partout et ailleurs</h1>
        </div>
            {accomodationData.map((data) => (
            <Card key={data.id} title={data.title} cover={data.cover}/>
            ))}   
      </main>
    )
  }
}