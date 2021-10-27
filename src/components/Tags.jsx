import { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/Tags.css'
 
export default class Tags extends Component {
    render() {
        const {tagData} = this.props
        
        return (
            <div className='tagWrapper'>
                {tagData.map((tag) => ( 
                    <h3 key={tag} className='tagTitle'>{tag}</h3>
                ))}  
            </div>
        )
    }
}
 
Tags.propTypes = {
    tagData: PropTypes.array.isRequired,
}
  