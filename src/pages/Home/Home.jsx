import React from "react";
// COMPONENTS
import Post from "../../saveposts/Post";
import imgair from "../../img/air.png";
import imgbus from "../../img/bus.png";
import imgsel from "../../img/bok.png";
import imgsup from "../../img/sup.png";
import imgpalm from "../../img/palm.jpg";
import hotel1 from "../../img/hotels/hotel1.jpg";
import hotel2 from "../../img/hotels/hotel2.jpg";
import hotel3 from "../../img/hotels/hotel3.jpg";
import videohome1 from "../../video/videohome1.mp4";
// MUI
import { green, red } from "@mui/material/colors";
import { indigo } from "@mui/material/colors";
import { amber } from "@mui/material/colors";
import { deepOrange } from "@mui/material/colors";
import { lightBlue } from "@mui/material/colors";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import CheckIcon from "@mui/icons-material/Check";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { motion } from "framer-motion";
// animation
const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
const textAnimationOne = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 0.7,
    transition: { delay: custom * 0.2 },
  }),
};
const textAnimationTwo = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.5 },
  }),
};
const textAnimationThree = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.5 },
  }),
};

const Home = () => {
  return (
    <div>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0, once: true }}
        className="one-section"
      >
        <div className="one-section-item">
          <motion.p custom={15} variants={textAnimation} className="text-home">
            Откройте для себя новые места!
          </motion.p>
          <motion.p
            custom={3}
            variants={textAnimationOne}
            className="text-home-opasity"
          >
            Phoenix Travel
          </motion.p>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="two-section"
      >
        <motion.div
          custom={1}
          variants={textAnimationTwo}
          className="two-section-item"
        >
          <img src={imgair} alt="" />
          <div>
            <p>
              <strong>Дешевые перелеты</strong>
            </p>
            <p>Lorem lorem lorem it.</p>
          </div>
        </motion.div>
        <motion.div
          custom={2}
          variants={textAnimationTwo}
          className="two-section-item"
        >
          <img src={imgsup} alt="" />
          <div>
            <p>
              <strong>Быстрая поддержка</strong>
            </p>
            <p>Lorem lorem lorem it.</p>
          </div>
        </motion.div>
        <motion.div
          custom={3}
          variants={textAnimationTwo}
          className="two-section-item"
        >
          <img src={imgsel} alt="" />
          <div>
            <p>
              <strong>Легкое бронирование</strong>
            </p>
            <p>Lorem lorem lorem it.</p>
          </div>
        </motion.div>
        <motion.div
          custom={4}
          variants={textAnimationTwo}
          className="two-section-item"
        >
          <img src={imgbus} alt="" />
          <div>
            <p>
              <strong>Варианты путешествия</strong>
            </p>
            <p>Lorem lorem lorem it.</p>
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0, once: true }}
        className="tree-section"
      >
        <div className="tree-section-item">
          <motion.p custom={1} variants={textAnimationTwo}>
            Лучшие туристические пакеты
          </motion.p>
        </div>
        <Post />
      </motion.section>
      <motion.section
        className="four-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
      >
        <motion.div
          custom={1}
          variants={textAnimationTwo}
          className="four-section-item"
        >
          <img src={imgpalm} alt="" />
          <p>Лучшие отели</p>
        </motion.div>
        <motion.div
          custom={2}
          variants={textAnimationTwo}
          className="four-section-hotel"
        >
          <div className="four-section-hotel-start">
            <img src={hotel1} alt="" />
          </div>
          <div className="four-section-hotel-end">
            <p>Calista Luxury Resort</p>
            <div>
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
            </div>
          </div>
        </motion.div>
        <motion.div
          custom={3}
          variants={textAnimationTwo}
          className="four-section-hotel"
        >
          <div className="four-section-hotel-start">
            <img src={hotel2} alt="" />
          </div>
          <div className="four-section-hotel-end">
            <p>Titanic Mardan Palace</p>
            <div>
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
            </div>
          </div>
        </motion.div>
        <motion.div
          custom={4}
          variants={textAnimationTwo}
          className="four-section-hotel"
        >
          <div className="four-section-hotel-start">
            <img src={hotel3} alt="" />
          </div>
          <div className="four-section-hotel-end">
            <p>Burj Al Arab</p>
            <div>
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
              <StarBorderOutlinedIcon sx={{ color: amber[500] }} />
            </div>
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        className="five-section"
        initial="hidden"
        whileInView="visible"
        custom={1}
        variants={textAnimationThree}
        viewport={{ amount: 0.1, once: true }}
      >
        <p>
          «Путешествия лишают тебя дара речи, а потом превращают в лучшего
          рассказчика» — Ибн Баттута
        </p>
        <video src={videohome1} autoPlay loop muted></video>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        className="six-section"
        viewport={{ amount: 0.2 }}
      >
        <div className="six-section-container">
          <div className="six-cetion-item">
            <motion.p custom={1} variants={textAnimationTwo}>
              Популярные направления
            </motion.p>
          </div>
          <div className="six-cetion-item2">
            <div className="block">
              <motion.p custom={2} variants={textAnimationTwo}>
                <CheckIcon
                  sx={{
                    color: lightBlue["A700"],
                    fontSize: 29,
                    marginRight: 1,
                  }}
                />
                Турция, Анталия
              </motion.p>
              <motion.p custom={3} variants={textAnimationTwo}>
                <CheckIcon
                  sx={{
                    color: lightBlue["A700"],
                    fontSize: 29,
                    marginRight: 1,
                  }}
                />
                ОАЭ, Дубай
                </motion.p>
                <motion.p custom={4} variants={textAnimationTwo}>
                <CheckIcon
                  sx={{
                    color: lightBlue["A700"],
                    fontSize: 29,
                    marginRight: 1,
                  }}
                />
                Мальдивы, остров Ангага
                </motion.p>
            </div>
            <div className="block">
            <motion.p custom={2} variants={textAnimationTwo}>
                <CheckIcon
                  sx={{
                    color: lightBlue["A700"],
                    fontSize: 29,
                    marginRight: 1,
                  }}
                />
                Турция, Белек
                </motion.p>
              <motion.p custom={3} variants={textAnimationTwo}>
                <CheckIcon
                  sx={{
                    color: lightBlue["A700"],
                    fontSize: 29,
                    marginRight: 1,
                  }}
                />
                Тайланд, Бангкок
                </motion.p>
              <motion.p custom={4} variants={textAnimationTwo}>
                <CheckIcon
                  sx={{
                    color: lightBlue["A700"],
                    fontSize: 29,
                    marginRight: 1,
                  }}
                />
                Шри-Ланка, Берувела
                </motion.p>
            </div>
          </div>
        </div>
        <div className="six-section-container2">
          <div className="six-cetion-item">
          <motion.p custom={1} variants={textAnimationTwo}>Подпишись на наши соц.сети  </motion.p>
          </div>
          <div>
            <motion.a custom={2} variants={textAnimationTwo} href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <FacebookIcon
                sx={{ color: indigo[700], fontSize: 50, marginRight: 3 }}
                className="a-link1"
              />
            </motion.a>
            <motion.a custom={3} variants={textAnimationTwo} href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <InstagramIcon
                sx={{ color: deepOrange[600], fontSize: 50, marginRight: 3 }}
                className="a-link2"
              />
            </motion.a>
            <motion.a custom={4} variants={textAnimationTwo} href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <TwitterIcon
                sx={{ color: lightBlue["A700"], fontSize: 50, marginRight: 3 }}
                className="a-link3"
              />
            </motion.a>
            <motion.a custom={5} variants={textAnimationTwo} href="https://www.instagram.com/phoenix_travel/" target="_blank">
              <WhatsAppIcon
                sx={{ color: green[500], fontSize: 50 }}
                className="a-link4"
              />
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
