import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Movies from "./pages/Movies";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
