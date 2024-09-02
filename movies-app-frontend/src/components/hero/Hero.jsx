import './Hero.css'
import React from 'react';
import Carousel from "react-material-ui-carousel";
import {Paper} from "@mui/material"
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useNavigate} from 'react-router-dom'
import Button from "react-bootstrap/Button";

export default function Hero({movies}) {
    const navigate = useNavigate();
    const goToReviews = (movieId) => {
        navigate(`Reviews/${movieId}`);
    }
    return (
        <div className="movies-carousel-container">
            <Carousel>
                {
                    movies.map(movie => {
                        return (
                            <Paper key={movie.imdbId}>
                                <div className="movie-card-container">
                                    <div className="movie-card"
                                         style={{"--backdrop-img": `url(${movie.backdrops[0]})`}}>
                                        <div className="movie-card-details">
                                            <div className="movie-card-poster">
                                                <img src={movie.poster} alt=""/>
                                            </div>
                                            <div className="movie-card-title">
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className="movie-buttons-container">
                                                <Link
                                                    to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                    <div className="play-button-icon-container">
                                                        <FontAwesomeIcon className="play-button-icon"
                                                                         icon={faCirclePlay}/>
                                                    </div>
                                                </Link>
                                                <div className="movie-review-button-container">
                                                    <Button variant="info" onClick={() => goToReviews(movie.imdbId)}>Reviews</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>);
                    })
                }
            </Carousel>
        </div>
    );
}
