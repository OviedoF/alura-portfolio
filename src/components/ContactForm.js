import React from "react";
import "./ContactForm.scss";
import contact from "../img/contact/contact.png";
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validationForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,50}$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexSubject = /^.{1,50}$/;
  let regexMessage = /^.{1,300}$/;

  if (!form.name.trim()) {
    errors.name = `El campo "nombre" es requerido.`;
    document.querySelector(".form_inputName").classList.remove("valid");
    document.querySelector(".form_inputName").classList.add("invalid");
  } else if (!regexName.test(form.name.trim())) {
    errors.name = `El campo "nombre" debe contener sólo letras y tener un máximo de 50 carácteres.`;
    document.querySelector(".form_inputName").classList.remove("valid");
    document.querySelector(".form_inputName").classList.add("invalid");
  } else {
    document.querySelector(".form_inputName").classList.remove("invalid");
    document.querySelector(".form_inputName").classList.add("valid");
  }

  if (!form.email.trim()) {
    errors.email = `El campo "email" es requerido.`;
    document.querySelector(".form_inputEmail").classList.remove("valid");
    document.querySelector(".form_inputEmail").classList.add("invalid");
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = `El campo "email" debe contener un e-mail válido.`;
    document.querySelector(".form_inputEmail").classList.remove("valid");
    document.querySelector(".form_inputEmail").classList.add("invalid");
  } else {
    document.querySelector(".form_inputEmail").classList.remove("invalid");
    document.querySelector(".form_inputEmail").classList.add("valid");
  }

  if (!form.subject.trim()) {
    errors.subject = `El campo "asunto" es requerido.`;
    document.querySelector(".form_inputSubject").classList.remove("valid");
    document.querySelector(".form_inputSubject").classList.add("invalid");
  } else if (!regexSubject.test(form.subject.trim())) {
    errors.subject = `El campo "asunto" tener un máximo de 50 carácteres.`;
    document.querySelector(".form_inputSubject").classList.remove("valid");
    document.querySelector(".form_inputSubject").classList.add("invalid");
  } else {
    document.querySelector(".form_inputSubject").classList.remove("invalid");
    document.querySelector(".form_inputSubject").classList.add("valid");
  }

  if (!form.message.trim()) {
    errors.message = `El campo "mensaje" es requerido.`;
    document.querySelector(".form_inputMessage").classList.remove("valid");
    document.querySelector(".form_inputMessage").classList.add("invalid");
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = `El campo "message" debe contener sólo letras y tener un máximo de 50 carácteres.`;
    document.querySelector(".form_inputMessage").classList.remove("valid");
    document.querySelector(".form_inputMessage").classList.add("invalid");
  } else {
    document.querySelector(".form_inputMessage").classList.remove("invalid");
    document.querySelector(".form_inputMessage").classList.add("valid");
  }

  return errors;
};

const ContactForm = () => {
  const { form, errors, handleChange, handleBlur} = useForm(
    initialForm,
    validationForm
  );

  return (
    <div className="Contact-Form">
      <div className="contact-container">
        <img src={contact} alt="Contact-img"></img>
        <form
          action="https://formsubmit.co/oviedofederico039@gmail.com"
          method="POST"
          id="contactForm"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://oviedof.github.io/alura-portfolio/"
          ></input>

          <h2>Contacto</h2>
          <p>¿Quieres contactarme?</p>
          <p>
            Complete el siguiente formulario y me pondré en contacto con usted
            lo antes posible.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="form_inputName form_input"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          />
          {errors.name && <p className="errorText">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            className="form_inputEmail form_input"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
          {errors.email && <p className="errorText">{errors.email}</p>}

          <input
            type="text"
            name="subject"
            placeholder="Asunto"
            className="form_inputSubject form_input"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.subject}
            required
          />
          {errors.subject && <p className="errorText">{errors.subject}</p>}

          <textarea
            name="message"
            placeholder="Mensaje"
            id="message"
            className="form_inputMessage form_input"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.message}
            required
          />
          {errors.message && <p className="errorText">{errors.message}</p>}

          {Object.keys(errors).length !== 0 
          ?
          <button id="submitFormButtonInvalid" >
          Enviar mensaje
          </button>
          :
          <button type="submit">
          Enviar mensaje
          </button>
          }

        </form>
      </div>
    </div>
  );
};

export default ContactForm;
