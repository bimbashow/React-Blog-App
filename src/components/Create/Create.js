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
    const [newAge,setAge] = useState("");

    const navigate  = useNavigate();
   const cardsCollectionRef = collection(db,"cats")
    
    

    const createPost = async (e) =>{
     e.preventDefault();
      await addDoc(cardsCollectionRef,{name: newName, description:newDescription,imageurl:newImage,category:newCategory,breed:newBreed,age:newAge})
      navigate('/dashboard');
    }


    return(
        <section id="create-page" className="create">
        <form id="create-form"  method="POST">
                <legend>Add Blog</legend>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input type="text" name="name" id="name" placeholder="Name" onChange={(event)=> {setName(event.target.value)}} />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea name="description" id="description" placeholder="Description" onChange={(event)=> {setDescription(event.target.value)}}></textarea>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" placeholder="Put image adress here"onChange={(event)=> {setImage(event.target.value)}}/>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="category">Category</label>
                    <span className="input">
                    <textarea name="category" id="category" placeholder="What category is your image?"onChange={(event)=> {setCategory(event.target.value)}}></textarea>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="breed">Breed</label>
                    <span className="input">
                    <textarea name="breed" id="breed" placeholder="What kind of breed it is?" onChange={(event)=> {setBreed(event.target.value)}}></textarea>
                    </span>
                </p>  <p className="field">
                    <label htmlFor="Age">Age</label>
                    <span className="input">
                    <textarea name="Age" id="Age" placeholder="How old is your cat" onChange={(event)=> {setAge(event.target.value)}}></textarea>
                    </span>
                </p>
                <input className="button submit" onClick={createPost} type="submit" value="Add Post" />
        </form>
    </section>
    )
}
export default Create;