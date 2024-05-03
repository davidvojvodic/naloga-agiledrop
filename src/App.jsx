import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

// import Movies from "./pages/Movies";
import Home from "./pages/Home";

import TvSeries from "./pages/Tv";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Home />} />
        <Route path="/tv" element={<TvSeries />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
