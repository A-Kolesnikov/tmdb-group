import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export const RegisterStep2 = ({ setFormData, formData, navigation }) => {
    const [favLang, setFavLang] = useState(formData.favLang || '');
    const [favGenre, setFavGenre] = useState(formData.favGenre || '');

    const onSubmit = e => {
        e.preventDefault();
        setFormData({ ...formData, favLang, favGenre });
        navigation.next();
    };

    return (
        <Card style={{ width: '18rem', backgroundColor: '#f5f5f5' }}>
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Favorite Language</Form.Label>
                        <Form.Control type="text" value={favLang} onChange={e => setFavLang(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Favorite Genre</Form.Label>
                        <Form.Control type="text" value={favGenre} onChange={e => setFavGenre(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Next</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};
