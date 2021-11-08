import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Accomodation from './pages/Accomodation'
import Error from './pages/Error'
import './App.css'

class App extends Component {

  state = {
    goods :[],
    isLoaded: false,
    error: false
  }

    componentDidMount() {
      fetch("/logements.json")
      .then(res=> res.json())
          .then(datas =>{
              this.setState({
                goods: datas,
                isLoaded : true
              });
          },error=>{
              this.setState({error})
    })
}

render()
  {  
    return (
    <Router>
      <Header />   
        <Switch>
          <Route path="/" exact component={()=> <Home kasaGoods={this.state.goods} isLoaded={this.state.isLoaded} isError={this.state.error}/>}/>
          <Route path="/about" exact component={About} />
          <Route path="/accomodation/:id" exact component={(props)=><Accomodation kasaGoods={this.state.goods} isLoaded={this.state.isLoaded} {...props}/>} />
          <Route component={Error} />
        </Switch> 
      <Footer />
    </Router>  
    )
  }   
}

export default App;
