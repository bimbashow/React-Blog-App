const Create = () => {
    

    return(
        <section id="create-page" className="create">
        <form id="create-form"  method="POST">
            <fieldset>
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
                <input className="button submit" type="submit" value="Add Pet" />
            </fieldset>
        </form>
    </section>
    )
}
export default Create;