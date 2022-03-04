import React from "react";
import "./ContactCard.css";
function ContactCard(props) {
  return (
    <div className="contact_card">
      <p class="title">{props.title}</p>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.source} alt={props.altTag} />
      </a>
      <p class="content-text">{props.text}</p>
    </div>
  );
}

export default ContactCard;
