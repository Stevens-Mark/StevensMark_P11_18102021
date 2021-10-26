import { Component } from 'react'
import '../styles/Tags.css'
 
export default class Tags extends Component {
    render() {
        const {tagData} = this.props
        const tags = tagData
        return (
            <div className='tagWrapper'>
                {tags.map((tag) => ( 
                    <p key={tag} className='tagTitle'>{tag}</p>
                ))}  
            </div>
        )
    }
}
 