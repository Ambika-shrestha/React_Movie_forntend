import React, { Component } from 'react'
import { addMovie } from "../apis.js/api";
export default class addmovie extends Component {

    constructor(){
        super();
        this.state = {
          title:'',
          details:'',
          imagelink:''
        }  

   // this.handleInputChange = this.handleInputChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    }   
    
    addMovie(event) {
        addMovie(this.state.title,this.state.details,this.state.imagelink).then((data) => {
          debugger;
          console.log(data);
        });
      }
    
    
    render() {
        return (
            <div>
              <form>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h2>Add Movies</h2>
                    <div class="col-xs-4">
                     <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" onChange={this.handleInputChange} value={this.state.title} aria-describedby="title" placeholder="Enter title"/>
                     </div>
                    <div class="col-xs-4">
                    <label for="details">Details</label>
                     <input type="text" class="form-control" onChange={this.handleInputChange} value={this.state.details} id="details" placeholder="Enter Details"/>
                    </div>
                    <div class="col-xs-4">
                    <label for="imageLink">Image Link</label>
                     <input type="text" class="form-control" onChange={this.handleInputChange} value={this.state.imagelink} id="imageLink" placeholder="imageLink"/>
                    </div>
                    <button type="submit" onClick={this.addMovie} class="btn btn-primary">Submit</button>
                    </form>
                    <br></br>
                    <br></br><br></br>
                    <br></br>
                    <br></br>
            </div>
      
        )
    }
}
