import { useState } from "react";
import { IoIosMore } from "react-icons/io";

const More = () => {

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const handleSettingsClick = () => {
      setIsSettingsOpen(!isSettingsOpen);
    };

  return (
    <div className="settings" onClick={handleSettingsClick}>
      <IoIosMore className="more" />
    </div>
  );
};

export default More;
