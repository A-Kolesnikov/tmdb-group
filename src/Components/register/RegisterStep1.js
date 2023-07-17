import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export const RegisterStep1 = ({ setFormData, formData, navigation }) => {
    const [username, setUsername] = useState(formData.username || '');
    const [password, setPassword] = useState(formData.password || '');
    const [error, setError] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (username.length < 3 || username.length > 10 || !username.match(/^[a-z0-9]+$/i)) {
            setError('Username should be unique and between 3 to 10 characters (Can contain only alphanumerics)');
            return;
        }
        if (!password.match(/^[a-z0-9_\-!*]+$/i) || password.length < 5 || password.length > 10) {
            setError('Password can contain only alphanumerics and _, -, ! or * and between 5 to 10 characters.');
            return;
        }
        setError('');
        setFormData({ ...formData, username, password });
        navigation.next();
    };

    return (
        <Card style={{ width: '18rem', backgroundColor: '#f5f5f5' }}>
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Next</Button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </Form>
            </Card.Body>
        </Card>
    );
};
