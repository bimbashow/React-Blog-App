import "../Details/Details.css"

const Details = ({card}) =>{

    return (
        <section id="details-page" className="details">
            <div className="blog-card-information">
                <h3 className="name">sylza</h3>
                <p className="breed">puskan</p>
                <p className="category"></p>
                <p className="img"><img src="Pesho" /></p> 
                <p className="description"></p>
            </div>
        </section>
    )
}
export default Details;