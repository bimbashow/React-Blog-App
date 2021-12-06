import PostCard from '../PostCard/PostCard.js';
import {Routes,Route} from 'react-router-dom'; 
import "./Dashboard.css"; 

const Dashboard = () =>{
   

    return (
  <section className="dashboard">
                <ul className="other-posts-list">
      
              <Routes>
                  <Route path="/" element={<PostCard />}/>
              </Routes>
  
                </ul>
            </section>
    );
}
export default Dashboard;