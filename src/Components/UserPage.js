import React from 'react';
import { allData } from '../Service/LocalStorageManager';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const data = allData();
    const loggedUser = data.users.find(user => user.id === data.loggedUser);
    const navigate = useNavigate();

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>User Details</Card.Title>
                            <Card.Text>
                                <p><strong>Username:</strong> {loggedUser.username}</p>
                                <p><strong>Favorite Language:</strong> {loggedUser.favLang}</p>
                                <p><strong>Favorite Genre:</strong> {loggedUser.favGenre}</p>
                                <p><strong>Gallery Preference:</strong> {loggedUser.favGallery}</p>
                                <p><strong>Voice:</strong> {loggedUser.voice}</p>
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate('/edituser')}>Edit User</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default UserPage;
