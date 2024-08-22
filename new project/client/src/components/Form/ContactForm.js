import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API, display a success message, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-form-popup">
      <div className="popup-header">
        <h2>Contact Us</h2>
        <button className="close-button" onClick={onClose}>
          &#x274C;
        </button>
      </div>
      <br />
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="input-box">
        <span>Full Name</span>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        
        </div>
        
        <div className="input-box">
        <span>Email</span>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
         
        </div>
        <div className="input-box">
        <span>Mobile Number</span>
          <input
            type="number"
            name="number"
            required
            value={formData.number}
            onChange={handleChange}
          />
         
        </div>
        
        <div className="input-box">
        <span>Type your Message...</span>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          
        </div>
        
        <div className="input-box">
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
