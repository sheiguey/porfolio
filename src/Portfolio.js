import React from "react";
import classes from "./Portfolio.module.css";
import { Projects } from "./services/ProjectServices";
import { nanoid } from "nanoid";


export default function Portfolio(){
    const content =(
       Projects.map(item=>{
        return (
            <div key={item.id} className={`${classes.card} ${classes.animate__fadeInUp} ${classes.animate__animated}`}>
            <img alt={item.title} src={item.img}/>
            <h3>{item.title}</h3> 
            <p className={classes.description}>{item.descrition}</p>
            <div className={classes.tags}>
                {
                    item.tags.map(tag=>{
                        return (
                            <span key={nanoid()}>
                                {tag}
                            </span>
                        )
                    })
                }
            </div>
            <hr/>
            <div className={classes.action}>
              <a href={item.code}>Code</a>
              <a href={item.demo}>Demo</a>
            </div>
          </div>
        )
       }
       )
        )


    return (
       
        <div id="project">
             <div className={classes.container}>
             <h1 className={classes.title}>Quelques projets</h1> 
             <div className={classes.content}>
                 {content}
             </div>
            
        </div>
        </div>
    )
}