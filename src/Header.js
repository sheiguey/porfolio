import React from "react";
import classes from './Header.module.css'
import  './animation.css'

export default function Header(){
    return (
        <header id="home" className={classes.header}>
            <div className={classes.intro}>
                <div   className={`${classes.description}  fadeInUp  animate__animated`}>
                    <p>Salut moi c'est</p>
                    <h1 className={classes.title}> Franky Shiti</h1>
                    <h2>Developpeur Frontend </h2>
                    <a alt="mon cv" href="/assets/resume-FrankyShiti.pdf" target="_blank" className={classes.button}>Mon CV</a>
                </div>
                <div  className={`${classes.profil}  fadeInUp  animate__animated `}></div>
            </div>
           
        </header>
    )
}