import React, { Component } from 'react'
import {registerUser} from '../apis.js/api'
import { getToken } from "../apis.js/api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class signup extends Component {

  constructor(){
    super();
    this.state = {
      username:'',
      email:'',
      password:'',
      birthdate:'',
      country:'',
      area:'',
      city:'',
      street:'',
      pincode:'',
      gender:'male',
      role:'user'
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);

    this.registerUser = this.registerUser.bind(this);

    this.getTokenLogin()
  }

  getTokenLogin() {
    getToken().then((data) => {
      let token = data.token_type + " " + data.access_token;
      localStorage.setItem("tokenKey", token);
    });
  }

  registerUser(event){
    let dict = this.state
    console.log(dict);
    registerUser(dict).then(data => {
      debugger;
      console.log(data)
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

    render() {
        return (
           <React.Fragment>
            <form class="form-signin">
            <img class="mb-4" src="flim.png" alt="" width="72" height="72"/>
            <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
            <label for="inputName">Name</label>
            <input type="text" name="username" id="inputName" value={this.state.username} class="form-control" onChange={this.handleInputChange} placeholder="Example: Ambika Shrestha" required autofocus/>
            <label for="inputEmail" >Email address</label>
            <input type="email" id="inputEmail" name="email" value={this.state.email} class="form-control" onChange={this.handleInputChange}  placeholder="Email address" required autofocus/>
            <label for="inputPassword" >Password</label>
            <input type="password" id="inputPassword" name="password" value={this.state.password} class="form-control" onChange={this.handleInputChange} placeholder="Password" required/>
            <label for="inputBirthDate">BirthDate</label>
            <input type="text" id="inputbirthdate" name="birthdate" value={this.state.birthdate} class="form-control" onChange={this.handleInputChange} placeholder="birthdate" required/>
            <label for="inputCountry" >Country</label>
            <input type="text" id="inputCountry" name="country" value={this.state.country} class="form-control" onChange={this.handleInputChange} placeholder="Country" required/>
            <label for="inputAreas" >Areas</label>
            <input type="text" id="inputAreas" name="area" value={this.state.area} class="form-control" onChange={this.handleInputChange} placeholder="Areas" required/>
            <label for="inputCity" >City</label>
            <input type="text" id="inputCity" name="city" value={this.state.city} class="form-control" onChange={this.handleInputChange} placeholder="City" required/>
            <label for="inputStreet">Street</label>
            <input type="text" id="inputStreet" name="street" value={this.state.street} class="form-control" onChange={this.handleInputChange} placeholder="Street" required/>
            <label for="inputpincode" >Pin code</label>
            <input type="text" id="inputpincode" name="pincode" value={this.state.pincode} class="form-control" onChange={this.handleInputChange} placeholder="pincode" required/>
            <br/>
            <div>
            <div onChange={this.handleOptionChange}>
            <h6>Gender</h6>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">Male </label>
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">Female</label>
            </div>
            </div>
            <div>
            <div onChange={this.handleOptionChange}>
            <h6>Role</h6>
            <input type="radio" id="admin" name="role" value="admin" />
            <label for="admin">Admin </label>
            <input type="radio" id="user" name="role" value="user" />
            <label for="user">User</label>
            </div><br/>
            </div>
              {/* <Link to={'/LogIn'}> */}
              <button  class="btn btn-lg btn-primary btn-block" onClick={this.registerUser} type="submit" id="signin">Sign Up</button>
              {/* </Link> */}
             </form>
             <br/><br/>
             <br/><br/>     
             </React.Fragment>
        )
    }
    
}

