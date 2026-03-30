import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="contact-container">

      <h1>Contact Us</h1>

      {/* Contact Details */}
      <div className="contact-details">
        <p><b>📍 Address:</b> Ameerpet, Hyderabad</p>
        <p><b>📧 Email:</b> worldofflavour@gmail.com</p>
        <p><b>📞 Phone:</b> +91 9876543210</p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>

      </form>

    </div>
  );
}

export default Contact;