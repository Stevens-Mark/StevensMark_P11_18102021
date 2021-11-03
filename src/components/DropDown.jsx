import { Component } from "react"  /*createRef */
import PropTypes from 'prop-types'
import upArrow from '../assets/arrows/up_arrow_white.svg'
import downArrow from '../assets/arrows/down_arrow_white.svg'
import '../styles/DropDown.css'


// Dropdown component used for about page & accomodation page
// params passed in to change style, height & info in the dropdown
// commented out code enables ALL dropdown to close when user clicks outside a dropdown
// but not needed for the project

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        // this.container = createRef();
        this.state = {
          open: false,
        }
      
      }
      
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
    const {dropdownWidth, dropdownHeight, title, content} = this.props
   
    return (
        <div className={dropdownWidth} /* ref={this.container} */>
            <div className='dropDownTitleBar' onClick={this.handleButtonClick}>
                <h2 className='dropDownTitleBarText'>{title}</h2>
                <span>{open ? (<img className='dropdownArrow' src={upArrow} alt="icon" />) : 
                    (<img className='dropdownArrow' src={downArrow} alt="icon" />)} </span>
            </div>

            {open && (typeof(content) === 'string' ? (
            <p className={dropdownHeight}>{content}</p>) :  
            ( <ul className={dropdownHeight}>
                {content.map((equipment, index) => (
                  <li key={`${equipment}-${index}`}>{equipment}</li> ))}
              </ul>
            ))}                     
        </div>
    )
  }
}

DropDown.propTypes = {
  dropdownWidth: PropTypes.string.isRequired,
  dropdownHeight: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
}

