import "./App.css";
import api from "./api/axiosConfig";
import {useEffect, useState} from "react";
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home"
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";

function App() {
    const [movies, setMovies] = useState([]);
    const [singleMovie, setSingleMovie] = useState();
    const [movieReviews, setMovieReviews] = useState([]);

    const getAllMovies = async () => {
        try {
            const response = await api.get("/api/v1/movies");
            console.log(response);
            setMovies(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllMovies();
    }, []);

    const getSingleMovie = async (movieId) => {
        try {
            const response = await api.get(`/api/v1/movies/${movieId}`);
            const singleMovie = response.data;
            setSingleMovie(singleMovie);
            setMovieReviews(singleMovie.reviewIds);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home movies={movies}/>}></Route>
                    <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
                    <Route path="Reviews/:movieId" element={<Reviews getMovieData={getSingleMovie} movie={singleMovie} reviews={movieReviews} setReviews={setMovieReviews}/>}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App;
