import { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/Tags.css'

// 
/**
 * Renders Individual accomodation "tags"
 * @function Tags
 * @extends Component
 * @param {array} props tagData: tags for the accomodation
 * @returns {JSX}
 */
export default class Tags extends Component {
    render() {
        const {tagData} = this.props
        
        return (
            <div className='tagWrapper'>
                {(tagData || []).map((tag) => ( 
                    <p key={tag} className='tagTitle'>{tag}</p>
                ))}  
            </div>
        )
    }
}
 
Tags.propTypes = {
    tagData: PropTypes.array.isRequired,
}
  