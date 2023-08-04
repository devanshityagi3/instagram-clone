import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h2>Oops! Sorry</h2>
      <img src="images/notfound.png" alt="404" />
      <Link to="/" className="insta">
        <FiInstagram className="insta-icon" />
      </Link>
    </div>
  );
};

export default NotFound;
