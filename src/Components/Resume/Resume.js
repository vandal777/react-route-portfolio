import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
            {/* Work
    ----------------------------------------------- */}
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Trabajo</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3><a target="_blank" href="https://www.yaencontre.com">yaencontre.com</a></h3>
              <p className="info">Frontend ReactJS developer <span>•</span> <em className="date">Mayo 2018 – febrero 2019</em></p>
              <p>
              Mientras realizaba mi proyecto quería aprovechar la oportunidad que me brindaba la universidad de realizar prácticas en una empresa y las hice en la empresa yaencontre uno de los más importantes portales inmobiliarios del momento. Aquí fue donde empezó mi mayor aprendizaje, que ha sido la migración del portal estático diseñado con HTML, PHP, MYSQL, hacia una implementación creada con ReactJS, Redux, NodeJS, Express y Java SpringBoot. 
              <br/>Yo he trabajado en la parte cliente, por lo tanto, en la parte realizada con <b>ReactJs, Redux, JavaScript (ES6) y PostCSS</b>, especializándome en la creación y revisión de componentes de tal manera que tengan la mejor performance posible, evitando el bloqueo de la ruta crítica de renderización del DOM. Todo esto, utilizando metodologías agiles con un tablero Scrum en Jira.
              <br/>Cabe destacar que todo este proyecto de ReactJS fue implementado utilizando TypeScript.
              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>QDSystems</h3>
              <p className="info">Becario en practicas <span>•</span> <em className="date">2013</em></p>
              <p>
              En esta empresa realice mis practicas del ciclo superior de diseño de aplicaciones web. Mi puesto era de becario en practicas realizando tareas de full stack developer utilizando tecnologías como html, php, mysql, Jquery, Ajax, wordpress implementado la parte de servidor utilizando VB.NET y una base de datos MySQL
              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>Vilabyte</h3>
              <p className="info">Becario en practicas <span>•</span> <em className="date">2011</em></p>
              <p>
              Empresa local en la cual realice mis practicas del ciclo formativo de grado medio. Mis tareas en esta empresa eran las de mantenimiento y reparación de equipos informáticos tanto la parte Hardware como la parte de Sistemas Operativos.              </p>
            </div>
          </div> {/* item end */}
        </div> {/* main-col end */}
      </div> {/* End Work */}
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Estudios</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Universitat Politécnica de Catalunya</h3>
              <p className="info">Grado de ingenieria informatica <span>•</span> <em className="date">Actualidad</em></p>
              <p>
              Una vez obtuve el titulo como técnico superior ya podía acceder a la universidad el mayor objetivo que tenía. Durante el primer año la mayoría de asignaturas eran específicas de una ingeniería (Matemáticas, Física, Estadística, etc.).
A partir de ahí he tenido la oportunidad de conocer mucho mas a fondo toda la informática, desde redes, arquitecturas de computadores y la ingeniería del software.
De la carrera voy a destacar los conocimientos adquiridos sobre el especificación, diseño y implementación del software para tener una máxima eficiencia con cualquier lenguaje tanto en parte cliente como por parte de servidor. 
Como <b>Trabajo de Final de Grado</b> realice la implementación de un hardware capaz de realizar la identificación de un usuario con una tarjeta RFID o Usuario y contraseña contra una máquina. Utilizando <b>Arduino</b> como actuador conectado a una <b>Raspberry Pi3</b> la cual tenía un servidor Apache para funcionar como Servidor Web y unas APIS creadas en <b>C# .NET CORE 2.0</b> utilizando inyección de dependencias capaces de contestar mensajes tanto provenientes del actuador (Arduino) como del Servidor Web apache. También hay que destacar que la parte cliente la realice con <b>ReactJS y Redux</b> para conseguir crear una <b>SPA</b> ya que en ese momento me encontraba realizando un curso de este Framework de JavaScript. De esta manera conseguí tener toda la implementación del problema dentro de una Raspberry Pi3.

              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>Ciclo Formativo de Grado Superior</h3>
              <p className="info">DAW (Diseño de Aplicaciones Web) <span>•</span> <em className="date">septiembre 2012 – junio 2014</em></p>
              <p>
              Una vez terminado el grado, quería continuar mi aprendizaje, por lo cual proseguí con un grado superior DAW (Diseño de Aplicaciones Web) en 2012 donde aprendería el lenguaje <b>JavaScript</b> en aquella época utilizando la librería <b>JQuery y Ajax</b>, perfeccionaría mis habilidades con <b>HTML, CSS, PHP y el árbol DOM</b>. También tendría mi primer contacto con las aplicaciones por parte “Servidor” con <b>Java y C# y la Programación Orientada a Objetos</b>.
