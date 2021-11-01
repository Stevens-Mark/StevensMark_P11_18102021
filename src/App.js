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

render()
  {  
    return (
    <Router>
      <Header />   
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route
              path="/accomodation/:id"
              render={(props) => <Accomodation  {...props } />}
            />
            <Route>
              <Error />
            </Route>
        </Switch> 
      <Footer />
    </Router>  
    )
  }   
}

export default App;
