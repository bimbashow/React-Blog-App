import { useState, useEffect } from "react";
import { db } from "../../config/firebaseConfig.js"
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import "./PostCard.css"
import PostCardListItem from "../PostCardListItem/PostCardListItem.js";
const PostCard = () => {


    const [cards, setCards] = useState([]);
    const cardsCollectionRef = collection(db, "cats")


    useEffect(() => {
        const getCards = async () => {
            const data = await getDocs(cardsCollectionRef);
            setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getCards()
    }, [])

   const onDeleteCard = (id) =>{
    console.log(doc(cardsCollectionRef,id));
     deleteDoc(doc(cardsCollectionRef,id)).then(()=>{
         setCards((cards)=> cards.filter((c)=>c.id!==id))
     })
       console.log("id deleted");
   }


    return (
        <li className="otherPosts" >
            {cards.map((card) => {

                return (
                  <PostCardListItem card={card} key={card.id} onDelete={onDeleteCard}/>
                );
            })}
        </li>

    )
}

export default PostCard;