import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="h2 section-title">What We Do</h2>
        <p className="section-text">
          At <strong>NovaTech Innovative Solutions</strong>, we build powerful, practical, and affordable tech solutions across software, embedded systems, IoT, and AI — helping students, startups, and professionals turn ideas into reality.
        </p>
<br />
        <div className="about-list">
          {[
            {
              title: 'Smart T-Shirt with IoT',
              icon: 'shirt-outline',
              desc: 'Wearable tech for health monitoring with GPS, SpO2, temperature sensors, and an SOS system.',
            },
            {
              title: 'University Management System',
              icon: 'school-outline',
              desc: 'Java-based software to manage students, results, attendance, and course data for institutions.',
            },
            {
              title: 'Restaurant Management (MERN)',
              icon: 'fast-food-outline',
              desc: 'Modern full-stack web app for order processing, menu updates, and billing.',
            },
            {
              title: 'AI Voice Robot',
              icon: 'mic-outline',
              desc: 'Interactive robot with speech, facial recognition, handshake, and mobile control.',
            },
            {
              title: 'LoRa Disaster UAV System',
              icon: 'airplane-outline',
              desc: 'Emergency UAV system using LoRa mesh for real-time data relay in disaster zones.',
            },
            {
              title: 'Smart Agriculture Kit',
              icon: 'leaf-outline',
              desc: 'IoT-based farming solution with automated irrigation and sensor analytics.',
            },
            {
              title: 'Internship Training Portal',
              icon: 'people-outline',
              desc: 'Web app to manage internships, mentor assignments, and progress tracking.',
            },
            {
              title: 'Embedded Hardware Projects',
              icon: 'hardware-chip-outline',
              desc: 'Custom microcontroller projects: robotics, automation, sensors, solar, etc.',
            },
            {
              title: 'TinyML Medical Alert System',
              icon: 'pulse-outline',
              desc: 'Edge AI-enabled health monitoring with emergency alerts and anomaly detection.',
            },
            
          ].map((product, index) => (
            <div className="about-card" key={index}>
              <div className="card-icon">
                <ion-icon name={product.icon}></ion-icon>
              </div>
              <h3 className="h3 card-title">{product.title}</h3>
              <p className="card-text">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
