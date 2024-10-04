import "./home.css"
import card_image_1 from './home-images/travel-to-swiss-icon1.webp';
import card_image_2 from './home-images/work-in-swiss-icon1.webp';
import card_image_3 from './home-images/school-in-swiss-icon1.webp';
import card_image_4 from './home-images/living-in-swiss2.webp';
import card_image_5 from './home-images/healthcare-in-swiss-icon2.webp';
import card_image_6 from './home-images/usefultools-in-swiss-icon2.webp';

function Home() {
  return (
    <div>

      <h1>Home Page</h1>

      <div className="card-section">
        
        <div className="card">
          <h2 className="level">Travel to Switzerland</h2>
          <div className="image-card">
            <img src={card_image_1} className="card_image" alt="card_image_1" />
          </div>         
        </div>

        <div className="card">
          <h2 className="level">Working in Switzerland</h2>
          <div className="image-card">
            <img src={card_image_2} className="card_image" alt="card_image_2" />
          </div>
        </div>

        <div className="card">
          <h2 className="level">Education in Switzerland</h2>
          <div className="image-card">
            <img src={card_image_3} className="card_image" alt="card_image_3" />
          </div>
        </div>

        <div className="card">
          <h2 className="level">Living in Switzerland</h2>
          <div className="image-card">
            <img src={card_image_4} className="card_image" alt="card_image_4" />
          </div>
        </div>

        <div className="card">
          <h2 className="level">Healthcare and Social System</h2>
          <div className="image-card">
            <img src={card_image_5} className="card_image" alt="card_image_5" />
          </div>
        </div>

        <div className="card">
          <h2 className="level">Useful tools and resources</h2>
          <div className="image-card">
            <img src={card_image_6} className="card_image" alt="card_image_6" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;