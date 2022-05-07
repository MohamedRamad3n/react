import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Books from "./components/Books";
import "./App.css";
import RelatedBook from "./components/RelatedBook";
import AddNewBook from "./components/addNewBook";
// {routes,navLink, useNavigate,error(noMatch),Nested Routes}  v6
function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Dom 6</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Books" element={<Books />}>
            <Route path="RelatedBook" element={<RelatedBook />} />
            <Route path="AddNewBook" element={<AddNewBook />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
