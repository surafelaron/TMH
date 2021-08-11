import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../actions/Context.js";
import "./login.css";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post('/api/users/signin', {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    return (
        <div className="signinContainer">
            <form className="signinForm" onSubmit={handleSubmit}>
                <div>
                    <h1> Log In</h1>
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        ref={emailRef}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        ref={passwordRef}
                    ></input>
                </div>
                <button className="primary" type="submit" disabled={isFetching}>
                    Login
                </button>
                <div>
                    <label />
                    <div>
                        New member?{' '}
                        <Link to="/register" className="linkToRegister">
                            Register Here
                        </Link>
                    </div>
                </div>
            </form>

        </div>
    );
}