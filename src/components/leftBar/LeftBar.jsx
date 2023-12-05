import "./leftbar.scss";
import image from "../../../src/Assets/mitchell-luo-ymo_yC_N_2o-unsplash.jpg";
import friends from "../../../src/Assets/1.png";
import group from "../../../src/Assets/2.png";
import market from "../../../src/Assets/3.png";
import watch from "../../../src/Assets/4.png";
import memories from "../../../src/Assets/5.png";
import event from "../../../src/Assets/6.png";
import gaming from "../../../src/Assets/7.png";
import gallery from "../../../src/Assets/8.png";
import videos from "../../../src/Assets/9.png";
import messages from "../../../src/Assets/10.png";
import tutorials from "../../../src/Assets/11.png";
import courses from "../../../src/Assets/12.png";
import fund from "../../../src/Assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="avatar_img" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={group} alt="" />
            <span>Group</span>
          </div>
          <div className="item">
            <img src={market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={event} alt="" />
            <span>Event</span>
          </div>
          <div className="item">
            <img src={gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={fund} alt="" />
            <span>Fund</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
