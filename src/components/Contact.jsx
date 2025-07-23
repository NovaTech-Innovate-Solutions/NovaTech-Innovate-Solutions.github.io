import React from 'react';
import '../styles/style.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="h2 contact-title">Let’s Build Something Great Together</h2>
          <p className="section-text">
            Have a project in mind or just want to say hello? We’re excited to hear from you! Fill out the form below or reach us through the contact details.
          </p>
        </div>

        <form className="contact-form">
          <div className="input-wrapper">
            <label htmlFor="name" className="input-label">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your full name" className="input-field" required />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email" className="input-label">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your email address" className="input-field" required />
          </div>

          <div className="input-wrapper">
            <label htmlFor="subject" className="input-label">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject of your message" className="input-field" required />
          </div>

          <div className="input-wrapper">
            <label htmlFor="message" className="input-label">Message</label>
            <textarea id="message" name="message" placeholder="Write your message..." className="input-field" rows="6" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

        {/* Optional contact info section */}
     
      </div>
    </section>
  );
};

export default Contact;
