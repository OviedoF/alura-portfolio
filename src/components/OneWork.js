import React from 'react';
import './OneWork.scss';

const OneWork = ({img, nombre, desarrollo, right, urlRep, urlPage}) => {
    return ( 
        <div className='work'>
            {!right && 
                    <div className='work-info margin-right'>
                        <h3>{nombre}</h3>
                        <p>{desarrollo}</p>
                        <div className='buttons'>
                            <button className='Repositorio'>
                                <a href={urlRep} target='_blank'>Repositorio</a>
                            </button>
                            <button className='Ver'>
                                <a href={urlPage} target='_blank'>Ver</a>
                            </button>
                        </div>
                    </div>
            }

            <img src={img} />

            {right && 
                    <div className='work-info margin-left'>
                        <h3>{nombre}</h3>
                        <p>{desarrollo}</p>
                        <div className='buttons'>
                            <button className='Repositorio'><a href={urlRep} target='_blank'>Repositorio</a></button>
                            <button className='Ver'><a href={urlPage} target='_blank'>Ver</a></button>
                        </div>
                    </div>
            }
        </div>
     );
}
 
export default OneWork;