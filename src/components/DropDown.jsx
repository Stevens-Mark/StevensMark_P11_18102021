import { Component } from "react"
import '../styles/DropDown.css'
import about from '../data/kasaValues.json'

export default class DropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
        open : false,
    }
   }
   
   handleButtonClick = () => {
    this.setState(state => ({        
        open: !state.open     
    }))
  }

    render() { 
    const { open } = this.state

      return (
        <article>
          {about.map((data) => (
          <div key= {data.id} className="accordion">
              
                <div className="accordion_title" onClick={() => this.handleButtonClick}>
                  <div>{data.title}</div>
                  <div>{open ? '-' : '+'}</div>
                </div>
                <div className="accordion_content">{data.content}</div>
           
          </div> ))}
        </article>
      )
    }
  }

  