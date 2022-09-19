import React, { useContext } from "react";
import "./Sidebar.css";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const SideBar = () => {
  const { isToggle, toggle } = useContext(Context);

  return (
    <div className={`navigation ${isToggle ? "open" : ""}`}>
      <div className="menuToggle" onClick={toggle}></div>
      <ul>
        <li className="list">
          <Link to={"/"}>
            <span className="icon">
              <HomeIcon />
            </span>
            <span className="text">Home</span>
          </Link>
        </li>

        <li className="list">
          <Link to={"/"}>
            <span className="icon"></span>
            <span className="text">About</span>
          </Link>
        </li>

        <li className="list">
          <Link to={"/"}>
            <span className="icon"></span>
            <span className="text">Serices</span>
          </Link>
        </li>

        <li className="list">
          <Link to={"/"}>
            <span className="icon"></span>
            <span className="text">Gallery</span>
          </Link>
        </li>

        <li className="list">
          <Link to={"/"}>
            <span className="icon"></span>
            <span className="text">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
