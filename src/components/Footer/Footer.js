import React from 'react';
import './footer.css';
// import { Button } from '../Navbar/Button';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';



function Footer() {
  var dateToFormat= new Date('Mon Jan 12 00:00:00 GMT 2015');
  // Moment(dateToFormat)
  // dateToFormat.format('YYYY-MM-DD HH:mm');




  return (

   <div className='footer-container'>
      
      {/* <!-- Footer social --> */}
      <section className="ft-social">
        <div className="ft-social-wrap">
        <ul class="ft-social-list">
          <li><a href="#"><i class="fab fa-facebook"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-github"></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        </ul>
        </div>
      </section>
     
      {/* <!-- Footer legal --> */}
      <section class="ft-legal">
        <ul class="ft-legal-list">
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li>&copy; 2019 Copyright Nowrap Inc.</li>
        </ul>
      </section>

      

      </div>
  
  
    )   
}

export default Footer