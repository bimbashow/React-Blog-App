import "./Create.css";
const Create = () => {
    return(
        <section id="create-page" className="create">
        <form id="create-form"  method="POST">
                <legend>Add Blog</legend>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input type="text" name="name" id="name" placeholder="Name" />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea name="description" id="description" placeholder="Description"></textarea>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" placeholder="Image" />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="type">Type</label>
                    <span className="input">
                    <textarea name="type" id="type" placeholder="What you see on the picture"></textarea>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="breed">Breed</label>
                    <span className="input">
                    <textarea name="breed" id="breed" placeholder="What kind of breed it is?"></textarea>
                    </span>
                </p>  <p className="field">
                    <label htmlFor="Age">Age</label>
                    <span className="input">
                    <textarea name="Age" id="Age" placeholder="How old is your cat"></textarea>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Add Pet" />
        </form>
    </section>
    )
}
export default Create;