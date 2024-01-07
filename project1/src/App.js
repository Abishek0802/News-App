import "./App.css";
import { useEffect, useState } from "react";
import News from "./News";

function App() {
  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("india");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${category}&from=2024-01-06&to=2024-01-06&sortBy=popularity&apiKey=87a837d3f8c546e083a7da2181c6351f`
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
  }, [category]);

  return (
    <>
      <div className="App">
        <header className="header">
          <h1>News App</h1>
          <input
            type="text"
            onChange={(event) => {
              if (event.target.value !== "") {
                setCategory(event.target.value);
              } else {
                setCategory("india");
              }
            }}
            placeholder="search news"
          />
        </header>
        <section className="news-articles">
          {" "}
          {articles.length !== 0 ? (
            articles.map((article, index) => {
              return <News key={index} article={article} />;
            })
          ) : (
            <h3>Search Not Found</h3>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
