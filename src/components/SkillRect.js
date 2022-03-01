import React from 'react';
import './SkillRect.scss';

const SkillRect = ({img, nameSkill}) => {
    return ( 
        <div className='SkillRect'>
            <img src={img} alt='skill-img'></img>
            <p>{nameSkill}</p>
        </div>
     );
}
 
export default SkillRect;