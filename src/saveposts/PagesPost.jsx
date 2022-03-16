import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const fetchData = () => {
  return axios
    .get("http://localhost:3004/pages")
    .then((response) => response.data);
};

const PagesPost = (props) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setPages(data));
  }, []);

  return (
    <div className="pagespost-item">
      {pages.map((page) => {
        return (
          <div className="pagespost-container">
            <div className="papagespostges-item-block">
              <img src={page.pageImgAA} alt="" className="pagespost-flag" />
              <h1 className="pagespost-item-text">{page.pagesTitle}</h1>
              <Link to={`/pageinfo/${page.id}`}>
                <button>Посмотреть</button>
              </Link>
            </div>
            <img src={page.pageImgA} alt="" className="pagespost-img" />          
          </div>
        );
      })}
    </div>
  );
};

export default PagesPost;
