import React, { useState } from "react";
import axios from "axios";
// ROUTER
import { Link } from "react-router-dom";
// COMPONENT
import airp1 from "../../img/airp1.png";
import airp2 from "../../img/airp2.png";
import airp3 from "../../img/airp3.png";
import airp4 from "../../img/airp4.png";
import airp5 from "../../img/airp5.png";
import airp6 from "../../img/airp6.png";
import airp7 from "../../img/airp7.png";
import airp8 from "../../img/airp8.png";
import videohome from "../../video/videohome1.mp4";
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
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Flights = () => {
  // ALERT-MUI
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [city, setFlightsCity] = useState("");
  const [city2, setFlightsCity2] = useState("");
  const [peopleOne, setFlightsPeople1] = useState("");
  const [peopleTwo, setFlightsPeople2] = useState("");
  const [dataOne, setFlightsDataOne] = useState("");
  const [dataTwo, setFlightsDataTwo] = useState("");
  const [fio, setFlightsFIO] = useState("");
  const [num, setFlightsNum] = useState("");
  const [email, setFlightsEmail] = useState("");
  // POST-HANDLE-RIGH
  const handleUpdateRights = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3004/flit", {
      flightsCity: city,
      flightsCity2: city2,
      flightsPeople1: peopleOne,
      flightsPeople2: peopleTwo,
      flightsDataOne: dataOne,
      flightsDataTwo: dataTwo,
      flightsFIO: fio,
      flightsNum: num,
      flightsEmail: email,
    });
    setFlightsCity("");
    setFlightsCity2("");
    setFlightsPeople1("");
    setFlightsPeople2("");
    setFlightsDataOne("");
    setFlightsDataTwo("");
    setFlightsFIO("");
    setFlightsNum("");
    setFlightsEmail("");
    setOpen(true);
  };
  return (
    <div className="flights-item">
      <Breadcrumbs aria-label="breadcrumb" className="pt-5 pb-10 hederlink">
        <Link underline="hover" color="inherit" to="/" className="text-xl">
          Phoenix Travel
        </Link>
        <p className="text-xl decoration">Авиабилеты</p>
      </Breadcrumbs>
      <div className="tour-item-text">
        <p>Авиабилеты</p>
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
      <div className="flight-container">
        <form onSubmit={handleUpdateRights} className="handle-item">
          <div className="handle-form">
            <TextField
              value={city}
              onChange={(e) => setFlightsCity(e.target.value)}
              id="outlined-basic"
              label="Введите город вылета"
              variant="outlined"
              required
              className="textflig"
            />
            <TextField
              value={city2}
              onChange={(e) => setFlightsCity2(e.target.value)}
              id="outlined-basic"
              label="Введите город назначения"
              variant="outlined"
              className="textflig"
              required
            />
          </div>
          <div className="handle-form">
            <TextField
              value={peopleOne}
              onChange={(e) => setFlightsPeople1(e.target.value)}
              id="outlined-number"
              label="Взрослых"
              type="number"
              className="textflig"
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <TextField
              value={peopleTwo}
              onChange={(e) => setFlightsPeople2(e.target.value)}
              id="outlined-number"
              label="Детей"
              type="number"
              className="textflig"
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </div>
          <div className="handle-form">
            <TextField
              value={dataOne}
              onChange={(e) => setFlightsDataOne(e.target.value)}
              id="outlined-basic"
              label="Ведите дату вылета"
              variant="outlined"
              className="textflig"
              required
            />
            <TextField
              value={dataTwo}
              onChange={(e) => setFlightsDataTwo(e.target.value)}
              id="outlined-basic"
              label="Ведите дату возрата"
              variant="outlined"
              className="textflig"
              required
            />
          </div>
          <div className="handle-form">
            <TextField
              value={fio}
              onChange={(e) => setFlightsFIO(e.target.value)}
              id="outlined-basic"
              label="Введите ФИО"
              variant="outlined"
              className="textflig"
              required
            />
            <TextField
              value={num}
              onChange={(e) => setFlightsNum(e.target.value)}
              id="outlined-basic"
              label="Введите номер телефона"
              variant="outlined"
              className="textflig"
              required
            />
          </div>
          <div className="handle-form">
            <TextField
              value={email}
              onChange={(e) => setFlightsEmail(e.target.value)}
              id="outlined-basic"
              label="Введите почту"
              variant="outlined"
              className="textflig"
              required
            />
            <button type="submit" className="button">
              Отправить заявку
            </button>
          </div>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
        <div className="handle-video">
        <video src={videohome} autoPlay loop muted className="fligvideo"></video>
        </div>
      </div>
      <div className="air-container">
        <p>Авиа-партнеры</p>
        <div className="air-item">
          <div>
            <img src={airp1} alt="" />
          </div>
          <div>
            <img src={airp2} alt="" />
          </div>
          <div>
            <img src={airp3} alt="" />
          </div>
          <div>
            <img src={airp4} alt="" />
          </div>
          <div>
            <img src={airp5} alt="" />
          </div>
          <div>
            <img src={airp6} alt="" />
          </div>
          <div>
            <img src={airp7} alt="" />
          </div>
          <div>
            <img src={airp8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
