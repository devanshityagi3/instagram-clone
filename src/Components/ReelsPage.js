import ReelsList from "./ReelsList"; // Import the component that displays the scrolling reels
import ".../css/reels/reels-page.css";
import useFetch from "./useFetch";

const ReelsPage = () => {

  const {
    data: reels,
    isPending,
    error,
  } = useFetch(" http://localhost:3001/instareels");

  return (
    <div className="reels-page">
      <div className="overlay">
        <h2>Reels</h2>
        {error && <div>Error: {error}</div>}
        {isPending && <div>Loading...</div>}
        {reels && <ReelsList reels={reels} />}{" "}
      </div>{" "}
    </div>
  );
};

export default ReelsPage;
