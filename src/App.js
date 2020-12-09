import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Search from "./pages/Search";
import MyNavbar from "./components/Navbar/MyNavbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <MyNavbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Projects}/> 
          
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
