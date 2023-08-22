import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import "../css/more.css";
import { RiMoonClearFill } from "react-icons/ri";
import { FiBookmark, FiSettings } from "react-icons/fi";

const More = () => {

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const handleSettingsClick = () => {
      setIsSettingsOpen(!isSettingsOpen);
    };

  return (
    <div className="settings">
        <HiOutlineMenu onClick={handleSettingsClick} />
        <p>More</p>
        {isSettingsOpen && (
          <div className="settings-dropdown">
            <ul className="settings-list">
              <li className="settings-item">
                <FiSettings className="more-icons" />
                Settings
              </li>
              <li className="settings-item">
                <FiBookmark className="more-icons" />
                Your Saved
              </li>
              <li className="settings-item">
                <RiMoonClearFill className="more-icons" />
                Switch Appearance
              </li>
            </ul>
          </div>
        )}
      </div>

  );
};

export default More;
