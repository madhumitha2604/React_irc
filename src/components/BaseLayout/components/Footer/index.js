//Dependencies
import React from 'react';
//Internals
import './index.css';



const About = () => {
  return (
    <div className="about-page">
      <h2>About Our Online Gift Shop</h2>
      <h5>Welcome to our online gift shop! At GiftsCart, we strive to provide a wide range of thoughtfully curated gifts for every special occasion. Whether it's birthdays, anniversaries, or festive celebrations, we believe in making every moment memorable with our handpicked selection of unique and heartfelt gifts.</h5>
      <h5>Our team is passionate about helping you find the perfect gift that truly reflects your sentiments. With a focus on quality, creativity, and customer satisfaction, we aim to bring joy and smiles to both gift givers and receivers alike.</h5>
      <h5>Thank you for choosing GiftsCart for your gifting needs. We look forward to being part of your cherished moments and celebrations!</h5>
      <hr/>
      <hr/>
      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
          <center><img src="https://th.bing.com/th?id=OIP.YO7Fxc7mQc7rx-7pDzclCQHaHa&w=250&h=250&c=8&rs=1&qlt=30&o=6&dpr=1.3&pid=3.1&rm=2"></img></center>
        </a>
        <br/>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <center><img src="https://th.bing.com/th/id/OIP.br-fAQelnHaixRDjj3VBLQHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img></center>
        </a>
        <br/>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <center><img src="https://th.bing.com/th/id/OIP.8SVgggxQcO5L6Dw_61ac4QHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img></center>
        </a>
      </div>
    </div>
  );
};

export default About;

