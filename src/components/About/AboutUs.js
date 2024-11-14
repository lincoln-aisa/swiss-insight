// About.js

import React from 'react';
import './about.css';
import swissImage1 from './Swiss-landscape-grass-river.jpg'; 
import swissImage2 from './Swiss-city-view.jpg'; 

function AboutUs() {
  return (
    <main className="about-us">
      <section className="about-us-main">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Swiss Insight</strong>—your comprehensive guide to navigating life in Switzerland.
          We created this platform to provide accurate, up-to-date information for anyone interested in Swiss life, whether 
          you’re planning a visit, looking to work or study here, or simply curious about the Swiss way of life.
        </p>

        <aside className="aside-info">
          <h2>Why Swiss Insight?</h2>
          <p>
            At Swiss Insight, we believe in empowering people with knowledge. This website not only saves you time but also 
            gives you the confidence to make the most of your Swiss experience.
          </p>
        </aside>

        <img src={swissImage1} alt="Beautiful Swiss landscape" className="about-image" />

        <p>
          Our website covers six essential areas to help you make informed decisions about Switzerland:
          <ul>
            <li><strong>Travel to Switzerland</strong>: Discover insights into Swiss destinations, travel tips, and essential information for a smooth trip.</li>
            <li><strong>Working in Switzerland</strong>: Learn about the job market, work culture, and what it takes to establish a career here.</li>
            <li><strong>Education in Switzerland</strong>: Explore opportunities in Swiss education, from universities to vocational training.</li>
            <li><strong>Living in Switzerland</strong>: Practical advice on housing, daily life, and cultural nuances for comfortable settlement.</li>
            <li><strong>Healthcare and Social System</strong>: Understand Switzerland’s healthcare and social services to be prepared.</li>
            <li><strong>Useful Tools and Resources</strong>: Links, resources, and tools for navigating Swiss systems with ease.</li>
          </ul>
        </p>

        <img src={swissImage2} alt="Swiss city view" className="about-image" />

        <aside className="aside-chatbot">
          <h2>Ask Our Chatbot</h2>
          <p>
            Our interactive chatbot is ready to answer your specific questions. Just ask, and it will guide you to reliable 
            information, making Swiss Insight your go-to platform for all things Switzerland.
          </p>
        </aside>

        <p>
          Thank you for choosing Swiss Insight as your guide. We hope to be a helpful resource as you explore, work, or study in this unique country.
        </p>
      </section>
    </main>
  );
}

export default AboutUs;
