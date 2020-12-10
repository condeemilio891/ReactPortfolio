import React from "react";
import { HashRouter as Router, Route, Link, Switch  } from "react-router-dom";
import Projects from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";

import MyNavbar from "./components/Navbar/MyNavbar";
import Footer from "./components/Footer/footer.jsx";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <MyNavbar />
        <Wrapper>
          <Switch>
            <Route exact path= "/ReactPortfolio" component={About}/>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Projects}/> 
          </Switch>
          
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}






export default App;

