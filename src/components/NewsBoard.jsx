import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import './NewsBoard.css';

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();

        // Filter out removed articles based on description containing '[Removed]'
        const filteredArticles = data.articles.filter(article => article.title  !== '[Removed]');

        setArticles(filteredArticles);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArticles();
  },[category]);

  return (
    <div className="container">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {error && <p className="text-center text-danger">{error}</p>}
      <div className="row justify-content-center">
        {articles.map((news, index) => (
          <div className="col-md-4 d-flex align-items-stretch" key={index}>
            <NewsItem
              title={news.title}
              desc={news.description}
              url={news.url}
              urlToImage={news.urlToImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
