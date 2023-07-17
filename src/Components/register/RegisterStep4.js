import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export const RegisterStep4 = ({ setFormData, formData, navigation }) => {
    const [voice, setVoice] = useState(formData.voice || '');

    const onSubmit = e => {
        e.preventDefault();
        setFormData({ ...formData, voice });
        navigation.next();
    };

    return (
        <Card style={{ width: '18rem', backgroundColor: '#f5f5f5' }}>
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Voice for Audio</Form.Label>
                        <Form.Control type="text" value={voice} onChange={e => setVoice(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Next</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};
