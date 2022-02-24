import React from 'react';
import './ContactForm.scss';
import contact from '../img/contact/contact.png';

const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <div className='Contact-Form'>
            <div className='contact-container'>
                <img src={contact}></img>
                <form>
                    <h2>Contacto</h2>
                    <p>¿Quieres contactarme?</p>
                    <p>Complete el siguiente formulario y me pondré en contacto con usted lo antes posible.</p>

                    <input type='text' name='nombre' placeholder='Nombre'></input>
                    <input type='email' name='email' placeholder='E-Mail'></input>
                    <input type='text' name='asunto' placeholder='Asunto'></input>
                    <input type='text' name='mensaje' placeholder='Mensaje' id='message'></input>

                    <button onClick={(e) => handleSubmit(e)}>Enviar mensaje</button>
                </form>
            </div>
        </div>
    );
}
 
export default ContactForm;