import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import fire from '../Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../state';


const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const fullNameRef = useRef();

    const mobilenoRef = useRef();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault();
        try {

            fire.auth().createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then((u) => {
                console.log(u.user.uid);

                dispatch(userActions.postUserData(u.user.uid));
                navigate('/')
            })
                .catch((err) => {
                    setError("Failed to sign in");
                    console.log(err);
                })

        } catch {
            setError("Failed to sign in");
        }
        setLoading(false);
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

                                        <h2><span style={{ "color": "white" }}>Sign Up</span> To Get <em>Credit</em> From Us</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 offset-lg-3">
                                    <label style={{ "paddingLeft": "250px", "fontSize": "20px", "color": "white" }} className="form-label">Email</label>
                                    <input type="email" style={{ "width": "400px", "marginLeft": "120px" }} className="form-control form-control-lg"
                                        placeholder="Email Id" ref={emailRef} required />

                                </div>
                                <div className="col-lg-6 offset-lg-3">
                                    <label style={{ "paddingLeft": "250px", "fontSize": "20px", "color": "white" }} className="form-label">Password</label>
                                    <input type="password" style={{ "width": "400px", "marginLeft": "120px" }} className="form-control form-control-lg"
                                        placeholder="Password" ref={passwordRef} required />
                                </div>
                                <div className="col-lg-6 offset-lg-3">
                                    <label style={{ "paddingLeft": "250px", "fontSize": "20px", "color": "white" }} className="form-label">Full Name</label>
                                    <input type="text" style={{ "width": "400px", "marginLeft": "120px" }} className="form-control form-control-lg"
                                        placeholder="Full Name" ref={fullNameRef} required />
                                </div>

                                <div className="col-lg-6 offset-lg-3">
                                    <label style={{ "paddingLeft": "250px", "fontSize": "20px", "color": "white" }} className="form-label">Mobile Number</label>
                                    <input type="text" style={{ "width": "400px", "marginLeft": "120px" }} className="form-control form-control-lg"
                                        placeholder="Mobile number" ref={mobilenoRef} required />
                                </div>

                                <div className="col-lg-6 offset-lg-3">
                                    <fieldset>
                                        <button style={{
                                            "marginTop": "30px", "marginLeft": "250px", "height": "40px", "width": "100px",
                                            "borderRadius": "14px", "backgroundColor": "#33ccc5", "color": "white", "borderColor": "white"
                                        }} type="submit" id="form-submit" className="main-button">Sign Up</button>
                                        <button style={{
                                            "marginTop": "30px", "marginLeft": "250px", "height": "40px", "width": "100px",
                                            "borderRadius": "14px", "backgroundColor": "#33ccc5", "color": "white", "borderColor": "white"
                                        }} type="submit" id="form-submit" className="main-button"><Link to={"/Login"} class="nav-link active" aria-current="page">
                                                Login
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

export default Signup