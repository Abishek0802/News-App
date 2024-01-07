import "./App.css";
import { useEffect, useState } from "react";
import News from "./News";

function App() {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2024-01-06&apiKey=74d8d0760b414804ba8e57debfe8638e"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles);
        setArticles(data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="App">
        <header className="header">
          <h1>News App</h1>
          <input type="text" placeholder="search news" />
        </header>
        <section className="news-articles">
          {" "}
          {articles.map((article, index) => {
            return <News key={index} article={article} />;
          })}
        </section>
      </div>

      {/* <div style={{ backgroundColor: "gray" }}>
        {articles.map((article, index) => (
          <p key={index}>{article.author}</p>
        ))}
      </div> */}
    </>
  );
}

export default App;
