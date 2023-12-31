import { useState } from "react";
import "../css/sidebar.css";
import { FiCompass, FiHome, FiSearch} from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
// import { Link } from "react-router-dom";
// import Reels from "./Reels";
import More from "./More";
import { Link } from "react-router-dom";
import { PiVideoFill } from "react-icons/pi";

const Sidebar = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
      <div className="left-nav">
        <div className="instagram">Instagram</div>
        <button className="left-nav-buttons">
          <FiHome className="icon" />
          {isSearchOpen ? null : "Home"}
        </button>
        <button
          className="left-nav-buttons"
          onClick={() => setIsSearchOpen(true)}
        >
          <FiSearch className="icon" />
          {isSearchOpen ? null : "Search"}
        </button>
        {isSearchOpen && (
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button
              className="close-button"
              onClick={() => setIsSearchOpen(false)}
            >
              <IoMdClose className="close-icon" />
            </button>
          </div>
        )}
        <button className="left-nav-buttons">
          <FiCompass className="icon" />
          {isSearchOpen ? null : "Explore"}
        </button>
        <Link to="/Reels" className="left-nav-buttons">
          <PiVideoFill className="reels-icon" />
          Reels
        </Link>
        <More/>
      </div>
    );
}
 
export default Sidebar;