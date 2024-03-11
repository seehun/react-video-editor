import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "pages/Login";
import VideoEdit from "pages/VideoEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/videoEdit" element={<VideoEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
