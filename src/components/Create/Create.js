import { useState } from "react";
import "./Create.css";
import { auth, db } from "../../config/firebaseConfig.js";
import { addDoc,collection } from "@firebase/firestore";
import { useNavigate } from "react-router";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../Validations/createPostValidation.js";

const Create = () => {
    
    const navigate  = useNavigate();
    const cardsCollectionRef = collection(db,"cats")

    const user = auth.currentUser.displayName;
    console.log(user);


    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const onCreateSubmitForm = async (data) => {
     await addDoc(cardsCollectionRef,(data));
    navigate('/dashboard');

    };

    return(
        <section id="create-page" className="create">
        <form onSubmit={handleSubmit(onCreateSubmitForm)} id="create-form"  method="POST">
                <legend>Add Blog</legend>
                <p className="field">
                    <label htmlFor="name">Name</label>
                    <span className="input">
                        <input type="text" name="name" id="name" placeholder="Navcho,Myrcho..." {...register('name') } />
                    </span>
                
                </p>
                <p className="error">{errors.name?.message}</p>

                <p className="field">
                    <label htmlFor="breed">Breed</label>
                    <span className="input">
                        <input type="text" name="breed" id="breed" placeholder="siamese cat,persian..." {...register('breed') } />
                    </span>
                </p> 
                <p className="error">{errors.breed?.message}</p>
                <p className="field">
                    <label htmlFor="category" className="create-category-label">Category</label>
                    <span className="input">
                        <input type="text" name="category" id="category" placeholder="cute,funny..." {...register('category') } />
                    </span>
                </p> 
                <p className="error">{errors.category?.message}</p>
                <p className="field">
                    <label htmlFor="image">Image    </label>
                    <span className="input">
                        <input type="text" name="image" id="imageurl" placeholder="adress link" {...register('imageurl') }  />
                    </span>
                </p>
                <p className="error">{errors.image?.message}</p>
                <p className="field">
                    <label htmlFor="description" className="description">Description</label>
                    <span className="input">
                        <input type="text" name="description" id="description" placeholder="say few words for your photo" {...register('description') }/>
                    </span>
                </p>
                <p className="error">{errors.description?.message}</p>
                <input className="button submit"  type="submit" value="Add Post" />
        </form>
    </section>
    )
}
export default Create;