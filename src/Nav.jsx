
import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Screens/Home";
import Profesorado from "./Screens/Profesorado";
import Contact from "./Screens/Contact";
import Temario from "./Screens/Temario";
import Blog from "./Screens/Blog";


class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Master odontologia</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink> </li>
            <li><NavLink to="/temario">Temario curso</NavLink></li>
            <li><NavLink to="/profesorado">Profesorado</NavLink></li>      
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contacto</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/profesorado" component={Profesorado} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/temario" component={Temario} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Nav;
