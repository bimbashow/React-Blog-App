import { useState } from "react";
import "./Login.css";
const Login = () => {
    const[loginEmail,setLoginEmail] = useState("");
    const[loginPassword,setLoginPassword] = useState("");
    const loginHandler = async () =>{
         
    }


    return(
        <section id="login-page" className="login">
        <form id="login-form" action="" method="">
                <legend>Login Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="Email" onChange={(event) => setLoginEmail(event.target.value)} />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="Password" onChange={(event) => setLoginPassword(event.target.value)}/>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Login" />
        </form>
    </section>
    );
}
export default Login;