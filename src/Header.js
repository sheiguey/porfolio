import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import classes from './Header.module.css';
import './animation.css';

export default function Header() {
  return (
    <header id="home" className={classes.header}>
      <div className={classes.intro}>
        <div className={`${classes.description}  fadeInUp  animate__animated`}>
          <p>Hi, I'm</p>
          <h1 className={classes.title}> Franky Shiti</h1>
          <h2>
            <TypewriterComponent
              options={{
                strings: [
                  'Frontend Developer!',
                  'Software Developer!',
                  'FullStack Developer!',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <a
            href="https://api.whatsapp.com/send?phone=655604155"
            rel="noreferrer"
            target="_blank"
            className={classes.button}
          >
            Hire Me
          </a>
          <a
            alt="my Resume"
            href="/assets/resume-FrankyShiti.pdf"
            target="_blank"
            className={classes.button}
          >
            My resume
          </a>
        </div>
        <div
          className={`${classes.profil}  fadeInUp  animate__animated `}
        ></div>
      </div>
    </header>
  );
}
