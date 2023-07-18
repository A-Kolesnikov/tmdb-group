import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export const RegisterStep3 = ({ setFormData, formData, navigation }) => {
    const [gallery, setGallery] = useState(formData.gallery || '');

    const onSubmit = e => {
        e.preventDefault();
        setFormData({ ...formData, gallery });
        navigation.next();
    };

    return (
        <Card style={{ width: '18rem', backgroundColor: '#f5f5f5' }}>
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Choose Gallery</Form.Label>
                        <Form.Control as="select" value={gallery} onChange={e => setGallery(e.target.value)}>
                            <option value="">Select</option>
                            <option value="0">Most Popular</option>
                            <option value="1">Top Rated</option>
                            <option value="2">Upcoming</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">Next</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};
