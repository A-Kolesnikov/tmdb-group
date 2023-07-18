import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const languages = [
    {code: 'de', name: 'German'},
    {code: 'en', name: 'English'},
    {code: 'es', name:'Spanish'},
    {code: 'he', name: 'Hebrew'},
    {code: 'ru', name: 'Russian'}
];

const genres = [
    "Comedy",
    "Drama",
    "Action",
    "Thriller",
    "Horror"
];

export const RegisterStep2 = ({ setFormData, formData, navigation }) => {
    const { favLang, favGenre } = formData;

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
                        <Form.Control as="select" value={favLang} onChange={e => setFormData({ ...formData, favLang: e.target.value })}>
                            {languages.map((language, index) => (
                                <option key={index} value={language.code}>{language.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Favorite Genre</Form.Label>
                        <Form.Control as="select" value={favGenre} onChange={e => setFormData({ ...formData, favGenre: e.target.value })}>
                            {genres.map((genre, index) => (
                                <option key={index} value={genre}>{genre}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">Next</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};
