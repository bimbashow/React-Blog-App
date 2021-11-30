import { onAuthStateChanged, signOut } from "@firebase/auth";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { auth } from "../../config/firebaseConfig.js";

import './Header.css';

const Header = () => {

const [user,setUser] = useState({});

const logoutHandler = async (e) => {
  e.preventDefault();
  user.email = null;
  await signOut(auth);
}

onAuthStateChanged(auth, (currentUser) =>{
setUser(currentUser);
});

 const guestNav =  
 <div id="guest">
 <Link className="button" to="/login">Login</Link>
 <Link to="/register" className="button">Register</Link>
 </div>;

 const userNav = 
 <div id="user">            
 <span>Welcome, user</span>
 <Link className="button" to="/my-posts">My Posts</Link>
 <Link className="button" to="/create">Create</Link>
 <Link className="button" to="/logout" onClick={logoutHandler} >Logout</Link>
</div>;

  return (
    <header id="site-header">
        <nav className="navbar">
            <section className="navbar-dashboard">
                <Link to="/" className="dashboard-btnn">Dashboard</Link>
                
             {user !== null ? userNav : guestNav}
               
            </section>
        </nav>
    </header>
  )
}
export default Header;