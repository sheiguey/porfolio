import React from "react";
import classes from './About.module.css'

export default function About(){
    return(
        <section className={classes.about}>
           
         
                <div className={classes.img}></div>
                <div className={classes.description}>
                   <h1 className={classes.title}>A propos de moi</h1>
                   <p>
                   Salut comment vous allez ? j’espère pour le mieux ! Moi c’est Franky Shiti Camerounais âgé de 28 ans vivant à Douala. 
                   Passionné du monde digital, je me suis permis d’avoir un apprentissage intensif dans le monde du développement 
                   d’applications web me donnant ainsi des compétences dans ce domaine. <br/><br/>

                   Mes +3 ans d’expériences dans ce domaine m’ont montré que le monde du développement d’application est très vaste et que
                   l’important n’est pas seulement de coder ou bien de se limiter à l’apparence. Des notions comme la complexité du code, 
                   la performance et la sécurité sont des éléments très important dans le domaine de la création de logiciel.

                   De ce fait j’ai dédié cette année non seulement à me perfectionner dans les méthodes de développement 
                   et Framework mais aussi toucher ces différentes notions.<br/><br/>

                   Je m'engage à mettre en œuvre mes compétences et à démontrer ma passion pour le développement et 
                   l'ingénierie afin d'offrir à l'utilisateur une expérience exceptionnelle.
                   </p>
                </div>
        
          
        </section>
    )
}