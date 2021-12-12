import PostCard from '../PostCard/PostCard.js';
import "./Dashboard.css";

const Dashboard = () => {


  return (
    <section className="dashboard">
      <ul className="other-posts-list">
        <PostCard />
      </ul>
    </section>
  );
}
export default Dashboard;