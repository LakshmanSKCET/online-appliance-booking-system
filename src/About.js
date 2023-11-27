import React from 'react';
import './About.css';
import Footer from './Footer';
const About = () => {
  return (
    <>
    <div>
      <header>
        <h1>About Us</h1>
      </header>

      <section id="who-we-are">
        <h2>who We Are</h2>
        <p>
          At Your Company Name, we understand the hassle and inconvenience that
          comes with a malfunctioning appliance. That's why we've dedicated
          ourselves to providing a seamless and efficient online platform for
          booking appliance services. With years of experience in the industry,
          we've built a reputation for reliability, transparency, and customer
          satisfaction.
        </p>
      </section>

      <section id="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to make appliance repair and maintenance as
          easy as possible for our customers. We believe that technology can
          play a crucial role in streamlining the process, saving you time and
          effort. By offering an intuitive online booking system, we aim to
          transform the way you manage your appliance service needs.
        </p>
      </section>

      <section id="what-sets-us-apart">
        <h2>What Sets Us Apart</h2>
        <ul>
          <li>
            <strong>Expert Technicians:</strong> Our team comprises skilled and
            certified technicians.
          </li>
          <li>
            <strong>Convenient Booking:</strong> Our online platform is
            user-friendly and accessible, allowing 24/7 booking.
          </li>
          <li>
            <strong>Transparent Pricing:</strong> No hidden fees. You'll know
            the cost upfront before confirming your booking.
          </li>
          <li>
            <strong>Timely Service:</strong> We value your time and aim to
            provide efficient services.
          </li>
          <li>
            <strong>Customer Satisfaction:</strong> Your satisfaction is our
            priority. We're committed to delivering exceptional service.
          </li>
        </ul>
      </section>

      <section id="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>
            <strong>Book Online:</strong> Select the type of appliance service
            you need and book it online.
          </li>
          <li>
            <strong>Confirmation:</strong> Receive instant confirmation and
            details of your booking via email or SMS.
          </li>
          <li>
            <strong>Service Day:</strong> Our technician will arrive on the
            scheduled day, ready to address your appliance issues.
          </li>
          <li>
            <strong>Quality Service:</strong> Enjoy professional and reliable
            service, backed by our commitment to excellence.
          </li>
        </ol>
      </section>

      <section id="contact-us">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Our friendly customer support team
          is here to help. <a href="#contact">Contact us</a> today, and let us
          take care of your appliance service needs!
        </p>
      </section>

    </div>
      <Footer>

      </Footer>
      </>   
 );
};

export default About;
