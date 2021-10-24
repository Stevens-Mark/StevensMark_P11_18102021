import { Component, createRef } from "react"
import upArrow from '../assets/arrows/up_arrow_white.svg'
import downArrow from '../assets/arrows/down_arrow_white.svg'
import '../styles/Dropdown.css'

export default class DropDown extends Component {
    // constructor(props) {
    //     super(props);
    //     this.container = createRef();
    //   }
      
    state = { open: false }
  
    handleButtonClick = () => {
        this.setState(state => ({        
            open: !state.open     
        }))
      }

    //   handleClickOutside = (event) => {
    //     if (
    //       this.container.current &&
    //       !this.container.current.contains(event.target)
    //     ) {
    //       this.setState({
    //         open: false,
    //       });
    //     }
    //   };

    //   componentDidMount() {
    //     document.addEventListener("mousedown", this.handleClickOutside);
    // }

    // componentWillUnmount() {
    //   document.removeEventListener("mousedown", this.handleClickOutside);
    // }

  
  render() {
    const { open } = this.state
    const {id, title, content} = this.props
    return (
        <div className='dropDown' /*ref={this.container}*/>
            <div className="dropDownTitle" onClick={this.handleButtonClick}>
                <span>{title}</span>
                <span>{open ? (<img src={upArrow} alt="icon" />) : 
                    (<img src={downArrow} alt="icon" />)} </span>
            </div>

            {open && (
            <p key={id} className="dropDownList">{content}</p>)}
        </div>
    )
  }
}

