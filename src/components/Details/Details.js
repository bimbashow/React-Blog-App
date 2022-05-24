import { getDoc } from "firebase/firestore";
import "../Details/Details.css"
import PostCard from "../PostCard/PostCard.js";

const Details = ({card,id}) =>{
    return (
        <section id="details-page" className="details">
            <div className="blog-card-information">
                <h3 className="name"></h3>
                <p className="breed">puskan</p>
                <p className="category"></p>
                <p className="img"><img src="Pesho" /></p> 
                <p className="description"></p>
            </div>
        </section>
    )
}
export default Details;