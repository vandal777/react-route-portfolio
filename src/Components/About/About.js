import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (      
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="/images/profilepic.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>Sobre mi</h2>
            <p>Mi nombre es Leonardo Badilla estudiante del grado de informática de la Universidad Politécnica de Barcelona 
              y soy un apasionado de la informática y los deportes.<br />
            </p>
            <p>Durante mi tiempo libre me gusta dedicarme a formarme aprendiendo nuevos lenguajes de programación, practicando mis deportes favoritos y
              tambien soy un apasionado de los E-Sports por lo tanto un gran jugador de shooters multiplayer.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Datos de contacto</h2>
                <p className="address">
                  <span>Leonardo Badilla</span><br />
                  <span>Rambla de la pau 87</span><br />
                  <span> Vilanova i la Geltru<br />
                    Barcelona 08800 ES
                  </span><br />
                  <span>(0034) 666994034</span><br />
                  <span>leonardo.badilla2@gmail.com</span>
                </p>
              </div>
              {/*<div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>*/} 
            </div>
          </div>
        </div>
      </section>
    )
  }
}
