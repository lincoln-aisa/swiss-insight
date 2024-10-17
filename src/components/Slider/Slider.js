
import "./slider.css";
import React, { useState, useEffect } from "react";


function Slider() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = 'INSERT API KEY HERE';
    const dateToday = new Date().toJSON().slice(0,10);
    const url = `https://api.worldnewsapi.com/search-news?number=10&language=en&earliest-publish-date=${dateToday}&source-countries=ch&api-key=${API_KEY}`;

    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data.news); 
      } catch (error) {
        setError("Unable to fetch news.");
        console.error("Error:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="slider-strip">
      <div className="news-bar">
        <p>News Flash </p>
      </div>
      <p className="slider-text">
        {error ? (
          error
        ) : (
          news.length > 0 ? (
            news.map((item, index) => (
              <span key={index}> { }
                { item.title} &bull; 
              </span>
            ))
          ) : (
            "Loading news..."
          )
        )}
      </p>
    </div>
  );
}

export default Slider;


/*

function Slider() {
  return (
  <div className="slider-strip">
    <p className="slider-text">This line will contain injected sliding news text</p>
  </div>
  );
}

export default Slider;




import { useState, useEffect } from 'react';

const GET_URL = "http://localhost:8080/api/v1/hello/first";

function MyComponent() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    const fetchHello = async () => {
      const response = await fetch(`${GET_URL}`);
      const responseJson = (await response.json());

      setHello(responseJson.message);
    }

    fetchHello();
  }, []);

  return (
    <div>{hello}</div>
  )
}

export default MyComponent

*/