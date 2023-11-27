import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';
import './Home.css'; 

export default function Home() {
  // const carouselImages = [  
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2HZ5SgDz3VjztlFfoPZXA2KDZIh90mwZ-w&usqp=CAU',
  //   'https://static.tvtropes.org/pmwiki/pub/images/peter_griffin_5.png',
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnOCsulXPes4Hb0PVmn5-LToFSpqo2W9Iqw&usqp=CAU',
  // ];

  // const mainCarouselSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
        <div class="home1234">
    <div className="home-container">
       
        {/* <div className="main-carousel">
          <Slider {...mainCarouselSettings}>
            {carouselImages.map((imageUrl, index) => (
              <div key={index} className="carousel-image-container">
                <img src={imageUrl} alt={`Slide ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div> */}
        
        <div className="intro-container">
          <div className="intro-content">
            <h1 className="welcome-heading">Welcome to Our App</h1>
            <p className="experience-text">Experience the Best Features and Services.</p>
            
            <h2 className="about-heading">About Our Appliance Booking System</h2>
            <p className="system-description">
              Welcome to our online appliance booking system! We aim to provide a seamless and convenient way for you to book appliances for various purposes.
            </p>
            
            <div className="feature-section">
              <h2>Key Features:</h2>
              <ul>
                <li>Explore a wide range of appliances for booking.</li>
                <li>Simple and user-friendly interface for easy navigation.</li>
                <li>Secure online transactions for appliance reservations.</li>
                <li>Track the status of your bookings in real-time.</li>
                <li>Responsive customer support for any inquiries.</li>
              </ul>
            </div>
            
            <div className="how-it-works-section">
              <h2>How It Works:</h2>
              <ol>
                <li>Browse through our catalog of available appliances.</li>
                <li>Select the appliance you want to book and choose your preferred dates.</li>
                <li>Complete the booking process by providing necessary details.</li>
                <li>Receive confirmation and details of your booking via email.</li>
                <li>Enjoy the convenience of your reserved appliance on the scheduled dates.</li>
              </ol>
            </div>
            
            <p className="contact-text">
              We are committed to providing you with a hassle-free experience in booking appliances for your needs. If you have any questions or feedback, feel free to <a href="/contact" className="contact-link">contact us</a>.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
