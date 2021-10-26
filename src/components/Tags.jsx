import { Component } from 'react'
import '../styles/Tags.css'
 
export default class Tags extends Component {
    render() {
        const {tagData} = this.props
        // const tags = tagData
        return (
            <div className='tagWrapper'>
                {tagData.map((tag) => ( 
                    <h3 key={tag} className='tagTitle'>{tag}</h3>
                ))}  
            </div>
        )
    }
}
 