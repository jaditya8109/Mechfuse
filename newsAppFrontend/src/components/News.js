import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import { useCookies } from 'react-cookie';
import axios from "axios";
import {Link} from "react-router-dom";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  async function deleteCookie() {
    try {
      await axios.get('/logout');
      localStorage.removeItem('user');

    }catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className="head__text"> Hi👋 {user.username}</h1>
      <h1 className="head__text"> Here are the news</h1>
      <button className="loginRegisterButton" onClick={deleteCookie}>
            <Link to="/logout">
              Logout
            </Link>
            </button>
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
