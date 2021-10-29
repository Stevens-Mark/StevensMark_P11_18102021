import { Component } from "react"
import Banner from '../components/Banner'
import homeBanner from '../assets/homeBanner.jpg'
import Card from '../components/Card'
import Error from "./Error"
import '../styles/Home.css'
// key={`${data.id}-${index}`}

export default class Home extends Component {
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
        (jsonResponse) => {this.setState({ isLoaded: true, datas: jsonResponse })
         },
        (error) => {
          this.setState({ error })
        }
      ) 
  }

  componentDidMount() {
    this.getData("../logements.json")
  }

  render() { 
    const { datas, error, isLoaded } = this.state

    return (
      <main>
        {error && (
          <Error />
        )}
        {!isLoaded ? (      
        <div className='loading'>  
          <div>Loading ... </div> 
        </div> )  :
        (   
        <div className='homeWrapper'>
            <span className='homeBanner'>
              <Banner image={homeBanner} alternate='Rocks by the sea coastline'/>
              <h1 className='slogan'>Chez vous, partout et ailleurs</h1>    
            </span>  
          <div className='accomodationContainer'>
              {datas.map((data) => ( 
                    <Card key={data.id} id={data.id} title={data.title} cover={data.cover}/> 
              ))}         
          </div>
        </div>
        )}
      </main>
    )
  }
}



