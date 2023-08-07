
import '../css/home.css';
import PostsSection from './PostsSection';
import StorySection from './StorySection';

const Home = () => {
    return (
      <div className="home">
        <div className="stories-and-posts">
          <StorySection />
          <PostsSection />
        </div>
        <div className="users">

        </div>
      </div>
    );
}
 
export default Home;