import React from 'react';
import './Presentation.scss';
import PicMe from '../img/PicMe.jpeg';

const Presentation = () => {
    return ( 
        <div className='Presentation'>
            <div className='Presentation__text'>
                <h1>Hola, soy Oviedo Federico y soy Front-End developer</h1>
                <p>Soy formado en Front-End, un entusiasta de la tecnología y del conocimiento, sobre todo en mi rama. ;)</p>

                <div className='Presentation__socialMedia'>
                    <a href='#'>LinkedIn</a>
                    <a href='#'>Github</a>
                    <a href='#'>Currículo</a>
                </div>
            </div>

            <img src={PicMe} alt='Oviedo Federico Picture' />
        </div>
     );
}
 
export default Presentation;