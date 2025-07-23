import React from 'react';
import './features.css';
import './home.css'

const Features = () => {
  return (
    <section className="ffeatures" id="ffeatures">
      <div className="container">
        <h2 className="h2 section-title">Why Choose NovaTech?</h2>
        <p className="section-text">
          NovaTech Innovative Solutions delivers scalable and smart technology—bridging the gap between industry, innovation, and education. Here's what makes us stand out:
        </p>

        <ul className="features-list">
          {[
            {
              image: 'https://img.freepik.com/free-vector/world-background-elements-with-internet_23-2147630122.jpg?semt=ais_hybrid&w=740',
              title: 'IoT-Driven Solutions',
              text: 'We design and implement smart IoT systems for agriculture, healthcare, home automation, and industrial applications.',
            },
            {
              image: 'https://highlet.in/images/course/Integration%20of%20AI%20and%20ML.jpg',
              title: 'AI + ML Integration',
              text: 'We build intelligent applications using AI and ML, including edge-based TinyML systems for real-time health monitoring and risk detection.',
            },
            {
              image: 'https://img.freepik.com/free-vector/cloud-robotics-abstract-concept-illustration_335657-3801.jpg?semt=ais_hybrid&w=740',
              title: 'Custom Robotics',
              text: 'Our robotics projects combine embedded systems, sensors, AI, and mechanical design for real-world interaction—perfect for education or research.',
            },
            {
              image: 'https://thumbs.dreamstime.com/b/app-development-isometric-web-banner-mobile-application-design-full-stack-programming-isometry-concept-software-d-scene-digital-203661264.jpg',
              title: 'Full-Stack Web & Mobile Apps',
              text: 'From admin dashboards to internship portals and e-commerce platforms, we create robust, user-friendly web and mobile solutions.',
            },
            {
              image: 'https://img.freepik.com/premium-vector/drone-with-remote-control-flying-nature-landscape-aerial-drone-with-camera-taking-photography-video-concept-illustration_88813-870.jpg?semt=ais_hybrid&w=740',
              title: 'UAV and LoRa Integration',
              text: 'We combine drones with LoRa mesh networks for post-disaster recovery, aerial mapping, and long-range communication.',
            },
            {
              image: 'https://img.freepik.com/free-vector/business-seminar-staff-training-development-consultation-coaching-mentoring-cartoon-characters-listening-report-successful-businesswoman_335657-299.jpg?semt=ais_hybrid&w=740',
              title: 'Training & Mentorship',
              text: 'Our support extends beyond products. We train students and professionals through workshops, internships, and mentorship programs.',
            }
          ].map((feature, index) => (
            <li className="features-item" key={index}>
              <figure className="features-item-banner">
                <img src={feature.image} alt={feature.title} />
              </figure>
              <div className="feature-item-content">
                <h3 className="h2 item-title">{feature.title}</h3>
                <p className="item-text">{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* CEO Message Section */}
        <div className="ceo-section">
          <h2 className="h2 section-title">Message from the Founder & CEO</h2>
          <div className="ceo-message">
            <img
              className="ceo-image"
              src="https://media.licdn.com/dms/image/v2/D5603AQGGZ-v9U2nylA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728062431795?e=2147483647&v=beta&t=8ThumINCZb8nZ_zUCkzyWH0elH5hdIrbsayRk-8sc5c"
              alt="Chandramouli Haldar"
            />
            <div className="ceo-text">
              <h3>Chandramouli Haldar</h3>
              <p>
                As the Founder and CEO of NovaTech Innovative Solutions, my vision is to merge creativity, technology, and education to build products that not only solve real-world problems but also empower the next generation of innovators.
              </p>
              <p>
                We’re here to bridge the gap between academia and industry with a deep focus on embedded systems, AI, robotics, and IoT. Every product and service we deliver comes from a place of passion, precision, and a commitment to innovation.
              </p>
              <p><strong>“Let’s build the future, one project at a time.”</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
