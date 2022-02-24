import React from 'react';
import OneWork from './OneWork';
import './Works.scss';
import SongFinder from '../img/projects img/SongFinder .png';
import TaskMeApp from '../img/projects img/TaskMeApp.png';
import Aerolinea from '../img/projects img/Aerolinea Nostrus Landing Page.png';
import codificadito from '../img/projects img/codificadito.png';

const Works = () => {

    const redimensionar = window.outerWidth

    return ( 
        <div className='work-section'>
            <h2>Experiencia profesional</h2>

            <OneWork img={SongFinder} nombre='Buscador de canciones' desarrollo='React, Sass.' right={true}/>
            <OneWork img={TaskMeApp} nombre='ToDo App' desarrollo='HTML, CSS, JAVASCRIPT - Alura Latam' right={redimensionar <= 768 ? true : false}/>

            <OneWork img={Aerolinea} nombre='Landing Page aerolinea' desarrollo='HTML, CSS, JAVASCRIPT' right={true}/>
            <OneWork img={codificadito} nombre='Codificador de contraseñas' desarrollo='HTML, SASS, JAVASCRIPT' right={redimensionar <= 768 ? true : false}/>
        </div>
     );
}
 
export default Works;