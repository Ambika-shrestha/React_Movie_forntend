import React from 'react';
import logo192 from '../index'
import {Link} from 'react-router-dom'

export default function Headers() {

    return(
        <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="#">Movies</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      {/* <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Order By 
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="#">Ratings</Link>
          <Link class="dropdown-item" to="#">Catagory</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" to="#">Released Date</Link>
        </div>
      </li> */}
  
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
        </React.Fragment>
        );
} 

