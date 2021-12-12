import { signInWithEmailAndPassword } from "@firebase/auth";
import * as yup from 'yup';
import "./Login.css";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { getAuth } from "@firebase/auth";
import { schema } from "../../Validations/loginUserValidation.js";
const Login = () => {
    const navigate = useNavigate();


    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });
    const submitForm = (data) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password )
          .then((userCredential) => {
            const user = userCredential.user;
            navigate('/')
          })
          .catch((error) => {
            console.log(error.message + "username is wrong");
          });

    };

    return(
        <section id="login-page" className="login">
        <form onSubmit={handleSubmit(submitForm)} id="login-form" action="" method="">
                <legend>Login Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="example@gmail.com" {...register('email') }/>
                    </span>
                </p>
                <p>{errors.email?.message}</p>

                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="123456"  {...register('password') }/>
                    </span>
                </p>
                <p>{errors.password?.message}</p>
                <input className="button submit" type="submit" value="Login"  />
        </form>
    </section>
    );
}
export default Login;