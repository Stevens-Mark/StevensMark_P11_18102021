import { Component } from "react"
import '../styles/Drop.css'
// import about from '../data/kasaValues.json'

export default class DropDown extends Component {
    state = { open: false }

    handleButtonClick = () => {
        this.setState(state => ({        
            open: !state.open     
        }))
      }
    
  render() {
    const { open } = this.state
    return (
      
            <div className="container">    
                <button type="button" class="button" onClick={this.handleButtonClick}>
                    ☰<div>{open ? '-' : '+'}</div>
                </button> 
                {open && (
                    <div class="dropdown">
                        <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                        <li>Option 4</li>
                        </ul>
                    </div>
                )}
            </div>
   
    )
  }


  //  updateIsOpen = () => {
  //   this.setState({ isOpen : !isOpen })
  // }
    // render() { 
    // const { open } = this.state

    //   return (
    //     <article>
    //       {about.map((data) => (
    //       <div key= {data.id} className="accordion">
              
    //             <div className="accordion_title" onClick={() => this.handleButtonClick}>
    //               <div>{data.title}</div>
    //               <div>{open ? '-' : '+'}</div>
    //             </div>
    //             <div className="accordion_content">{data.content}</div>
           
    //       </div> ))}
    //     </article>
    //   )
    // }
  }
