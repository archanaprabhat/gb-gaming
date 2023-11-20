import React from "react";
import logo from "../assets/logo.png";
import Post from "./Post";
import img from "../assets/footer-top-bg.png";
import Comments from "./Comments";

const FooterImage = ({ footerImage }) => {
  return (
    <div>
      <div
        className="flex flex-row items-center gap-y-2"
        style={{
          backgroundImage: `url(${footerImage})`,
          height: "100vh w-max",
        }}
      >
        <div>
          <div className="">
            <img src={logo} className="w-200 h-150" alt="Logo" />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet.
          </p>

          <img src={img} alt="footer-img" className="h-150" />
        </div>
        <Post />

        <Comments />
      </div>
    </div>
  );
};

export default FooterImage;
