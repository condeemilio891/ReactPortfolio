import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';



function Footer() {
  var dateToFormat= new Date('Mon Jan 12 00:00:00 GMT 2015');
  // Moment(dateToFormat)
  // dateToFormat.format('YYYY-MM-DD HH:mm');




  return (
    
    <div className='footer-container'>
          <div className='footer-links'>
        <div className='footer-link-wrapper'>
      
        </div>
      </div>
    
    
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <i className='fas fa-microscope' />
            </Link>
      </div>
        
          <div className='social-icons'>
            <a className ="social-icon-link" href="https://docs.google.com/document/d/1Rbz5gWwFHqjOh78-TLTi_wcWiNxMNhJJLNRJkclJYGI/edit?usp=sharing" variant="link">Resume</a>
            
            <a className ="social-icon-link"  href='https://github.com/condeemilio891' varient="link">Github</a>
            
            <a className ="social-icon-link"  href='https://www.linkedin.com/in/emilio-j-conde-ab2101195/' varient="link">LinkedIn</a>
            
            <a className ="social-icon-link"  href='#portfolio'>Portfolio</a>
          
          </div>
          
         
          <p className='website-rights'>
          <Moment component={dateToFormat} /> 
          </p>

          <div className='social-icons'>

            <a 
                className ="social-icon-link twitter"
                href="https://github.com/condeemilio891/EmployeeManagementSystem"
                target= '_blank'
                aria-label
              a> 
              <i className='fab fa-github' />
              Employee Management System
              </a> 
              <a 
                className ="social-icon-link twitter"
                href="https://github.com/condeemilio891/good_READme_generator"
                target= '_blank'
                aria-label
              a> 
              <i className='fab fa-github' />
              GoodReadme Generator
              </a> 
            
              <a 
                className ="social-icon-link twitter"
                href="https://condeemilio891.github.io/quiz/"
                target= '_blank'
                aria-label
              a> 
              <i className='fab fa-github' />
              Try This NeuroBiology Quiz
              </a> 
              <a 
                className ="social-icon-link twitter"
                href="https://game-dex-ut.herokuapp.com/"
                target= '_blank'
                aria-label
              a> 
              <i className='fab fa-github' />
              GameDex
          </a>
          </div>
          <Link to='/' className='social-logo'>
              <i className='fas fa-microscope' />
            </Link>
        </div>
        <div class="jupiter">
                <div></div>
              </div>
      </section>
    </div>
  );
}

export default Footer;