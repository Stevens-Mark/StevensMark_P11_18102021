import { Component, Fragment } from "react"
import '../styles/DropDown.css'


  export default class DropDown extends Component {

    render() { 
      const accordionData = {
        title: 'Fiabilité',
        content: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`
      }
      const { title, content } = accordionData
      return (
        <Fragment>
        
            <div className="accordion">
              <div className="accordion_title">
                <div>{title}</div>
                <div>+</div>
              </div>
              <div className="accordion_content">{content}</div>
            </div>
      
        </Fragment>
      )
    }
}