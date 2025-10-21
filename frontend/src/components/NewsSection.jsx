import React from "react";
import { motion } from "framer-motion";
import NewsCard from "./NewsCard";
import "./NewsSection.css";
function NewsSection({ articles }) {
  return (
    <div className="scroll-container">
      {articles.map((article, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          style={{ display: 'inline-block' }}
        >
          <NewsCard title={article.title} content={article.content} label={article.label} />
        </motion.div>
      ))}
    </div>
  );
}

export default NewsSection;
