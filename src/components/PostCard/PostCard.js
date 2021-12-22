import { useState, useEffect } from "react";
import { db } from "../../config/firebaseConfig.js"
import { collection, deleteDoc, doc, Firestore, getDocs, updateDoc } from "firebase/firestore";
import "./PostCard.css"
import PostCardListItem from "../PostCard/PostCardListItem/PostCardListItem.js"
import Details from "../Details/Details.js";
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

    const onDeleteCard = (id) => {
        deleteDoc(doc(cardsCollectionRef, id)).then(() => {
            setCards((cards) => cards.filter((c) => c.id !== id))
        })
        console.log("id deleted");
    }

    const onEditCard = (id) => {

    }
    const onDetailsCard = (id) => {
    const card = getDocs(setCards((cards) => cards.filter((card) => card.id === id)));
    return(
        <Details key={card.id} card={card}/>
        
    )
    }

    return (
        <li className="otherPosts" >
            {cards.map((card) => {

                return (
                    <PostCardListItem
                        card={card}
                        key={card.id}
                        onDelete={onDeleteCard}
                        onEdit={onEditCard}
                        onDetails={onDetailsCard}

                    />
                );
            })}
        </li>

    )
}

export default PostCard;