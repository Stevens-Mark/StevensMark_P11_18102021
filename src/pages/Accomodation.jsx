import { Component } from 'react'
import accomodationData from '../data/logements.json'
import '../styles/Accomodation.css'
 
export default class Accomodation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileData: {},
        }
    }
    
    componentDidMount() {
        const { id } = this.props.match.params
        const chosenAccomodation = accomodationData.find((data) => data.id === id)
        this.setState({ profileData: chosenAccomodation })
    }

    render() {
        const { profileData } = this.state
        const {
            id, pictures, title, location, tags, host, rating, description, equipments,
        } = profileData
        // const accomodationId = this.props.match.params.id
        // const chosenAccomodation = accomodationData.find((data) => data.id === accomodationId)
        // const {id, pictures, title, location, tags, host, rating, description, equipments,
        // } = chosenAccomodation
          
        return <div className='test'><h1>Accomodation : {id} </h1>
                <h1>Accomodation : {title}</h1>
        </div>
    }
}
 
