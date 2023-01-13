import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'

const AdminLogin = (props) => {

    const navigate = useNavigate()
    const [user, setUser] = useState({ username: '', password: '' })
    const [success, setSuccess] = useState(true);
    const [message, setMessage] = useState('');

    const clickHandler = (e) => {
        e.preventDefault();
        if (user.username === 'Monali' && user.password === '2023') {
            props.login(user.username)
            setSuccess(true);
            navigate('/customerdetails', { state: { name: user.username, message: 'Hi This is Welcome Page' } });
        }
        else {

            setSuccess(false);
            setTimeout(() => {
                setSuccess(true)
            }, 3000)
        }
    }

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const Clear = (e) => {
        console.log("clear")
        setMessage('');
    }
    return (
        <div className='container  col-xs-12 block2 center' style={{ width: '30%', "marginTop": "120px" }} >

            <Form>
                <div className="section-heading">
                    <h2> <em>Login Here</em></h2>
                </div>
                {!success && <Alert color="danger">Login Fail</Alert>}
                <FormGroup>
                    <Label for="exampleUsername">
                        Username
                    </Label>
                    <Input
                        id="exampleUsername"
                        name="username"
                        placeholder="Username"
                        type="text"
                        value={user.username}
                        onChange={changeHandler}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={user.password}
                        onChange={changeHandler}
                    />
                </FormGroup>
                
                <button style={{
                    "marginTop": "30px", "marginLeft": "10px", "height": "40px", "width": "100px",
                    "borderRadius": "14px", "backgroundColor": "#33ccc5", "color": "white", "borderColor": "white"
                }} type="submit" id="form-submit" className="main-button" onClick={(e) => { clickHandler(e) }}>Login</button>

                <button style={{
                    "marginTop": "30px", "marginLeft": "10px","marginBottom": "50px", "height": "40px", "width": "100px",
                    "borderRadius": "14px", "backgroundColor": "red", "color": "white", "borderColor": "white"
                }} type="submit" id="form-submit" className="main-button" onClick={(e) => { Clear(e) }}>Cancel</button>
            </Form>
        </div>

    )
}

export default AdminLogin