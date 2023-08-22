import getReels from "./reels"; // Import the function to get reel data
import ".../css/reels/reels-list.css";

const ReelsList = () => {
  const reels = getReels();

  return (
    <div className="reels-list">
      {reels.map((reel) => (
        <div key={reel.id} className="reel-item">
          {/* Display reel content here */}
          {/* You can use video elements, captions, like buttons, etc. */}
        </div>
      ))}
    </div>
  );
};

export default ReelsList;
