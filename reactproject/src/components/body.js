import React, { Component } from 'react'
import Headers from './header';
import Footer from './footer.js';

export default class body extends Component {
    render() {
        return (    
        <React.Fragment>
        <Headers/>
            <div class="wrapper">
             <div class="item">box-1</div>
             <div class="item">box-2</div>
             <div class="item">box-3</div>
             <div class="item">box-4</div>
             <div class="item">box-5</div>
             <div class="item">box-6</div>
            </div>
        <Footer/>
       </React.Fragment>  
        )
    }
}
