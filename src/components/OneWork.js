import React from 'react';
import './OneWork.scss';

const OneWork = ({img, nombre, desarrollo, right}) => {
    return ( 
        <div className='work'>
            {!right && 
                    <div className='work-info margin-right'>
                        <h3>{nombre}</h3>
                        <p>{desarrollo}</p>
                        <div className='buttons'>
                            <button className='Repositorio'>Repositorio</button>
                            <button className='Ver'>Ver</button>
                        </div>
                    </div>
            }

            <img src={img} />

            {right && 
                    <div className='work-info margin-left'>
                        <h3>{nombre}</h3>
                        <p>{desarrollo}</p>
                        <div className='buttons'>
                            <button className='Repositorio'>Repositorio</button>
                            <button className='Ver'>Ver</button>
                        </div>
                    </div>
            }
        </div>
     );
}
 
export default OneWork;