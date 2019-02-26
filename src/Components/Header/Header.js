import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Soy Leonardo Badilla.</h1>
            <h3>Soy un <span>Frontend developer</span> de Barcelona capaz de crear Web's utilizando <span>ReactJS y Redux</span>. 
            Navega por el Site clicando en el Header y conoce mas {/*<NavLink to="/about">Sobre mi</NavLink>*/}.</h3>
            <hr />
            <ul className="social">
              <li><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/vandaLbd"><i className="fa fa-twitter" /></a></li>
              <li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/leonardo-badilla"><i className="fa fa-linkedin" /></a></li>
              <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/vandal777"><i className="fa fa-github" /></a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}