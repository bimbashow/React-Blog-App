import { useState,useEffect } from "react";
import {db} from "../../config/firebaseConfig.js"
import {collection,getDocs} from "firebase/firestore";
import "./PostCard.css"
const PostCard= () => {
 
    
    const [cards,setCards] = useState([]);
    const cardsCollectionRef =collection(db,"cats")


    useEffect(() =>{
    const getCards = async() =>{
       const data = await getDocs(cardsCollectionRef);
       setCards(data.docs.map((doc) =>({...doc.data(), id:doc.id})))
    }
    getCards()
    },[])

    
   
 
    return (
        <li className="otherPosts">
         {cards.map((card) => {

       return (
           <div className="postcard-info">
        <p className="img"><img src={card.imageurl}/></p>
        <div className="card-info-details">
        <h3 className="card-name">Name: {card.name}</h3> 
        <p className="card-category">Category: {card.category}</p>
        <p className="card-breed">Breed: {card.breed}</p>
        <p className="card-age">Age: {card.age}</p>
        <p className="card-description">{card.description}</p>
        <div className="post-info"> 
            <a href="#"><button className="button"><i className="fas fa-heart"></i>Favourite</button></a>
            <a href="#"><button className="button">Details</button></a>
            <i className="fas fa-heart"></i> <span> 2</span>
        </div>
        </div>
    </div>
       );
         })}
    </li>
 
    )
        }

export default PostCard;