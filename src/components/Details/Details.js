const Details = () =>{

    return (
        <section id="details-page" className="details">
            <div className="blog-card-information">
                <h3>Name: Milo</h3>
                <p className="type">Type: dog</p>
                <p className="img"><img src="images" /></p>
                <div className="actions">
                    <a className="button" href="#">Edit</a>
                    <a className="button" href="#">Delete</a>
                    
                    <a className="button" href="#">Like</a>
                    
                    <div className="likes">
						<img className="hearts" src="/images/heart.png" />
						<span id="total-likes">Likes: 0</span>
					</div>
                </div>
            </div>
            <div className="blog-card-description">
                <h3>Description:</h3>
                <p>description anything</p>
            </div>
        </section>
    )
}
export default Details;