import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

import { blue, green, red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DoNotDisturbOnOutlinedIcon from "@mui/icons-material/DoNotDisturbOnOutlined";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const fetchData = () => {
  return axios
    .get(`http://localhost:3004/book/`)
    .then((response) => response.data);
};
const ProfileBook = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetchData().then((data) => setBook(data));
  }, []);

  return (
    <div className="profile-book">
      {book.map((book) => {
        return (
          <div className="book-item">
            <div>
            <p className="book-item-last"><strong>Имя :</strong> {book.bookLast}</p>
            <p className="book-item-first"><strong>Фамилия :</strong> {book.bookFirst}</p>
            <p className="book-item-tel"><strong>Телефон : </strong> {book.bookTel}</p>
            </div>
            <div className="flex flex-col justify-between">
              <Tooltip title="Позвонили" sx={{padding : 0}}>
                <IconButton>
                  <Checkbox
                    {...label}
                    icon={<TaskAltIcon />}
                    checkedIcon={<TaskAltIcon sx={{ color: green[600], padding: 0}} />}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Закрепить" sx={{padding : 0}}>
                <IconButton>
                  <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon sx={{ color: blue[600] }} />}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Отказался" sx={{padding : 0}}>
                <IconButton>
                  <Checkbox
                    {...label}
                    icon={<DoNotDisturbOnOutlinedIcon />}
                    checkedIcon={
                      <DoNotDisturbOnIcon sx={{ color: red[600] }} />
                    }
                  />
                </IconButton>
                {/* <IconButton>
                  <Checkbox
                    {...label}
                    icon={<DeleteForeverIcon />}
                    // onClick={handleDeletePost}
                  />
                </IconButton> */}
              </Tooltip>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileBook;
