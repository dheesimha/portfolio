import React from "react";
import "./Contact.css";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-page-title">Let's talk !</h1>
      <div className="contact-flex">
        <ContactCard
          title="Email"
          source="/mail.png"
          altTag="Email"
          text="dheemanth.simha01@gmail.com"
          link="mailto:dheemanth.simha01@gmail.com"
        />
        <ContactCard
          title="Phone"
          source="/phone.png"
          altTag="Phone"
          text="+91 7019817873"
          link="tel:+91 7019817873"
        />
        <ContactCard
          title="Linkedin"
          source="/linkedin.png"
          altTag="Linkedin"
          text="Find me on LinkedIn"
          link="https://www.linkedin.com/in/dheemanth-narasimha/"
        />
      </div>
    </div>
  );
}

export default Contact;
