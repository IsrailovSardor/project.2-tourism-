import React, { useState } from "react";
import axios from "axios";
// ROUTER
import { Link } from "react-router-dom";
// COMPONENT
import MapG from "../../saveposts/MapG";
// MUI
import TextField from "@mui/material/TextField";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import { indigo } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import { deepOrange } from "@mui/material/colors";
import { lightBlue } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Contacts = () => {
  // ALERT-MUI
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [writeLast, setWriteLast] = useState("");
  const [writeNum, setWriteNum] = useState("");
  const [writeEmail, setWriteEmail] = useState("");
  const [writeText, setWriteText] = useState("");
  // POST-HANDLE_WRITE
  const handleWrite = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3004/write", {
      writeLast,
      writeNum,
      writeEmail,
      writeText,
    });
    setWriteLast("");
    setWriteNum("");
    setWriteEmail("");
    setWriteText("");
    setOpen(true)
  };

  return (
    <div className="kontact-item">
      <Breadcrumbs aria-label="breadcrumb" className="pt-5 pb-10 hederlink">
        <Link underline="hover" color="inherit" to="/" className="text-xl">
          Phoenix Travel
        </Link>
        <p className="text-xl decoration">????????????????</p>
      </Breadcrumbs>
      <div className="tour-item-text">
        <p>????????????????</p>
        <div className="tour-item-text2">
          <p>?????????????????? ???? ???????? ??????.????????</p>
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
        <div className="kontact-item-text">
          <p>?????????????????? ?? ????????</p>
          <p>???????????????? ??????</p>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="kontact-itam-block">
            <div>
              <div className="kontact-text2">
                <p>????????????????</p>
                <div>
                  <a href="tel:+996556399399">
                    <ContactPhoneOutlinedIcon sx={{ fontSize: 30 }} />
                    +996556399399
                  </a>
                </div>
              </div>
              <div className="kontact-text2">
                <p>??????????</p>
                <a>
                  <LocationOnOutlinedIcon sx={{ fontSize: 30 }} />
                  ????. ????????????????, 93 (???????????????????? ????. ????????????????????)
                </a>
              </div>
            </div>
            <div>
              <div className="kontact-text2">
                <p>Email</p>
                <a href="mailto:office@PhoenixTravel.kg">
                  <EmailOutlinedIcon sx={{ fontSize: 30 }} />{" "}
                  office@PhoenixTravel.kg
                </a>
              </div>
              <div className="kontact-text2">
                <p>??????. ????????</p>
                <a
                  href="https://www.instagram.com/phoenix_travel/"
                  target="_blank"
                >
                  <FacebookIcon
                    sx={{ color: indigo[700], fontSize: 30, marginRight: 2 }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/phoenix_travel/"
                  target="_blank"
                >
                  <InstagramIcon
                    sx={{
                      color: deepOrange[600],
                      fontSize: 30,
                      marginRight: 2,
                    }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/phoenix_travel/"
                  target="_blank"
                >
                  <TwitterIcon
                    sx={{
                      color: lightBlue["A700"],
                      fontSize: 30,
                      marginRight: 2,
                    }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/phoenix_travel/"
                  target="_blank"
                >
                  <WhatsAppIcon sx={{ color: green[500], fontSize: 30 }} />
                </a>
              </div>
            </div>
          </div>
          <div className="write-itam-block">
            <form onSubmit={handleWrite}>
              <div className="block-container">
                <div className="block-text">
                  <TextField
                    value={writeText}
                    onChange={(e) => setWriteText(e.target.value)}
                    id="outlined-multiline-static"
                    label="??????????????????"
                    multiline
                    rows={7}
                    style={{ width: 275,}}
                  />
                </div>
                <div className="block-text2">
                  <TextField
                    value={writeLast}
                    onChange={(e) => setWriteLast(e.target.value)}
                    id="outlined-basic"
                    label="??????"
                    variant="outlined"
                    style={{ width: 275 }}
                  />
                  <TextField
                    value={writeNum}
                    onChange={(e) => setWriteNum(e.target.value)}
                    id="outlined-basic"
                    label="??????????"
                    variant="outlined"
                    style={{ width: 275 }}
                  />
                  <TextField
                    value={writeEmail}
                    onChange={(e) => setWriteEmail(e.target.value)}
                    id="outlined-basic"
                    label="??????????"
                    variant="outlined"
                    style={{ width: 275 }}
                  />
                </div>
              </div>
              <button type="submit" className="button1">
                ??????????????????
              </button>
            </form>
          </div>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
           ?????????????????? ?????????????? ????????????????????.
          </Alert>
        </Snackbar>
        <div className="map-item">
          <MapG />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
