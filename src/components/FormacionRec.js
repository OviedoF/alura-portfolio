import React from 'react';


const FormacionRec = ({img, nombre, fecha, institucion}) => {
    return ( 
        <div className='formacion-component'>
            <div className='formacion-rec'>
                <img src={img}></img>
            </div>

            <h3>{nombre}</h3>
            <p>{fecha} - {institucion}</p>
        </div>

     );
}
 
export default FormacionRec;