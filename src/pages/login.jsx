import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import React, { useState } from "react";

const login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    try {
      const response = await fetch("https://openshop-api.onrender.com/core/login/", {
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
        setSuccessMessage("Login Successful!");
        localStorage.setItem("accessToken", data.tokens.access);
        localStorage.setItem("refreshToken", data.tokens.refresh);
      }
    } catch (error) {
      console.log("Error during Login!", error);
      setError("An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Login" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#fcfcfc' }}>
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
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h3>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green', textAlign: 'center' }}>{successMessage}</p>}

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
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
          {isLoading ? "Logging in..." : "Log in"}
        </Button>

        <div style={{ textAlign: 'center' }}>
          <a href="/register" style={{ color: "#636363" }}>
            <p>Create an account</p>
          </a>
        </div>
      </Form>
    </div>
  );
};

export default login;
