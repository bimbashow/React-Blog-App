import { Link } from "react-router-dom";
import { auth } from "../../config/firebaseConfig.js";
import './Header.css';

const Header = () => {

  return (
    <header id="site-header">
        <nav className="navbar">
            <section className="navbar-dashboard">
                <Link to="/" className="dashboard-btnn">Dashboard</Link>
                <div id="guest">
                <Link className="button" to="/login">Login</Link>
                <Link to="/register" className="button">Register</Link>
                </div>
                <div id="user">
                {/* {auth.currentUser.email} */}
            <span>Welcome, </span>
            <Link className="button" to="/my-posts">My Posts</Link>
            <Link className="button" to="/create">Create</Link>
            <Link className="button" to="/logout">Logout</Link>
        </div>
               
            </section>
        </nav>
    </header>
  )
}
export default Header;