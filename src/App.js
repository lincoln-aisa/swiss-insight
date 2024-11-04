import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import AboutUs from './components/About/AboutUs';
import ContactUs from './components/Contact/ContactUs';
import Slider from './components/Slider/Slider';
import Header from './components/Header';
import QuestionInput from './components/QuestionInput/QuestionInput';
import TravelToSwitzerland from './components/travel-to-switzerland';
import WorkInSwitzerland from './components/work-in-switzerland';
import EducationInSwitzerland from './components/education-in-switzerland';
import LivingInSwitzerland from './components/living-in-switzerland';
import HealthcareAndSocialSystem from './components/healthcare-and-social-system';
import UsefulToolsAndResources from './components/useful-tools-and-resources';
import Footer from './components/Footer';
import Dialogue from './components/Dialogue';
import chatbot_icon from "./chatbot_icon.png"

function App() {

  const [showDialogue, setShowDialogue] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");

  const handleShowDialogue = (question) => {
    setUserQuestion(question);
    setShowDialogue(true);
    setMinimized(false);
  };

  const handleMinimize = () => {
    setMinimized(!minimized);
  };

  return (
    <Router>
      <main className= "App">
        <div className= "header-slider-questionInput">
          <Header />
          <Slider />
          <QuestionInput onSubmit={handleShowDialogue} />
          {showDialogue && !minimized && <Dialogue userQuestion={userQuestion} onMinimize={handleMinimize} />}
          {minimized && (
            <div className="chatbot-icon" onClick={() => setMinimized(false)}>
              <img src={chatbot_icon} alt="Chatbot Icon" />
            </div>
          )}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/travel-to-switzerland" element={<TravelToSwitzerland />} />
          <Route path="/components/work-in-switzerland" element={<WorkInSwitzerland />} />
          <Route path="/components/education-in-switzerland" element={<EducationInSwitzerland />} />
          <Route path="/components/living-in-switzerland" element={<LivingInSwitzerland />} />
          <Route path="/components/healthcare-and-social-system" element={<HealthcareAndSocialSystem />} />
          <Route path="/components/useful-tools-and-resources" element={<UsefulToolsAndResources />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;