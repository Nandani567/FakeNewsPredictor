import React, { useState } from "react";
import NewsForm from "./components/NewsForm";
import NewsSection from "./components/NewsSection";
import NewsChart from "./components/NewsChart";
import "./App.css";

function App() {

  const [articles, setArticles] = useState([]);

  const [chartData, setChartData] = useState([
    { name: "Real", value: 0 },
    { name: "Fake", value: 0 },
  ]);



  const addArticle = (article) => {
    setArticles([article, ...articles]);

    const realCount = articles.filter(a => a.label === "real").length + (article.label === "real" ? 1 : 0);
    const fakeCount = articles.filter(a => a.label === "fake").length + (article.label === "fake" ? 1 : 0);
    setChartData([{ name: "Real", value: realCount }, { name: "Fake", value: fakeCount }]);
  };
const numBubbles = 30;
const bubbles = Array.from({ length: numBubbles }, () => ({
  size: Math.floor(Math.random() * 50) + 10,     
  top: Math.random() * 100 + "%",                 
  left: Math.random() * 100 + "%",
  delay: Math.random() * 5 + "s",                
  duration: Math.random() * 4 + 4 + "s"          
}));

  return (
 
    <div className="hero-section">
      {bubbles.map((bubble, index) => (
  <div
    key={index}
    className="floating"
    style={{
      width: bubble.size + "px",
      height: bubble.size + "px",
      top: bubble.top,
      left: bubble.left,
      animationDelay: bubble.delay,
      animationDuration: bubble.duration,
    }}
  ></div>
))}


      
      <h1 className="website-title">NewsVision</h1>
      <p className="website-tagline">Detect Fake News Instantly</p>

     
      <div className="search-container">
        <NewsForm addArticle={addArticle} />
      </div>

     
      <NewsChart data={chartData} />

      <NewsSection articles={articles} />
    </div>
  );
}

export default App;

