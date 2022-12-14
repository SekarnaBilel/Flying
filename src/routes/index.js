import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../Views/Homepage"
import Login from "../Views/Login"
import Movies from '../Views/Movies'
import Liked from '../Views/Movies/Liked';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="movies-list" element={<Movies/>}/>
      <Route path="coup-de-coeurs" element={<Liked/>}/>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  </BrowserRouter>
);

export default Router;