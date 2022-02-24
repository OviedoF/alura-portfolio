import React from 'react';
import './MainSection.scss';
import Presentation from './Presentation.js';
import AboutMe from './AboutMe';

const MainSection = () => {
    return ( 
        <>
            <div className='presentation-container'>
                <Presentation />
                
                <AboutMe />
            </div> 
        </>
     );
}
 
export default MainSection;