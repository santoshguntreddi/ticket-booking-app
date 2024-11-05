import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies-container";
import MovieDetails from "./pages/movie-details";
import BookingHistory from "./pages/bookings";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/bookings" element={<BookingHistory />} />
    </Routes>
  );
};

export default Routing;
