import React from "react";
// COMPONENT
import PagesPost from "../../saveposts/PagesPost";
// ROUTER
import { Link } from "react-router-dom";
// MUI
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { indigo } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import { deepOrange } from "@mui/material/colors";
import { lightBlue } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Pages = () => {
  return (
    <div className="pages-item">
      <Breadcrumbs aria-label="breadcrumb" className="pt-5 pb-10 hederlink">
        <Link underline="hover" color="inherit" to="/" className="text-xl">
          Phoenix Travel
        </Link>
        <p className="text-xl decoration">Страны</p>
      </Breadcrumbs>
      <div className="tour-item-text">
        <p>Страны</p>
        <div className="tour-item-text2">
          <p>Подпишись на наши соц.сети</p>
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
      <PagesPost />
    </div>
  );
};

export default Pages;
