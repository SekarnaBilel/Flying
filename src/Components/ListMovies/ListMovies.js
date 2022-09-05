import React from "react";
import figmaOrNotFigma from "../../img/Figma c mieux.png";
import data from "../../Views/listDeFilms";
import "./listMovies.css";
import image from "../../img/imgNotFound.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const ListMovies = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [article, setArticle] = useState("");


  const dispatch = useDispatch();

  const createNotification = (type) => {
      switch (type) {
        case 'success':
          NotificationManager.success( 'Votre film a été ajouter avec succes');
          break;
      }
  };

  return (
    <>
      <div className="search">
        <input
          className="searchInput"
          type="text"
          placeholder="Entrez le titre d'un film"
          id="search-input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>
      <div className="wrapper">
        {data
          .filter((article) => {
            if (search == "") {
              return true;
            } else if (article.title != undefined) {
              
                article.title.toLowerCase().includes(search.toLowerCase());
              return article.title.toLowerCase().includes(search.toLowerCase());
            } else {
              return false;
            }
          })
          .map((article, k) => {
            return (
              <div key={k}>
                <div className="card">
                  <img
                    className="img"
                    onClick={() => {
                      setOpen(!open);
                      setArticle(article);
                    }}
                    src={article.poster_path ? article.poster_path : image}
                  />
                  <div  
                    onClick={() => {
                      createNotification("success");
                      dispatch({
                        type: "like/add",
                        payload: article,
                      })}
                    }
                    className="heart"
                  >
                    <IoIosAddCircle />
                  </div>
                </div>
              </div>
            );
          })}
                      < NotificationContainer />
        <Modal open={open} close={() => setOpen(!open)} data={article} />
      </div>
    </>
  );
};

export default ListMovies;
