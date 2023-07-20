import React, { useState } from 'react';
import { allData, removeMovieFromUser } from '../Service/LocalStorageManager';
import { Container, Row, Col, Card as BootstrapCard, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const UserPage = () => {
    const data = allData();
    const loggedUser = data.users.find(user => user.id === data.loggedUser);
    const navigate = useNavigate();
    const [viewedMovies, setViewedMovies] = useState(loggedUser.viewedMovies);

    const handleRemoveMovie = (movieId) => {
        removeMovieFromUser(movieId);
        const updatedMovies = viewedMovies.filter(movie => movie.id !== movieId);
        setViewedMovies(updatedMovies);
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <BootstrapCard>
                        <BootstrapCard.Body>
                            <BootstrapCard.Title>User Details</BootstrapCard.Title>
                            <BootstrapCard.Text>
                                <p><strong>Username:</strong> {loggedUser.username}</p>
                                <p><strong>Favorite Language:</strong> {loggedUser.favLang}</p>
                                <p><strong>Favorite Genre:</strong> {loggedUser.favGenre}</p>
                                <p><strong>Gallery Preference:</strong> {loggedUser.favGallery}</p>
                                <p><strong>Voice:</strong> {loggedUser.voice}</p>
                            </BootstrapCard.Text>
                            <BootstrapCard.Title>Viewed Movies</BootstrapCard.Title>
                            <div className="d-flex flex-wrap justify-content-around">
                                {viewedMovies.filter(movie => movie !== null).map(movie => {
                                    if (movie && movie.id && movie.poster_path && movie.title && movie.overview) {
                                        return (
                                            <div key={movie.id}>
                                                <Card 
                                                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                    h5={movie.title}
                                                    txt={movie.overview}
                                                    movie={movie} 
                                                />
                                                <Button variant="danger" onClick={() => handleRemoveMovie(movie.id)}>
                                                    Remove
                                                </Button>
                                            </div>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                            <Button variant="primary" onClick={() => navigate('/edituser')}>Edit User</Button>
                        </BootstrapCard.Body>
                    </BootstrapCard>
                </Col>
            </Row>
        </Container>
    );
}

export default UserPage;
