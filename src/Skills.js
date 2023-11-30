import React from "react";
import { skills } from "./services/SkillServices";
import classes from './Skills.module.css'

export default function Skills(){
    const content = skills.map(item=>{

        return (
            <div key={item.id} className={`${classes.wrapper} ${classes.animate__fadeInUp} ${classes.animate__animated}`}>
                <img alt={item.title} src={item.icon} />
                <p>{item.title}</p> 
             </div>
        ) 
    })
    return (
        <section id="skills" className={`${classes.container}`}>
             <h1 className={`${classes.title} ${classes.animate__fadeInUp} ${classes.animate__animated}`}>TECHNOLOGIES AND TOOLS</h1> 
             <div className={classes.content}>
                {
                    content
                }
             </div>
            
        </section>
    )
}