import { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import "./Register.css";
import { auth } from  "../../config/firebaseConfig.js"
import { useNavigate } from "react-router";

const Register = () => {

    const[registerEmail,setRegisterEmail] = useState("");
    const[registerPassword,setRegisterPassword] = useState("");
    
    const navigate = useNavigate();


     const registerHandler = async (e) =>{
        e.preventDefault();
        try{

        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        navigate('/dashboard')
        }catch (error){
        console.log(error.message);
        }
    };

    return(
        <section id="register-page" className="register">
        <form id="register-form" action="" method="">
                <legend>Register Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="example@gmail.com" onChange={(event) => setRegisterEmail(event.target.value)}/>
                    </span>
                </p>
                <p className="field" >
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="123456"  onChange={(event) => setRegisterPassword(event.target.value)} />
                    </span>
                </p>
               
                <input className="button submit" type="submit" value="Register" onClick={registerHandler} />
        </form>
    </section>
    );
}
export default Register;