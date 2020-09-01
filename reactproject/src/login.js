import React, { Component } from 'react'
import Body from './components/body';
import SignUp from './components/signup';
import { getToken } from "./apis.js/api";

import './login.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class login extends Component {
  constructor(){
    super()
    this.getTokenLogin()
  }
  getTokenLogin() {
    getToken().then((data) => {
      debugger;
      console.log(data);
      let token = data.token_type + " " + data.access_token;
      localStorage.setItem("tokenKey", token);
    });
  }

    render() {
        return (
           <React.Fragment>
            <form class="form-signin">
            <img class="mb-4" src="flim.png" alt="" width="72" height="72"/>
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
            <div class="checkbox mb-3">
             <label>
               <input type="checkbox" value="remember-me"/> Remember me
             </label>
            </div>
              <Link to={'/Home'}>
              <button  class="btn btn-lg btn-primary btn-block" type="submit" id="signin">Sign in</button>
              </Link>
              <Link to={'/SignUp'}>Sign UP before you sign in</Link>
             </form>
             <br/><br/>
             <br/><br/>
             <br/><br/>
             <br/><br/>
             </React.Fragment>
        )
    }
}

