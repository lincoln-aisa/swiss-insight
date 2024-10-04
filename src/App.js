import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Slider from './components/Slider/Slider';
import Header from './components/Header';
import QuestionInput from './components/QuestionInput/QuestionInput';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className= "header-slider-questionInput">
          <Header />
          <Slider />
          <QuestionInput />
        </div>

        {/* These <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;