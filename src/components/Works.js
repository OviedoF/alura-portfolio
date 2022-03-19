import React, { useState, useEffect } from "react";
import OneWork from "./OneWork";
import "./Works.scss";
import SongFinder from "../img/projects img/SongFinder .png";
import TaskMeApp from "../img/projects img/TaskMeApp.png";
import Aerolinea from "../img/projects img/Aerolinea Nostrus Landing Page.png";
import codificadito from "../img/projects img/codificadito.png";

const Works = () => {
  const [dimensiones, setDimensiones] = useState(window.outerWidth);

  useEffect(() => {
    setInterval(() => {
      setDimensiones(window.outerWidth);
    }, 500);
  }, []);

  return (
    <div className="work-section" id="works"> 
      <h2>Experiencia profesional</h2>

      <OneWork
        img={SongFinder}
        nombre="Buscador de canciones"
        desarrollo="React, Sass."
        right={true}
        urlRep="https://github.com/OviedoF/lyricsfinder/tree/main/z3-songs-seeker"
        urlPage="https://oviedof.github.io/lyricsfinder/"
      />

      <OneWork
        img={TaskMeApp}
        nombre="ToDo App"
        desarrollo="HTML, CSS, JAVASCRIPT - Alura Latam"
        right={dimensiones <= 768 ? true : false}
        urlRep="https://github.com/OviedoF/App-de-Tareas"
        urlPage="https://oviedof.github.io/App-de-Tareas/"
      />

      <OneWork
        img={Aerolinea}
        nombre="Landing Page aerolinea"
        desarrollo="HTML, CSS, JAVASCRIPT"
        right={true}
        urlRep="https://github.com/OviedoF/NostrusAirlines"
        urlPage="https://oviedof.github.io/NostrusAirlines/"
      />

      <OneWork
        img={codificadito}
        nombre="Codificador de contraseñas"
        desarrollo="HTML, SASS, JAVASCRIPT"
        right={dimensiones <= 768 ? true : false}
        urlRep="https://github.com/OviedoF/CODIFICADITO"
        urlPage="https://oviedof.github.io/CODIFICADITO/"
      />
    </div>
  );
};

export default Works;
