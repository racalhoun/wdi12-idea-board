import React, { Component } from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/home/HomePage'
import LoginPage from './components/login/LoginPage'
import IdeaPage from './components/idea/IdeaPage'

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <div>
           <Link to='/'>Home</Link>
           </div>
           <div>
           <Link to='/login'>LogIn</Link>
           </div>
           <div>
           <Link to='/idea'>Idea</Link>
         </div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/idea' component={IdeaPage}/>
        </Switch>

         </div>
       </Router>
    );
  }
}

export default App;
