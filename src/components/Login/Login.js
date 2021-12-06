import { signInWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import "./Login.css";
import { auth } from  "../../config/firebaseConfig.js";
import { useNavigate } from "react-router";

const Login = () => {
    const[loginEmail,setLoginEmail] = useState("");
    const[loginPassword,setLoginPassword] = useState("");
    
    const navigate = useNavigate();

    const loginHandler = async (e) =>{
        e.preventDefault();
        try{
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
         navigate('/dashboard');  
        }catch (error){
        console.log(error.message);
        }
        
    }

    return(
        <section id="login-page" className="login">
        <form id="login-form" action="" method="">
                <legend>Login Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="example@gmail.com" onChange={(event) => setLoginEmail(event.target.value)} />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="123456" onChange={(event) => setLoginPassword(event.target.value)}/>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Login"  onClick={loginHandler} />
        </form>
    </section>
    );
}
export default Login;