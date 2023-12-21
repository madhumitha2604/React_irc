// About.js

import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Our Online Gift Shop</h1>
      <p>Welcome to our online gift shop! At [Your Shop Name], we strive to provide a wide range of thoughtfully curated gifts for every special occasion. Whether it's birthdays, anniversaries, or festive celebrations, we believe in making every moment memorable with our handpicked selection of unique and heartfelt gifts.</p>
      <p>Our team is passionate about helping you find the perfect gift that truly reflects your sentiments. With a focus on quality, creativity, and customer satisfaction, we aim to bring joy and smiles to both gift givers and receivers alike.</p>
      <p>Thank you for choosing [Your Shop Name] for your gifting needs. We look forward to being part of your cherished moments and celebrations!</p>

      {/* Social Media Links */}
      <div className="social-links">
        <img src="https://yt3.ggpht.com/a/AGF-l78UKMjzMY_5PjOE63fAbRCCkbFLq_sykeDdcw=s900-c-k-c0xffffffff-no-rj-mo"/>
        <a href="https://www.linkedin.com/in/madhu-mitha-732952255/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/__.madhuu_/?next=%2F" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        
        <a href="https://github.com/madhumitha2604/React_irc" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
