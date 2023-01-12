import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import fire from '../Firebase';
import { userActions } from "../state";


const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            
            fire.auth().signOut();
            fire.auth().signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((u) => {
                //fire.auth().createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value).then((u)=>{
                //console.log(u);
                dispatch(userActions.getUserData(u.user.uid))
                navigate('/');
            })
                .catch((err) => {
                    setError("Failed to sign in");
                    console.log(err);
                })

        } catch {
            setError("Failed to sign in");
        }
    }
    return (
        <div id="contact" className="contact-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
                        {error && <Alert variant="danger">{error}</Alert>}
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3">
                                    <div className="section-heading">
                                        <h2>Login in <span>Get</span> In <em>Credit</em> From Us</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 offset-lg-3">
                                    <label style={{ "paddingLeft": "250px", "fontSize": "25px", "color": "white" }} className="form-label">Username</label>
                                    <input type="email" style={{ "width": "400px", "marginLeft": "120px" }} className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" ref={emailRef} required />

                                </div>
                                <div style={{ "paddingTop": "20px" }} className="col-lg-6 offset-lg-3">
                                    <label style={{ "paddingLeft": "250px", "fontSize": "25px", "color": "white" }} className="form-label">Password</label>
                                    <input type="email" style={{ "width": "400px", "marginLeft": "120px" }} type="email" className="form-control form-control-lg"
                                        placeholder="Password" ref={passwordRef} required />
                                </div>
                                <div className="col-lg-6 offset-lg-3">
                                    <fieldset>
                                        <button style={{
                                            "marginTop": "30px", "marginLeft": "250px", "height": "40px", "width": "100px",
                                            "borderRadius": "14px", "backgroundColor": "#33ccc5", "color": "white", "borderColor": "white"
                                        }} type="submit" id="form-submit" className="main-button">Login</button>
                                        <button style={{
                                            "marginTop": "30px", "marginLeft": "250px", "height": "40px", "width": "100px",
                                            "borderRadius": "14px", "backgroundColor": "#33ccc5", "color": "white", "borderColor": "white"
                                        }} type="submit" id="form-submit" className="main-button"><Link to={"/Signup"} class="nav-link active" aria-current="page">
                                                Sign Up
                                            </Link></button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login