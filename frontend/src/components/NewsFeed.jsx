import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import NewsCard from "./NewsCard";
import { Container } from "react-bootstrap";

function NewsFeed() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchNews = async () => {
    const res = await axios.get(`http://localhost:5000/news?page=${page}`);
    setArticles([...articles, ...res.data]);
    setPage(page + 1);
  };

  useEffect(() => { fetchNews(); }, []);

  return (
    <Container style={{ marginTop: "100px" }}>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchNews}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {articles.map((article, idx) => (
          <NewsCard key={idx} data={article} />
        ))}
      </InfiniteScroll>
    </Container>
  );
}

export default NewsFeed;
