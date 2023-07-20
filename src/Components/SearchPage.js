import React, { useState, useEffect } from "react";
import { searchMovies, downloadGenres, downloadMovieList } from '../Service/TMDBManager';
import Card from './Card';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function SearchPage({loggedUserID}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");

    useEffect(() => {
        downloadGenres(setGenres, loggedUserID);
        downloadMovieList(setSearchResults, 3, loggedUserID); // Fetch upcoming movies by default
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        searchMovies(setSearchResults, searchQuery);
    };

    const filteredResults = selectedGenre ? searchResults.filter(movie => movie.genre_ids.includes(parseInt(selectedGenre))) : searchResults;

    return (
        <Container>
            <Form onSubmit={handleSearchSubmit} className="mb-3">
                <Form.Group controlId="searchQuery">
                    <Form.Control type="text" placeholder="Search Movies..." value={searchQuery} onChange={handleSearchChange} />
                </Form.Group>
                <Form.Group controlId="selectGenre" className="mt-3">
                    <Form.Control as="select" value={selectedGenre} onChange={handleGenreChange}>
                        <option value="">All genres</option>
                        {genres.map(genre => (
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Search
                </Button>
            </Form>
            <Row className="card-container">
                {filteredResults.map(movie => (
                    <Col sm={3} className="mb-4" key={movie.id}>
                        <Card
                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            h5={movie.title}
                            txt={movie.overview}
                            movie={movie}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default SearchPage;
