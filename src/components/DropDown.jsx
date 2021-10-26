import { Component} from "react"  /*createRef */
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
    const {dropdownPurpose, dropdownType, title, content} = this.props
   
    return (
        <div className={dropdownPurpose} /*ref={this.container}*/>
            <div className='dropDownTitleBar' onClick={this.handleButtonClick}>
                <h2 className='dropDownTitleBarText'>{title}</h2>
                <span>{open ? (<img className='dropdownArrow' src={upArrow} alt="icon" />) : 
                    (<img className='dropdownArrow' src={downArrow} alt="icon" />)} </span>
            </div>

            {open && (typeof(content) === 'string' ? (
            <p className={dropdownType}>{content}</p>) :  
            ( <ul className={dropdownType}>
                {content.map((equipment, index) => (
                  <li key={`${equipment}-${index}`}>{equipment}</li> ))}
              </ul>
            ))}                     
        </div>
    )
  }
}

