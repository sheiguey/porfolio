import React from "react";
import { skills } from "./services/SkillServices";
import classes from './Skills.module.css'

export default function Skills(){
    const content = skills.map(item=>{

        return (
            <div key={item.id} className={classes.wrapper}>
                <img alt={item.title} src={item.icon} />
                <p>{item.title}</p> 
             </div>
        ) 
    })
    return (
        <div className={classes.container}>
             <h1 className={classes.title}>Technologies et Outils</h1> 
             <div className={classes.content}>
                {
                    content
                }
             </div>
            
        </div>
    )
}