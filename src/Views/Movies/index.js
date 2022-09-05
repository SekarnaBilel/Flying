import figmaOrNotFigma from "../../img/Figma c mieux.png";
import data from "../listDeFilms";
import image from "../../img/imgNotFound.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ListMovies from "../../Components/ListMovies/ListMovies";
import Headers from "../../Components/Header/Headers";

const MoviesList = () => {


  // console.log("search",search);
  // console.log("search",search.toLowerCase());
  return (
    <>
    <Headers />
    <ListMovies />
    </>
  );
};


export default MoviesList;
