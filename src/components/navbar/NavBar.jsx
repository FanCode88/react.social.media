import "./navbar.scss";
import {
  IoHomeOutline,
  IoMoonOutline,
  IoSunnyOutline,
  IoApps,
  IoSearchOutline,
  IoPersonOutline,
  IoMailOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>SaceanuSocial</span>
        </Link>
        <IoHomeOutline />
        {darkMode ? (
          <IoMoonOutline onClick={toggle} />
        ) : (
          <IoSunnyOutline onClick={toggle} />
        )}
        <IoApps />
        <div className="search">
          <IoSearchOutline />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="right">
        <IoPersonOutline />
        <IoMailOutline />
        <IoNotificationsOutline />
        <div className="user">
          <img src={currentUser.profilePic} alt="image_avatar" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
