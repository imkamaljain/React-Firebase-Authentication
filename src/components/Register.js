import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Register() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { register } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }
        try {
            setError("");
            setLoading(true);
            await register(emailRef.current.value, passwordRef.current.value);
            setLoading(false);
            history.push("/");
        } catch (err){
            setLoading(false);
            setError(err?.message);
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Register</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control placeholder="Email Address" type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control placeholder="Password" type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm" className="mt-3">
                            <Form.Label>Re-enter Password</Form.Label>
                            <Form.Control placeholder="Re-enter Password" type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4" type="submit">
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-3">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}