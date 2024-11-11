import "./home.css"
import card_image_1 from './home-images/travel-to-swiss-icon1.webp';
import card_image_2 from './home-images/work-in-swiss-icon1.webp';
import card_image_3 from './home-images/school-in-swiss-icon1.webp';
import card_image_4 from './home-images/living-in-swiss2.webp';
import card_image_5 from './home-images/healthcare-in-swiss-icon2.webp';
import card_image_6 from './home-images/usefultools-in-swiss-icon2.webp';
import { Link } from "react-router-dom";
import React from "react";


function Home() {
  return (
    <main>

      <section className="intro-section">
        <h1>Welcome to Swiss Insight</h1>
        <p>Your Guide to Switzerland</p>
      </section>

      <section className="card-section">
        
        <Link to= "/components/travel-to-switzerland" className="card" >
          <article >
            <h2 className="level">Travel to Switzerland</h2>
            <div className="image-card">
              <img src={card_image_1} className="card_image" alt="card_image_1" />
            </div>         
          </article>
        </Link>

        <Link to= "/components/work-in-switzerland" className="card">
          <article >
            <h2 className="level">Working in Switzerland</h2>
            <div className="image-card">
              <img src={card_image_2} className="card_image" alt="card_image_2" />
            </div>
          </article>
        </Link>

        <Link to= "/components/education-in-switzerland" className="card">
          <article className="card">
            <h2 className="level">Education in Switzerland</h2>
            <div className="image-card">
              <img src={card_image_3} className="card_image" alt="card_image_3" />
            </div>
          </article>
        </Link>

        <Link to= "/components/living-in-switzerland" className="card">
          <article className="card">
            <h2 className="level">Living in Switzerland</h2>
            <div className="image-card">
              <img src={card_image_4} className="card_image" alt="card_image_4" />
            </div>
          </article>
        </Link>

        <Link to= "/components/healthcare-and-social-system" className="card">
          <article className="card">
            <h2 className="level">Healthcare and Social System</h2>
            <div className="image-card">
              <img src={card_image_5} className="card_image" alt="card_image_5" />
            </div>
          </article>
        </Link>

        <Link to= "/components/useful-tools-and-resources" className="card">
          <article className="card">
            <h2 className="level">Useful tools and resources</h2>
            <div className="image-card">
              <img src={card_image_6} className="card_image" alt="card_image_6" />
            </div>
          </article>
        </Link>
      </section>
    </main>
  );
}
export default Home;