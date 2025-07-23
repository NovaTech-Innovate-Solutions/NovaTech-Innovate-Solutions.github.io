import React from 'react';
import './home.css'
const Home = () => {
  return (
    <div id="top">
      <main>
        <article>
          {/* HERO SECTION */}
          <section className="hero" id="home">
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 hero-title">Empowering Innovation with Tech Solutions</h1>
                <p className="hero-text">
                  NovaTech Innovative Solutions delivers end-to-end hardware and software systems—designed, developed, and deployed with passion.
                </p>
                <a href="/about"><button className="btn btn-primary">Explore Projects</button></a>
              </div>
              <div className="hero-banner"></div>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section className="about" id="about">
            <div className="container">
              <div className="about-top">
                <h2 className="h2 section-title">What We Offer</h2>
                <p className="section-text">
                  From academic prototypes to industrial deployments, NovaTech is your partner in innovation across Embedded Systems, IoT, AI, and full-stack software.
                </p>
                <ul className="about-list">
                  <li>
                    <div className="about-card">
                      <div className="card-icon"><ion-icon name="hardware-chip-outline"></ion-icon></div>
                      <h3 className="h3 card-title">Embedded & IoT Systems</h3>
                      <p className="card-text">Custom-built microcontroller-based systems for real-world automation and monitoring.</p>
                    </div>
                  </li>
                  <li>
                    <div className="about-card">
                      <div className="card-icon"><ion-icon name="code-slash-outline"></ion-icon></div>
                      <h3 className="h3 card-title">Software Development</h3>
                      <p className="card-text">From MERN stack web apps to Java-based desktop systems, we bring software to life.</p>
                    </div>
                  </li>
                  <li>
                    <div className="about-card">
                      <div className="card-icon"><ion-icon name="sparkles-outline"></ion-icon></div>
                      <h3 className="h3 card-title">AI & Automation Projects</h3>
                      <p className="card-text">Integrating Machine Learning, TinyML, and automation into modern problem-solving solutions.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="about-bottom">
                <figure className="about-bottom-banner">
                  <img src="https://i.postimg.cc/nzjhFvtq/about-banner.png" alt="about banner" className="about-banner" />
                </figure>
                <div className="about-bottom-content">
                  <h2 className="h2 section-title">Driven by Innovation, Built with Passion</h2>
                  <p className="section-text">We don't just deliver projects—we build futuristic solutions tailored to your unique needs.</p>
                  <a href="/contact"><button className="btn btn-secondary">Get in Touch</button></a>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES SECTION */}
          <section className="features" id="features">
            <div className="container">
              <h2 className="h2 section-title">What Makes NovaTech Different?</h2>
              <p className="section-text">
                A passionate team of engineers, developers, and innovators from diverse backgrounds—dedicated to bringing your tech ideas to life.
              </p>
              <ul className="features-list" >
                <li className="features-item"id="hfeatures" >
                  <figure className="features-item-banner">
                    <img src="https://i.postimg.cc/yYjd16Z6/feature-1.png" alt="feature banner" />
                  </figure>
                  <div className="feature-item-content">
                    <h3 className="h2 item-title">Project-Based Approach</h3>
                    <p className="item-text">Whether it's a final-year project or a full commercial product, we tailor our process to meet your goal.</p>
                  </div>
                </li>
                <li className="features-item" id="hfeatures">
                  <figure className="features-item-banner">
                    <img src="https://i.postimg.cc/4N21KGCZ/feature-2.png" alt="feature banner" />
                  </figure>
                  <div className="feature-item-content">
                    <h3 className="h2 item-title">Transparent & Affordable</h3>
                    <p className="item-text">lear pricing, honest communication, and results-driven execution—no hidden charges, ever.</p>
                  </div>
                </li>
            <li className="features-item" style={{ display: "none" }}>
                  <figure className="features-item-banner">
                    <img src="https://i.postimg.cc/4N21KGCZ/feature-2.png" alt="feature banner" />
                  </figure>
                  <div className="feature-item-content">
                    <h3 className="h2 item-title">Transparent & Affordable</h3>
                    <p className="item-text">lear pricing, honest communication, and results-driven execution—no hidden charges, ever.</p>
                  </div>
                </li>
                
              </ul>
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="cta" id="intouch">
            <div className="container">
              <div className="cta-card">
                <h3 className="cta-title">Let’s Work Together</h3>
                <form className="cta-form">
                  <input type="email" name="email" placeholder="Your email address" />
                  <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section className="contact" id="contact">
            <div className="container">
              <div className="contact-content">
                <h2 className="h2 contact-title">Start Building with NovaTech</h2>
                <figure className="contact-banner">
                  <img src="https://i.postimg.cc/4dmYSY4F/contact.png" alt="contact banner" />
                </figure>
              </div>
              <form className="contact-form">
                <div className="input-wrapper">
                  <label htmlFor="name" className="input-label">Name</label>
                  <input type="text" name="name" id="name" required placeholder="Type Name" className="input-field" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="phone" className="input-label">Phone</label>
                  <input type="tel" name="phone" id="phone" required placeholder="Type Phone Number" className="input-field" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="email" className="input-label">Email Address</label>
                  <input type="email" name="email" id="email" required placeholder="Type Email Address" className="input-field" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="message" className="input-label">How can we help?</label>
                  <textarea name="message" id="message" placeholder="Type Description" className="input-field" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </section>
        </article>
      </main>

      {/* FOOTER */}

    </div>
  );
};

export default Home;