Una vez terminado el ciclo, como proyecto final diseñe una <b>Single Page Aplication utilizando JQuery y Ajax</b>. También tuve la oportunidad de realizar prácticas en empresa, esta vez como programador, utilizando <b>ASP.NET con MySQL y la parte cliente utilizando WordPress</b>.

              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>Ciclo Formativo de Grado medio</h3>
              <p className="info">ESI (Explotación Sistemas Informaticos) <span>•</span> <em className="date">septiembre 2010 – junio 2012</em></p>
              <p>
              Mi pasión por la informática empezó desde bien pequeño, pero no a sido hasta acabar mis estudios secundarios mi primer contacto con la programación, en 2010 empezando un grado medio ESI (Explotación de Sistemas Informáticos) donde tuve mi primer contacto con <b>Visual Basic, HTML, CSS, PHP, y bases de datos MYSQL</b>.
Aparte de eso también tuve mi primer contacto con toda la parte Hardware y de Redes informáticas montando Redes y dispositivos virtuales, para simular una Red de dispositivos, también tuve tiempo para realizar mis prácticas en un establecimiento local de informática, donde realizaba funciones de mantenimiento y reparación de dispositivos tanto a nivel de Sistema Operativo como a nivel Hardware.
              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3><a target="_blank" href="https://www.udemy.com/react-js-redux-es6-completo-de-0-a-experto-espanol/">React JS + Redux + ES6. Completo ¡De 0 a experto!</a></h3>
              <p className="info">Curso de udemy.com <span>•</span> <em className="date">2018</em></p>
              <p>
              Curso de programación con ReactJS con Redux y ES6 en el cual desarrolle mi primera aplicación con ReactJS              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3><a target="_blank" href="https://www.udemy.com/desarrollo-movil-con-react-native-expo-y-firebase/">Desarrollo móvil con React Native, Expo y Firebase</a></h3>
              <p className="info">Curso de udemy.com <span>•</span> <em className="date">2018</em></p>
              <p>
              Curso de programación con React Native con un Backend utilizando firebase y genymotion para simulación de dispositivos conectado a expo para poder debugar la aplicación              </p>
            </div>
          </div> {/* item end */}
        </div> {/* main-col end */}
      </div> {/* End Education */}
      {/* Skills
    ----------------------------------------------- */}
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>Aqui hay un resumen del porcentaje de conocimento que creo que he podido adquirir de cada tecnologia durante todo el tiempo que llevo trabajando con ellas.
            Actualmente se puede ver que mi maxima experiencia es con React y Redux, aunque tambien me gusta mucho la programación MOBILE por lo que tambien tengo experiencia en React Native.
          </p>
          <div className="bars">
            <ul className="skills">
              <li><span className="bar-expand reactjs" /><em>ReactJS</em></li>
              <li><span className="bar-expand redux" /><em>Redux</em></li>
              <li><span className="bar-expand postcss" /><em>PostCSS</em></li>
              <li><span className="bar-expand webpack" /><em>WebPack3</em></li>
              <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
              <li><span className="bar-expand typescript" /><em>TypeScript</em></li>
              <li><span className="bar-expand nodejs" /><em>NodeJS</em></li>
              <li><span className="bar-expand php" /><em>PHP</em></li>
              <li><span className="bar-expand mysql" /><em>MySQL</em></li>
              <li><span className="bar-expand reactnative" /><em>React Native</em></li>
            </ul>
          </div>
        </div>
      </div> 
    </section>
    )
  }
}
