const PostCardListItem = ({ card, onDelete }) => {
    const onDeleteButtonClick = () => {
        onDelete(card.id)
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
                    <button className="card-button">Edit</button>
                    <button className="card-button">Favourite</button>
                </div>
            </div>
        </div>
    </li>

}
export default PostCardListItem;