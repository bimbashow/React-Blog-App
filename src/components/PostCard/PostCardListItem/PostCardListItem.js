import { Link } from "react-router-dom";

const PostCardListItem = ({ card, onDelete,onEdit,onDetails }) => {
    const onDeleteButtonClick = () => {
        onDelete(card.id)
    };
    const onEditButtonClick = () => {
        onEdit(card.id)
    };
    const onDetailsButtonClick = () => {
        onDetails(card)
    };
    return <li className="otherPosts" >

        <div className="postcard-info">
            <p className="img"><img src={card.imageurl} /></p>
            <div className="card-info-details">
                <h3 className="card-name">{card.name}</h3>
                <p className="card-category">{card.category}</p>
                <p className="card-breed">{card.breed}</p>
                <p className="card-description">{card.description}</p>

                <div className="post-info">
                    <button className="card-button" onClick={onDeleteButtonClick} >Delete</button>  
                    <Link  to={`/edit/${card.id}`} className="card-button" onClick={onEditButtonClick}>Edit</Link>
                    <Link  to={`/details/${card.id}`} className="card-button" onClick={onDetailsButtonClick} >Details</Link>
                    <button className="card-button">Favourite</button>
                </div>
            </div>
        </div>
    </li>

}
export default PostCardListItem;