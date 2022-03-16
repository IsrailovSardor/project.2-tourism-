import React from "react";
// MUI
import { indigo } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import { deepOrange } from "@mui/material/colors";
import { lightBlue } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// ROUTER
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <div className="reviews-item">
      <Breadcrumbs aria-label="breadcrumb" className="pt-5 pb-10 hederlink">
        <Link underline="hover" color="inherit" to="/" className="text-xl">
          Phoenix Travel
        </Link>
        <p className="text-xl decoration">Частые вопросы</p>
      </Breadcrumbs>
      <div className="tour-item-text">
        <p>Отзывы</p>
        <div className="tour-item-text2">
          <p>Подпишись на наши соц.сети</p>
          <div className="tour-link">
            <a href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <FacebookIcon
                sx={{ color: indigo[700], fontSize: 30, marginRight: 2 }}
              />
            </a>
            <a href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <InstagramIcon
                sx={{ color: deepOrange[600], fontSize: 30, marginRight: 2 }}
              />
            </a>
            <a href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <TwitterIcon
                sx={{ color: lightBlue["A700"], fontSize: 30, marginRight: 2 }}
              />
            </a>
            <a href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <WhatsAppIcon sx={{ color: green[500], fontSize: 30 }} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p>Отзовав пока нет!</p>
      </div>
    </div>
  );
};

export default Reviews;
