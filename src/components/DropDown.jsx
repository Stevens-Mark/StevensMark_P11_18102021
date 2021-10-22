import { Component } from "react"
import upArrow from '../assets/arrows/up_arrow_white.svg'
import downArrow from '../assets/arrows/down_arrow_white.svg'
import '../styles/Dropdown.css'

export default class DropDown extends Component {
    state = { open: false }

    handleButtonClick = () => {
        this.setState(state => ({        
            open: !state.open     
        }))
      }
    
  render() {
    const { open } = this.state
    const {id, title, content} = this.props
    return (
        
            <div key={id} className="dropDown" onClick={this.handleButtonClick}>
                {title}
                     <div>{open ? <img src={upArrow} alt="icon" /> : <img src={downArrow} alt="icon" />}</div>
                {open && (
                    <div className="dropdownList">
                        <ul>
                            <li>{content}</li>
                        </ul>
                    </div>
                )}
            </div>   
    )
  }
}
