import "./post.scss";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">2 min ago</span>
            </div>
          </div>
          <IoIosMore />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <MdFavorite /> : <MdFavoriteBorder />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <FaRegCommentAlt />
            12 Commnets
          </div>
          <div className="item">
            <CiShare2 />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
