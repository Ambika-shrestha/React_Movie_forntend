import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <React.Fragment>
            
           <footer class="page-footer font-small blue-grey lighten-5">

                  <div class="backgroundFooter">
                 <div class="container">

           <div class="row py-4 d-flex align-items-center">

           <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 class="mb-0">Get connected with us on social networks!</h6>
           </div>



      <div class="col-md-6 col-lg-7 text-center text-md-right">

        <a class="fb-ic">
          <i class="fab fa-facebook-f white-text mr-4"> </i>
        </a>

        <a class="tw-ic">
          <i class="fab fa-twitter white-text mr-4"> </i>
        </a>
      
        <a class="gplus-ic">
          <i class="fab fa-google-plus-g white-text mr-4"> </i>
        </a>
        
        <a class="li-ic">
          <i class="fab fa-linkedin-in white-text mr-4"> </i>
        </a>
        
        <a class="ins-ic">
          <i class="fab fa-instagram white-text"> </i>
        </a>

      </div>
      
    </div>
   

  </div>
</div>



<div class="footer-copyright text-center text-black-50 py-3">© 2020 Copyright:
  <a class="dark-grey-text"> ambika.shrestha@epita.fr</a>
</div>


</footer>

</React.Fragment>
        )
    }
}
