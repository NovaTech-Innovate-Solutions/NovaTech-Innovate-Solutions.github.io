import React from 'react';
import "./Carrer.css"
const Career = () => {
  return (
    <section className="career" id="career">
      <div className="container">

        {/* Hero */}
        <div className="career-hero">
          <h2 className="h2 section-title">Join NovaTech Innovative Solutions</h2>
          <br /><br />
          <p className="section-text">
            At NovaTech, we’re on a mission to build tech that empowers innovation. We love creators, problem-solvers, and forward-thinkers. If that’s you, we’d love to have you!
          </p>
        </div>

        {/* Perks & Benefits */}
        <div className="career-perks">
          <h3 className="h3">Why Work With Us?</h3>
          <ul className="career-perk-list">
            <li>
              <ion-icon name="briefcase-outline"></ion-icon>
              <h4 className="h4">Flexible Work</h4>
              <p>Work remotely or in our collaborative spaces — whatever suits your productivity.</p>
            </li>
            <li>
              <ion-icon name="bulb-outline"></ion-icon>
              <h4 className="h4">Real Innovation</h4>
              <p>From AI to IoT and robotics, we build future-ready solutions that matter.</p>
            </li>
            <li>
              <ion-icon name="rocket-outline"></ion-icon>
              <h4 className="h4">Career Growth</h4>
              <p>We believe in mentoring, upskilling, and growing our team into leaders.</p>
            </li>
            <li>
              <ion-icon name="ribbon-outline"></ion-icon>
              <h4 className="h4">Recognition & Rewards</h4>
              <p>Your work is appreciated. Get recognized with monthly and yearly awards.</p>
            </li>
          </ul>
        </div>

        {/* Job Openings */}
        <div className="career-openings">
          <h3 className="h3">Current Openings</h3>
          <ul className="job-list">
            {[
              {
                title: "Frontend Developer (React.js)",
                type: "Full-time · Remote",
                desc: "Looking for a frontend wizard with a solid grasp of React, Tailwind, and UI/UX design principles.",
              },
              {
                title: "Embedded Systems Engineer",
                type: "Internship · Onsite",
                desc: "Experience with Arduino, ESP32, sensors, PCB design. Good understanding of C/C++ is a plus.",
              },
              {
                title: "AI/ML Intern (TinyML focus)",
                type: "Internship · Remote/Hybrid",
                desc: "Build real-time machine learning models with edge devices and microcontrollers.",
              },
              {
                title: "Full Stack Developer (MERN)",
                type: "Part-time · Remote",
                desc: "Responsible for building scalable web apps, REST APIs, and database design.",
              }
            ].map((job, idx) => (
              <li className="job-card" key={idx}>
                <h4 className="h4">{job.title}</h4>
                <p className="job-type">{job.type}</p>
                <p className="job-desc">{job.desc}</p>
                <button className="btn btn-secondary">Apply Now</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Application Form */}
        <div className="career-form-section">
          <h3 className="h3">Didn't see a role that fits?</h3>
          <p className="section-text">We're always looking for passionate people. Drop your details below and we'll get in touch.</p>
          <form className="career-form">
            <div className="input-wrapper">
              <label className="input-label" htmlFor="name">Name</label>
              <input className="input-field" type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="input-wrapper">
              <label className="input-label" htmlFor="email">Email</label>
              <input className="input-field" type="email" id="email" name="email" required placeholder="Your email" />
            </div>
            <div className="input-wrapper">
              <label className="input-label" htmlFor="position">Position Interested In</label>
              <input className="input-field" type="text" id="position" name="position" placeholder="e.g., IoT Engineer" />
            </div>
            <div className="input-wrapper">
              <label className="input-label" htmlFor="message">Tell us about yourself</label>
              <textarea className="input-field" id="message" name="message" rows="4" required placeholder="Why do you want to work with us?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit Application</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Career;
