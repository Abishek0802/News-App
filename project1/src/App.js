import "./App.css";
import { useEffect, useState } from "react";
import News from "./News";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("");
  const [categoryDis, setCategoryDis] = useState("world News");

  useEffect(() => {
    fetchNews();
  }, [categoryDis]);

  const fetchNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=${categoryDis}&from=2024-01-16&to=2024-01-16&sortBy=popularity&apiKey=87a837d3f8c546e083a7da2181c6351f`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          console.log(data.articles);
          setArticles(data.articles);
        } else {
          console.error("Unexpected response format:", data);
          setArticles([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setArticles([]);
      });
  };

  const handleSearch = () => {
    setCategoryDis(category !== "" ? category : "world News");
  };

  return (
    <>
      <div className="App">
        <header style={{}}>
          {" "}
          <div className="header">
            <h1>News App</h1>{" "}
          </div>
          <div className="header">
            {" "}
            <input
              style={{ marginLeft: "200px" }}
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="search news"
            />
            <button className="btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </header>

        <section className="news-articles">
          {articles.length !== 0 ? (
            articles.map((article, index) => (
              <News key={index} article={article} />
            ))
          ) : (
            <h3>Search for the News</h3>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
