import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import TvSeries from "./pages/Tv";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import People from "./pages/People";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TvSeries />} />
        <Route path="/people" element={<People />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
