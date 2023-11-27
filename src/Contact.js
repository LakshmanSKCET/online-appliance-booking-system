// ContactUs.js

import React from 'react';
import './Contact.css';
import Footer from './Footer';
const ContactUs = () => {
  return (
    <>
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or feedback? We'd love to hear from you! Use the form
        below to get in touch.
      </p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer></Footer>
    </>
  );
};

export default ContactUs;
