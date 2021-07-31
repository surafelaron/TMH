import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../actions/Context";
import "./register.css";

export default function Register() {
    const firstNameRef = useRef();
    const lastNameRef = useRef()
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)
        dispatch({ type: "REGISTER_START" });
        try {
            const res = await axios.post('/api/users/register', {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                confirmPassword: confirmPasswordRef.current.value,
            });
            dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
            window.location.replace("/login");
        } catch (err) {
            dispatch({ type: "REGISTER_FAILURE" });
        }
    };

    return (
        <div>
            <div className="register-form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <h2>Create An Account</h2>
                    </div>
                    <div>
                        <label htmlFor="name">First Name: </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter first name"
                            required
                            ref={firstNameRef}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="name">Last Name: </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter last name"
                            required
                            ref={lastNameRef}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email address: </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            required
                            ref={emailRef}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            required
                            ref={passwordRef}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password: </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Enter confirm password"
                            required
                            ref={confirmPasswordRef}
                        ></input>
                    </div>
                    <div className="buttonDiv">
                        <button className="register" type="submit">
                            Register
                        </button>
                    </div>
                    <div>
                        <label />
                        <div>
                            Already a member?{' '}
                            <Link className="linkSignin" to="/login">Log-In</Link>
                        </div>
                    </div>
                </form>
            </div>
            {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
        </div>
    );
}