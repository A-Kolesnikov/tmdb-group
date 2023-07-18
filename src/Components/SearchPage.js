import React, { useState, useEffect } from "react";
import Card from "./Card";

const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(
                search
                    ? `https://api.themoviedb.org/3/search/movie?api_key=76222a968c469d597af4f8040683e1ae&language=en-US&query=${search}&page=1&include_adult=false`
                    : `https://api.themoviedb.org/3/movie/popular?api_key=76222a968c469d597af4f8040683e1ae&language=en-US&page=1`
            );
            const data = await response.json();
            setMovies(data.results);
        };

        fetchMovies();
    }, [search]);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="container">
            <div className="mb-3">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search Movies..."
                    className="form-control"
                />
            </div>
            <h2>Popular Movies</h2>
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-sm-3 mb-4" key={movie.id}>
                        <Card
                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            h5={movie.original_title}
                            txt={movie.overview.substring(0, 100) + "..."}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
