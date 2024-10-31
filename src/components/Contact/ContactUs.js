// Contact.js

/*
function Contact() {
  return <h1>Contact Page</h1>;
}

export default Contact;
*/

import React, { useState } from 'react';
import './contact.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here, you could add additional form submission logic, such as sending data to an API.
  };

  return (
    <main className="contact-us">
      <h1>Contact Us</h1>
      <p>We're here to help! Please fill out the form below, and we'll get back to you as soon as possible.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />

        <label htmlFor="telephone">Telephone</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
          placeholder="Enter your telephone number"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Enter your message"
        />

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </main>
  );
}

export default ContactUs;
