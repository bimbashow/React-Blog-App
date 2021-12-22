import { collection, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { db } from "../../config/firebaseConfig.js"

import "../Edit/Edit.css"

const Edit = ({
    card,
    id
}) => {
    const [newName,setName] = useState("");
    const [newDescription,setDescription] = useState("");
    const [newImage,setImage] = useState("");
    const [newCategory,setCategory] = useState("");
    const [newBreed,setBreed] = useState("");
    const cardsCollectionRef = collection(db, "cats");
  console.log(newName);
    const navigate = useNavigate()

    const edithandler = async () =>{

     

    }

    return(
        <section id="edit-page" className="edit">
        <form   id="edit-form"  method="UPDATE">
                <legend>Update Blog</legend>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input type="text" name="name" id="name" placeholder="Navcho,Myrcho..."onChange={(event) => { setName(event.target.value) }}  />
                    </span>
                
                </p>

                <p className="field">
                    <label htmlFor="breed">Breed</label>
                    <span className="input">
                        <input type="text" name="breed" id="breed" placeholder="siamese cat,persian..." onChange={(event) => { setBreed(event.target.value) }}  />
                    </span>
                </p> 
                <p className="field">
                    <label htmlFor="category" className="edit-category-label">Category</label>
                    <span className="input">
                        <input type="text" name="category" id="category" placeholder="cute,funny..." onChange={(event) => { setCategory(event.target.value) }}   />
                    </span>
                </p> 
                <p className="field">
                    <label htmlFor="image">Image    </label>
                    <span className="input">
                        <input type="text" name="image" id="imageurl" placeholder="adress link"onChange={(event) => { setImage(event.target.value) }}    />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description" className="    ">Description</label>
                    <span className="input">
                        <input type="text" name="description" id="description" placeholder="say few words for your photo" onChange={(event) => { setDescription(event.target.value) }} />
                    </span>
                </p>
                <input className="button submit"  onClick={(()=>edithandler(id))} type="submit" value="Update Post" />
        </form>
    </section>
    )
}
export default Edit;