
import '../css/home.css';
import PostsSection from './PostsSection';
import Sidebar from './Sidebar';
import StorySection from './StorySection';
import UsersSection from './UserSection';

const Home = () => {
   const stories = [
     { story_id: 1, imageUrl: "/images/Luke Dunphy.jpg", username: "user1" },
     { story_id: 2, imageUrl: "/images/Katy perry.jpg", username: "user2" },
     { story_id: 3, imageUrl: "/images/Shawn Mendes.jpg", username: "user3" },
     { story_id: 4, imageUrl: "/images/Claire Dunphy.jpg", username: "user4" },
     { story_id: 5, imageUrl: "/images/Camila Cabello.jpg", username: "user5" },
     { story_id: 5, imageUrl: "/images/Cristiano Ronaldo.jpg", username: "user6" },
   ];

    return (
      <div className="home">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="stories-and-posts">
          <StorySection stories={stories} />
          <PostsSection />
        </div>
        <div className="users"></div>
        <UsersSection />
      </div>
    );
}
 
export default Home;