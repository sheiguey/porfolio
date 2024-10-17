import React from "react";

import classes from './About.module.css'


export default function About(){
    return(
        <section id="about" className={classes.about}>
                <div  className={`${classes.img} ${classes.animate__fadeInUp} ${classes.animate__animated}`}></div>
      
                <div className={`${classes.description} ${classes.animate__fadeInUp} ${classes.animate__animated}`}>
                    <div>
                      <h1 className={`${classes.title} ${classes.animate__fadeInUp} ${classes.animate__animated}`}>About me</h1>
                    </div>
                  <div>
                  <p className={`${classes.animate__fadeInUp} ${classes.animate__animated}`}>
                 Hi!!! I'm Franky Shiti, a 29-year-old Cameroonian living in Douala. 
                 Passionate about the digital world, I've allowed myself to have an intensive apprenticeship 
                 in the world of web application development, giving me skills in this field. 
                  <br/><br/>

                  My +6 years of experience in this field have shown me that the world of application development is very vast,  
                  and that it's not just about coding or appearance. 
                  Notions such as code complexity  performance and security are very important elements in software development.

                  As a result, I've spent the last few years not only perfecting my knowledge of development methods and frameworks, but also getting to grips with these different concepts.<br/><br/>

                  I'm committed to applying my skills and passion for development and engineering to deliver an exceptional user experience.
                   </p>
                  </div>
                 
                </div>
        
          
        </section>
    )
}