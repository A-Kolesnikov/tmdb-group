import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allData, updStorage } from '../Service/LocalStorageManager';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

const EditUserPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        favLang: '',
        favGenre: '',
        voice: '',
        gallery: '',
    });

    useEffect(() => {
        const data = allData();
        const loggedUser = data.users.find(user => user.id === data.loggedUser);
        setFormData({
            username: loggedUser.username,
            password: loggedUser.password,
            favLang: loggedUser.favLang,
            favGenre: loggedUser.favGenre,
            voice: loggedUser.voice,
            gallery: loggedUser.favGallery.toString(),
        });
    }, []);

    const onSubmit = e => {
        e.preventDefault();

        let data = allData();

        // Find the user and update their details
        let userIndex = data.users.findIndex(user => user.id === data.loggedUser);
        data.users[userIndex] = {
            ...data.users[userIndex],
            username: formData.username,
            password: formData.password,
            favLang: formData.favLang,
            favGenre: formData.favGenre,
            voice: formData.voice,
            favGallery: Number(formData.gallery),
        };

        // Save the updated data back to localStorage
        updStorage(data);

        // Redirect back to the user page
        navigate("/user/:id");
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Favorite Language</Form.Label>
                                    <Form.Control as="select" value={formData.favLang} onChange={e => setFormData({ ...formData, favLang: e.target.value })}>
                                        <option value="de">German</option>
                                        <option value="en">English</option>
                                        <option value="es">Spanish</option>
                                        <option value="he">Hebrew</option>
                                        <option value="ru">Russian</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Favorite Genre</Form.Label>
                                    <Form.Control as="select" value={formData.favGenre} onChange={e => setFormData({ ...formData, favGenre: e.target.value })}>
                                        <option value="action">Action</option>
                                        <option value="comedy">Comedy</option>
                                        <option value="drama">Drama</option>
                                        <option value="fantasy">Fantasy</option>
                                        <option value="thriller">Thriller</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Voice</Form.Label>
                                    <Form.Control as="select" value={formData.voice} onChange={e => setFormData({ ...formData, voice: e.target.value })}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Gallery Preference</Form.Label>
                                    <Form.Control as="select" value={formData.gallery} onChange={e => setFormData({ ...formData, gallery: e.target.value })}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="submit">Update</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default EditUserPage;
