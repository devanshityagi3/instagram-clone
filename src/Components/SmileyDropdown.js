import React, { useState } from "react";

const SmileyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const smileyOptions = ["😊", "😄", "😍", "🥰", "😂"];

  return (
    <div className="smiley-dropdown">
      <button className="smiley-button" onClick={toggleDropdown}>
        🙂
      </button>
      {isOpen && (
        <div className="dropdown">
          {smileyOptions.map((smiley, index) => (
            <button key={index} className="smiley-option">
              {smiley}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SmileyDropdown;
