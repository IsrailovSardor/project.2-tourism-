import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";

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
    transition: { delay: custom * 0.5 },
  }),
};

const fetchData = () => {
  return axios
    .get("http://localhost:3004/posts")
    .then((response) => response.data);
};

const Post = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData().then((data) => setPosts(data));
  }, []);
  // filter(post => post.postTitle == "ОАЭ")
  return (
    <div className="item">
      {posts.map((post) => {
        return (
          <div
            className="post-item"
          >
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
              <InsertInvitationOutlinedIcon />
              <p>{post.postDataOne}</p>
            </div>
            <img src={post.postImg} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Post;
