import React from "react";
import classes from './Header.module.css'


export default function Header(){
    return (
        <header className={classes.header}>
            <div className={classes.intro}>
                <div className={classes.description}>
                    <p>Salut moi c'est</p>
                    <h1 className={classes.title}> Franky Shiti</h1>
                    <h2>Developpeur Frontend </h2>
                    <a alt="mon cv" href="" className={classes.button}>Mon CV</a>
                </div>
                <div className={classes.profil}></div>
            </div>
           
        </header>
    )
}