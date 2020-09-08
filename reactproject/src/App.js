import React from 'react';
import './App.css';
import Body from './components/body';
import Login from './login';
import SignUp from './components/signup';
import AddMovie from './components/addmovie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import login from './login';

function App() {
  return (
    <Router>
    <div className="App">
      
      <div> 
       <Switch>
        <Route path="/LogIn" exact component={Login}/>
        <Route path="/Home" component={Body}/>
        <Route path="/LogIn" component={Login}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/AddMovie" component={AddMovie}/>
        </Switch> 
      </div>

    </div>

    </Router>
  );
}
export default App;
