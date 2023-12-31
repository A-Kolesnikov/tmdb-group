import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

import { allData } from '../Service/LocalStorageManager';

function LoginPage({changeLoggedUser}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Fetch the user data from the local storage
        let tmdbData = allData()
        const userData = tmdbData ? tmdbData.users : [];
    
        // Check if the user exists and the password is correct
        const user = userData && userData.find(user => user.username === username && user.password === password);
    
        if (user) {
            // Log the user in
            changeLoggedUser(user.id)
            //tmdbData.loggedUser = user.id; // Set loggedUser in tmdbData object
    
            // Save tmdbData back to localStorage
            //localStorage.setItem('tmdbData', JSON.stringify(tmdbData));
    
            // Display a success message
            //alert('Hurray!');
    
            // Redirect the user to the home page
            navigate('/');
        } else {
            // Display an error message
            alert('Invalid username or password');
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </Container>
    );
}

export default LoginPage;
