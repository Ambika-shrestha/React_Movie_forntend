import React, { Component } from 'react'
import Headers from './header';
import Footer from './footer.js';

export default class body extends Component {
    render() {
        return (    
        <div style={{width:'100%',height:'100%',position:'absolute'}}>
        <Headers/>
        <div class="container-fluid">
        <p class="tag">Watch Movies</p>
    	<div class="scrolling-wrapper">
			
			<div class="card-block">
				<div></div>
			</div>
			
    	</div>
     <p class="tag">Recomended Movies</p>
    <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">
			
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
    </div>
    <p class="tag">Seen Movies</p>
    <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">
			
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
    </div>
	<p class="tag">New Movies</p>
    <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4">
			
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
			<div class="col-5">
				<div class="card card-block"></div>
			</div>
    </div>
</div>
        <Footer/>
       </div>  
        )
    }
}
