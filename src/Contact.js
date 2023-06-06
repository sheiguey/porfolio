import React from "react";
import classes from './Contact.module.css'

export default function Contact(){
    return(
        <section className={classes.contact}>
             <h1 className={classes.title}>Me Contacter</h1> 
             <div className={classes.card}>
                <form>
                    <div className={classes.formControl}>
                        <label  htmlFor="name" className="label">Nom*</label>
                        <input id="name" type="text" required /> 
                    </div>
                    <div className={classes.formControl}>
                        <label  htmlFor="firstName" type="text">Prenom*</label>
                        <input id="firstName" required/> 
                    </div>
                    <div className={classes.formControl}>
                        <label   htmlFor="email" type="email">Email*</label>
                        <input id="email" required /> 
                    </div>
                    
                    <div className={classes.formControl}>
                        <label  id="message"  htmlFor="message">Message*</label>
                        <textarea id="message"></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
             </div>
        </section>
       
    )
}