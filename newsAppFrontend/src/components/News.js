import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  const {user} = useContext(AuthContext);

  return (
    <div>
      <h1 className="head__text"> Hi👋 {user.username}</h1>
      <h1 className="head__text"> Here are the news</h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
