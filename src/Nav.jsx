
import React, { Component } from "react";
import {
  Route,
  NavLink
} from "react-router-dom";
import Header from "./Components/Header/Header"
import About from "./Components/About/About"
import Resume from "./Components/Resume/Resume"
import Portfolio from "./Components/Portfolio/Portfolio";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({open: this.state.open ? false : true})
    console.log("statequieto")
  }

  render() {
    return (
        <div>
          <nav id="nav-wrap">
            <a className="mobile-btn" onClick={this.clickHandler} title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className={`nav${this.state.open}`}>
              <li><NavLink onClick={this.clickHandler} exact to="/">Home</NavLink></li>
              <li><NavLink onClick={this.clickHandler} to="/about">Sobre mi</NavLink></li>
              <li><NavLink onClick={this.clickHandler} to="/resume">Curriculum</NavLink></li>
              {/*<li><NavLink onClick={this.clickHandler} to="/portfolio">Portfolio</NavLink></li>*/}
              {/*<li><NavLink to="/contact">Contacto</NavLink></li>*/}
            </ul>
          </nav>
          <div className="content">
            <Route exact path="/" component={Header} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            {/*<Route path="/portfolio" component={Portfolio} />*/}
            {/*<Route path="/contact" component={Contact} />*/}
          </div>
          <a href={"https://leonardobadilla.com"}>home</a>
          <a href={"https://leonardobadilla.com/about"}>About</a>
          <a href={"https://leonardobadilla.com/resume"}>Curriculum</a>
        </div>
    );
  }
}

export default Nav;
