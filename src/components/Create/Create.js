import { useState } from "react";
import "./Create.css";
import { db } from "../../config/firebaseConfig.js";
import { addDoc,collection } from "@firebase/firestore";
import { useNavigate } from "react-router";
const Create = () => {
    
    const [newName,setName] = useState("");
    const [newDescription,setDescription] = useState("");
    const [newImage,setImage] = useState("");
    const [newCategory,setCategory] = useState("");
    const [newBreed,setBreed] = useState("");

    const navigate  = useNavigate();
   const cardsCollectionRef = collection(db,"cats")
    
    

    const createPost = async (e) =>{
     e.preventDefault();
      await addDoc(cardsCollectionRef,{name: newName, description:newDescription,imageurl:newImage,category:newCategory,breed:newBreed})
      navigate('/');
    }


    return(
        <section id="create-page" className="create">
        <form id="create-form"  method="POST">
                <legend>Add Blog</legend>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input type="text" name="name" id="name" placeholder="Navcho,Myrcho..." onChange={(event) => { setName(event.target.value) }} />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="breed">Breed</label>
                    <span className="input">
                        <input type="text" name="breed" id="breed" placeholder="siamese cat,persian..." onChange={(event) => { setBreed(event.target.value) }} />
                    </span>
                </p> 
                <p className="field">
                    <label htmlFor="category" className="create-category-label">Category</label>
                    <span className="input">
                        <input type="text" name="category" id="category" placeholder="cute,funny..." onChange={(event) => { setCategory(event.target.value) }} />
                    </span>
                </p> 
                <p className="field">
                    <label htmlFor="image">Image    </label>
                    <span className="input">
                        <input type="text" name="image" id="image" placeholder="adress link" onChange={(event) => { setImage(event.target.value) }} />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description" className="    ">Description</label>
                    <span className="input">
                        <input type="text" name="description" id="description" placeholder="say few words for your photo" onChange={(event) => {setDescription(event.target.value) }} />
                    </span>
                </p>
                <input className="button submit" onClick={createPost} type="submit" value="Add Post" />
        </form>
    </section>
    )
}
export default Create;