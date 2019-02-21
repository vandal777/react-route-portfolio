
import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Header from "./Components/Header/Header"
import About from "./Components/About/About"
import Resume from "./Components/Resume/Resume"
import Portfolio from "./Components/Portfolio/Portfolio";

class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/about">Sobre mi</NavLink></li>
              <li><NavLink to="/resume">Curriculum</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
              {/*<li><NavLink to="/contact">Contacto</NavLink></li>*/}
            </ul>
          </nav>
          <div className="content">
            <Route exact path="/" component={Header} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            {/*<Route path="/contact" component={Contact} />*/}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Nav;
