import React from 'react';
import './Formacion.scss';
import FormacionRec from './FormacionRec';
import EETP495 from '../img/EETP495.jpg';
import ALURA from '../img/ALURA.png';
import CODIGOFACILITO from '../img/CODIGOFACILITO.png';

const Formacion = () => {
    return ( 
        <div className='formacion'>
            <h2>Formaciones y cursos</h2>

            <div className='courses-container'>
                <FormacionRec 
                img={EETP495}
                nombre='Técnico Superior en Informática'
                fecha='2021'
                institucion='E.E.T.P 495'/>

                <FormacionRec 
                img={ALURA}
                nombre='Oracle Next Education'
                fecha='En curso'
                institucion='Alura Latam'/>

                <FormacionRec 
                img={CODIGOFACILITO}
                nombre='Curso Profesional de BD'
                fecha='2022'
                institucion='Código Facilito'/>

                <FormacionRec 
                img={CODIGOFACILITO}
                nombre='Curso Profesional de React'
                fecha='2022'
                institucion='Código Facilito'/>
            </div>
        </div>
     );
}
 
export default Formacion;