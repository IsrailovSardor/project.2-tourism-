import React from "react";
// IMG
import visa from "../../img/isa.png";
import vip from "../../img/vip.jpg";
import save from "../../img/save.jpg";
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
const Services = () => {
  return (
    <div className="services-item">
      <Breadcrumbs aria-label="breadcrumb" className="pt-5 pb-10 hederlink">
        <Link to="/" underline="hover" color="inherit" className="text-xl">
          Phoenix Travel
        </Link>
        <p className="text-xl decoration">Услуги</p>
      </Breadcrumbs>
      <div className="tour-item-text">
        <p>Услуги</p>
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
      <div className="services-container">
        <div className="services-block">
          <div className="services-img">
            <Link to="/visa">
              <img src={visa} alt="" />
            </Link>
          </div>
          <Link to="/visa">
            <p className="ser-btn">Оформление виз</p>
          </Link>
        </div>
        <div className="services-block">
          <div className="services-img">
            <Link to="/vip">
              <img src={vip} alt="" />
            </Link>
          </div>
          <Link to="/vip">
            <p className="ser-btn">VIP залы</p>
          </Link>
        </div>
        <div className="services-block">
          <div className="services-img">
            <Link to="/insurance">
              <img src={save} alt="" />
            </Link>
          </div>
          <Link to="/insurance">
            <p className="ser-btn">Страхование</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
