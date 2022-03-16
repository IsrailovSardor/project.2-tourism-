import React, { useEffect, useState } from "react";
import axios from "axios";

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
    .get("http://localhost:3004/write")
    .then((response) => response.data);
};
const Write = () => {
  const [write, setWrite] = useState([]);
  useEffect(() => {
    fetchData().then((data) => setWrite(data));
  }, []);
  return (
    <div className="write-item">
      {write.map((write) => {
        return (
          <div className="write-container">
            <div className="">
              <p><strong>ФИО :</strong> {write.writeLast}</p>
              <p><strong>Номер :</strong> {write.writeNum}</p>
              <p><strong>Почта :</strong> {write.writeEmail}</p>
              <p><strong>Сообщение :</strong> {write.writeText}</p>
            </div>
            <div className="flex flex-col justify-start">
              <Tooltip title="Ответили" sx={{ padding: 0 }}>
                <IconButton>
                  <Checkbox
                    {...label}
                    icon={<TaskAltIcon />}
                    checkedIcon={
                      <TaskAltIcon sx={{ color: green[600], padding: 0 }} />
                    }
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Не отвечает" sx={{ padding: 0 }}>
                <IconButton>
                  <Checkbox
                    {...label}
                    icon={<DoNotDisturbOnOutlinedIcon />}
                    checkedIcon={
                      <DoNotDisturbOnIcon sx={{ color: red[600] }} />
                    }
                  />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Write;
