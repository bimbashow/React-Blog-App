import React, { useState } from "react";
import "./Register.css";


import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "../../Validations/registerUserValidation.js"
import { createUserWithEmailAndPassword, getAuth, } from "@firebase/auth";
import { useNavigate } from "react-router";


const Register = () => {


    const navigate = useNavigate();

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });
    const onRegisterSubmitForm = (data) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, data.email, data.password,data.id)
          .then((userCredential) => {
            const user = userCredential.user;
            navigate('/')
          })
          .catch((error) => {
            alert('This email is already taken.Please choose another')
          });

    };
    
       return(
        <section id="register-page" className="register">
        <form onSubmit={handleSubmit(onRegisterSubmitForm)} id="register-form" action="" method="">
                <legend>Register Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input  type="text" name="email" id="email" placeholder="example@gmail.com" {...register('email')}   />
                    </span>
                    <p>{errors.email?.message}</p>

                </p>
                <p className="field" >
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input  type="password" name="password" id="password" placeholder="123456" {...register('password')}/>
                    </span>
                    <p>{errors.password?.message}</p>

                </p>
               
                <input className="button submit" type="submit" value="Register"    />
        </form>
      </section>
     );
 
}
export default Register;