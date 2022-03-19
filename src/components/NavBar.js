import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <h3>Federico Oviedo</h3>
        </div>

        <ul>
          <li><a href="#aboutMe">Sobre Mi</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#formacion">Formación</a></li>
          <li><a href="#works">Proyectos</a></li>
          <li><a href="#contactForm">oviedofederico039@gmail.com</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
