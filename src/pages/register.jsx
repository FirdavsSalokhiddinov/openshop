import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import React, { useState } from "react";

const register = () => {
    const [formData, setFormData] = useState({
		username: "",
		email: "",
		password1: "",
		password2: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const [isLoading, setIsLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState(null);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isLoading) {
			return;
		}

		setIsLoading(true);

		// Check if passwords match
		if (formData.password1 !== formData.password2) {
			setError("Passwords do not match!");
			setIsLoading(false);
			return;
		}

		try {
			const response = await fetch("https://openshop-api.onrender.com/core/register/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				const errorData = await response.json();
				Object.keys(errorData).forEach((field) => {
					const errorMessages = errorData[field];
					if (errorMessages && errorMessages.length > 0) {
						setError(errorMessages[0]);
					}
				});
			} else {
				const data = await response.json();
				console.log("Success!", data);
				setSuccessMessage("Registration Successful!");
			}
		} catch (error) {
			console.log("Error during registration!", error);
			setError("An error occurred during registration.");
		} finally {
			setIsLoading(false);
		}
	};

    return (
        <div className="Register" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#fcfcfc' }}>
            <Form
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    padding: '30px',
                    background: '#FCFCFC',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    margin: '20px',
                }}
                onSubmit={handleSubmit}
            >
                <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Create an Account</h3>

                {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
                {successMessage && <p style={{ color: "green", textAlign: "center" }}>{successMessage}</p>}

                <Form.Group className="mb-3" controlId="formGridUsername">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter full name"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password1"
                        value={formData.password1}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridReEnterPassword">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Re-enter password"
                        name="password2"
                        value={formData.password2}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    style={{
                        width: '100%',
                        height: '45px',
                        borderRadius: '25px',
                        background: "#1E90FF",
                        marginBottom: '20px',
                    }}
                    disabled={isLoading}
                >
                    {isLoading ? "Registering..." : "Register"}
                </Button>

                <div style={{ textAlign: 'center' }}>
                    <a href="/login" style={{ color: "#636363" }}>
                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>Already have an account?</p>
                    </a>
                </div>
            </Form>
        </div>
    );
};

export default register;
