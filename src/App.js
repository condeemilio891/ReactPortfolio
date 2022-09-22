import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Projects from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer"
import MyNavbar from "./components/Navbar/MyNavbar";

import Wrapper from "./components/Wrapper";
import onePage from "./pages/onePage/onePage";

function App() {
  return (
    <Router basename="/">
      <div>
        <Wrapper>
          <Route exact path="/ReactPortfolio" component={onePage}/>
          <Route exact path="/" component={onePage} />
          <Route exact path="/about" component={onePage} />
          <Route exact path="/portfolio" component={onePage}/> 
          <Route exact path='/test' component={onePage}/>
          
        </Wrapper>
       
      </div>
    
    </Router>
    
    
  );
}

export default App;
