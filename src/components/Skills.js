import React from "react";
import SkillRect from "./SkillRect";
import "./Skills.scss";

/* IMPORT SKILLS */
import HTML5 from "../img/HTML5.png";
import CSS from "../img/CSS.png";
import JAVASCRIPT from "../img/JavaScript.png";
import REACT from "../img/react.png";
import MYSQL from "../img/MYSQL.png";
import MONGODB from "../img/MONGODB.png";
import GIT from "../img/git.png";

/* IMPORT HOBBIES */
import PROGRAMAR from "../img/PROGRAMAR.png";
import AURICULARES from "../img/AURICULARES.png";
import COCINAR from "../img/COCINAR.png";
import TELEVISION from "../img/TELEVISION.png";
import VIDEOJUEGOS from "../img/VIDEOJUEGOS.png";
import ANIMALITOS from "../img/ANIMALITOS.png";
import PASEAR from "../img/PASEAR.png";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-rect">
        <SkillRect nameSkill={"HTML5"} img={HTML5} />
        <SkillRect nameSkill={"CSS3"} img={CSS} />
        <SkillRect nameSkill={"JAVASCRIPT"} img={JAVASCRIPT} />
        <SkillRect nameSkill={"GIT"} img={GIT} />
        <SkillRect nameSkill={"REACT"} img={REACT} />
        <SkillRect nameSkill={"MYSQL"} img={MYSQL} />
        <SkillRect nameSkill={"MONGODB"} img={MONGODB} />
      </div>

      <h2 id="hobbies">Hobbies</h2>

      <div className="skills-rect">
        <SkillRect nameSkill={"VIDEOJUEGOS"} img={VIDEOJUEGOS} />
        <SkillRect nameSkill={"COCINAR"} img={COCINAR} />
        <SkillRect nameSkill={"PROGRAMAR ;)"} img={PROGRAMAR} />
        <SkillRect nameSkill={"ESCUCHAR MÚSICA"} img={AURICULARES} />
        <SkillRect nameSkill={"VER SERIES"} img={TELEVISION} />
        <SkillRect nameSkill={"ANIMALITOS"} img={ANIMALITOS} />
        <SkillRect nameSkill={"PASEAR"} img={PASEAR} />
      </div>
    </div>
  );
};
export default Skills;
