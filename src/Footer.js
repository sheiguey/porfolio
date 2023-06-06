import React from "react";
import classes from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={classes.footer}>
            <div className={classes.social}>
              <a href="https://www.linkedin.com/in/franky-shiti-b81322151/">
                <img alt="linkedin-icon" src="/assets/icons/smal-linkedin-logo.png"/>
              </a>
              <a href="https://github.com/sheiguey">
                <img alt="github-icon" src="/assets/icons/smal-github.png"/>
              </a>
              <a href="mailto:frankyshiti737@gmail.com">
                <img alt="mail-icon" src="/assets/icons/smal-mail.png"/>
              </a>
            </div>
            <p>Designed and coded with love  © 2023, <span>Franky Shiti</span> </p>
        </footer>
    )
}