import React, {useState,useRef} from "react";
import Swal from "sweetalert2";
import  emailjs from "emailjs-com";
import classes from './Contact.module.css'
import Preload from "./preloader";

export default function Contact(){
   
    const [preloader ,setPreloader]= useState(false)
    const form = useRef()

    const sendEmail = (e) => {
        setPreloader(prev=>!prev)
        e.preventDefault();
        emailjs.sendForm('service_os3n2jh', 'template_tgf298c', form.current, 'gIj11iB_0ZqIwM9j1')
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                icon: 'success',
                title: 'Message Envoye avec Success'
              })
          }, (error) => {
              console.log(error.text);
              Swal.fire({
                icon: 'error',
                title: 'Ooops,une erreur c est produite',
                text: error.text,
              })
          });
          setPreloader(prev=>!prev)
          form.current.reset();
      };

    return(
        <section id="contact" className={classes.contact}>
             <h1 className={`${classes.title} ${classes.animate__fadeInUp} ${classes.animate__animated}`}>Me Contacter</h1> 
             <div className={`${classes.card} ${classes.animate__fadeInUp} ${classes.animate__animated}`}>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={classes.formControl}>
                        <label  htmlFor="name" className="label">Nom*</label>
                        <input id="name" type="text" name="name" required /> 
                    </div>
                    <div className={classes.formControl}>
                        <label  htmlFor="firstName" type="text">Prenom*</label>
                        <input id="firstName" type="text" name="firstname" required/> 
                    </div>
                    <div className={classes.formControl}>
                        <label   htmlFor="email" type="email">Email*</label>
                        <input id="email" type="email" name="email"  required /> 
                    </div>
                    
                    <div className={classes.formControl}>
                        <label  id="message"  htmlFor="message">Message*</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <button className={classes.button} type="submit">
                    Envoyer
                        {
                        preloader===true &&
                        <Preload/>
                        }
                    </button>
                    
                </form>
             </div>
        </section>
       
    )
}