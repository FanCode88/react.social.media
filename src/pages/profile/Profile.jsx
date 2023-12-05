import "./profile.scss";
import { FaFacebook, FaPinterest, FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlineEmail, MdMoreVert } from "react-icons/md";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.unsplash.com/photo-1643856555886-76dca68e5322?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="cover"
        />
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagramSquare />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <PiLinkedinLogoFill />
            </a>
            <a href="">
              <FaPinterest />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <FaLocationDot />
                <span>USA</span>
              </div>
              <div className="item">
                <IoIosGlobe />
                <span>saceanu.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <div className="itemRight">
              <MdOutlineEmail />
              <MdMoreVert />
            </div>
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
