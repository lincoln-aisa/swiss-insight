import "./slider.css";
import React, { useState, useEffect } from "react";

function Slider() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const today = new Date().toISOString().split("T")[0];
      const cachedNews = JSON.parse(localStorage.getItem("newsData"));
      const lastFetched = localStorage.getItem("newsFetchDate");
      const apiKey = process.env.REACT_APP_news_api_key;

      if (cachedNews && lastFetched === today) {
        setNews(cachedNews);
        return;
      }

      // Otherwise, fetch
      const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&qInTitle=swiss&country=ch&language=en&size=10&removeduplicate=1`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        const newsData = data.results || [];

        localStorage.setItem("newsData", JSON.stringify(newsData));
        localStorage.setItem("newsFetchDate", today);
        
        setNews(newsData);
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
      <marquee>
        <p className="slider-text">
          {error ? (
            error
          ) : (
            news.length > 0 ? (
              news.map((item, index) => (
                <span key={index}> {item.title} &bull; </span> ))
            ) : ( "Loading news..." )
          )}
        </p>
      </marquee>
    </div>
  );
}

export default Slider;
