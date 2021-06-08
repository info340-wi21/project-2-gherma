import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {NavLink} from 'react-router-dom';
import "./css/login.css";

export default function Signup() {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");
    let [passCheck, setPassCheck] = useState("");

    function check(){
        return email.length > 0 && pass.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="inner">
            <h3>Register</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="firstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Group>
                <Form.Group size="lg" controlId="lastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                </Form.Group>
                <Form.Group size="lg" controlId="passCheck">
                    <Form.Label>Re-enter password</Form.Label>
                    <Form.Control type="passCheck" value={passCheck} onChange={(e) => setPassCheck(e.target.value)}/>
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!check()}>
                    Sign up
                </Button>
                <p className="text-right">
                    Already have an account? <NavLink to="/login">Sign in here</NavLink>
                </p>
            </Form>
        </div> 
        ); 
    }
