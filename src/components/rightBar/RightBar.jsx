import "./rightbar.scss";
import image4 from "../../../src/Assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={image4} alt="avatar_info" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={image4} alt="avatar_info" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Last Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={image4} alt="avatar_info" />
              <p>
                <span>Jane Doe</span>
                liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={image4} alt="avatar_info" />
              <p>
                <span>Jane Doe</span>
                liked a comment
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={image4} alt="avatar_info" />
              <p>
                <span> Jane Doe </span>
                posted
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={image4} alt="avatar_info" />
              <p>
                <span>Jane Doe</span>
                changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Frieds</span>
          <div className="user">
            <div className="userInfo">
              <img src={image4} alt="avatar_info" />
              <div className="online" />
              <span> Jane Doe </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={image4} alt="avatar_info" />
              <div className="online" />
              <span> Jane Doe </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={image4} alt="avatar_info" />
              <div className="online" />
              <span> Jane Doe </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={image4} alt="avatar_info" />
              <div className="online" />
              <span> Jane Doe </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={image4} alt="avatar_info" />
              <div className="online" />
              <span> Jane Doe </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={image4} alt="avatar_info" />
              <div className="online" />
              <span> Jane Doe </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
