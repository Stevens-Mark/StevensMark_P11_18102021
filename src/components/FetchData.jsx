// import { Component } from 'react'

// export default class FetchData extends Component {
//     constructor(props) {
//       super(props)
  
//       this.state = {
//         error: null,
//         isLoaded: false,
//         datas: [],
//       }
//     }
  
//     getData(url) {
//       fetch(url)
//         .then((response) => response.json())
//         .then(
//           (jsonResponse) => {
//             const idInUrl = this.props.match.params.id
//             const itemToShow = jsonResponse.find((item) => item.id === idInUrl)
  
//             if (itemToShow) {
//               this.setState({
//                 isLoaded: true,
//                 datas: itemToShow,
//               })
//             }
//           },
//           (error) => {
//             this.setState({ error })
//           }
//         )
//     }
  
//     componentDidMount() {
//       this.getData("../logements.json")
//     }

   
// }