import axios from "axios";
import React, { useEffect, useState } from "react";
// COMPONENT
import Post from "../../saveposts/Post";
// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import { indigo } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import { deepOrange } from "@mui/material/colors";
import { lightBlue } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// ROUTER
import { useParams, Link } from "react-router-dom";

import { Carousel } from "react-bootstrap";

// JSON-запрос
const fetchData = (id) => {
  return axios
    .get(`http://localhost:3004/pages/${id}`)
    .then((response) => response.data);
};
const fetchDataOne = () => {
  return axios
    .get("http://localhost:3004/posts")
    .then((response) => response.data);
};


const PageInfo = () => {
  const [pages, setPages] = useState([]);
  const [pagesOne, setPagesOne] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData(id).then((data) => setPages(data));
  }, []);
  useEffect(() => {
    fetchDataOne().then((data) => setPagesOne(data));
  }, []);

  return (
    <div className="pageinfo-item">
      <Breadcrumbs aria-label="breadcrumb" className="pt-5 pb-10 hederlink">
        <Link underline="hover" color="inherit" to="/" className="text-xl">
          Phoenix Travel
        </Link>
        <Link underline="hover" color="inherit" to="/pages" className="text-xl">
          Страны
        </Link>
        <p className="text-xl decoration">{pages.pagesTitle}</p>
      </Breadcrumbs>
      <div className="tour-item-text">
        <p>Услуги</p>
        <div className="tour-item-text2">
          <p>{pages.pagesTitle}</p>
          <div className="tour-link">
            <a href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <FacebookIcon
                sx={{ color: indigo[700], fontSize: 40, marginRight: 2 }}  className="a-link1"
              />
            </a>
            <a href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <InstagramIcon
                sx={{ color: deepOrange[600], fontSize: 40, marginRight: 2 }} className="a-link2"
              />
            </a>
            <a href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <TwitterIcon
                sx={{ color: lightBlue["A700"], fontSize: 40, marginRight: 2 }} className="a-link3"
              /> 
            </a>
            <a href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <WhatsAppIcon sx={{ color: green[500], fontSize: 40 }} className="a-link4"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <TabsUnstyled defaultValue={0}>
          <TabsListUnstyled className="mb-4 flex">
            <TabUnstyled className="bnt">Информация</TabUnstyled>
            <TabUnstyled className="bnt">Туры</TabUnstyled>
          </TabsListUnstyled>
          <TabPanelUnstyled value={0}>
            <div>
              <div className="mb-10">
                <p className="pageinfo-text">Информация</p>
                <p className="pageinfo-text2">{pages.pagesDescr}</p>
              </div>
              <div className="mb-10">
                <p className="pageinfo-text">Туризм</p>
                <p className="pageinfo-text2">{pages.pagesEtru}</p>
              </div>
              <div>
                <Carousel className="Carousel">
                  <Carousel.Item>
                    <img
                      src={pages.pageImgIii}
                      alt=""
                      className="pagesImgCarousel"
                    />
                    <Carousel.Caption>
                      <p className="pageinfo-text">{pages.pagesTitle}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={pages.pageImgI}
                      alt=""
                      className="pagesImgCarousel"
                    />
                    <Carousel.Caption>
                      <p className="pageinfo-text">{pages.pagesTitle}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={pages.pageImgIi}
                      alt=""
                      className="pagesImgCarousel"
                    />
                    <Carousel.Caption>
                      <p className="pageinfo-text">{pages.pagesTitle}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={1}>
          {pagesOne.filter(post => post.postCountry == pages.pagesTitle ).map((post) => {
        return (
          <div className="post-item">
            <div className="post-text-container">
              <div>
                <p className="post-item-title">{post.postTitle}</p>
                <p className="post-item-sell">
                  {post.postDuration}дней / {post.postSell}$
                </p>
              </div>
              <Link to={`/redpost/${post.id}`}>
                <button>Посмотреть</button>
              </Link>
            </div>
            <div className="post-sell-container">
              {/* <InsertInvitationOutlinedIcon /> */}
              <p>{post.postDataOne}</p>
            </div>
            <img src={post.postImg} alt="" />
          </div>
        );
      })}
          </TabPanelUnstyled>
        </TabsUnstyled>
      </div>
    </div>
  );
};

export default PageInfo;
