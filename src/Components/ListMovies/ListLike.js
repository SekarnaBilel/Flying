import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../redux";
import image from "../../img/imgNotFound.jpg";
import "./listMovies.css";
import { RiDeleteBin7Fill } from "react-icons/ri";
import Modal from "../Modal/Modal";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';



const ListLike = () => {
  const [open, setOpen] = useState(false);
  const [article, setArticle] = useState("");
  const [search, setSearch] = useState("");

  const data = useSelector((state) => state.like);

  console.log("data", data);
  const dispatch = useDispatch();

  const createNotification = (type) => {
    switch (type) {
      case 'error':
        NotificationManager.error('votre film a été supprimer');
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
            console.log("article", article.title);

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
                    onClick={() =>{ 
                      createNotification("error");
                        dispatch({
                          type: "like/delete",
                          payload: article.id,
                        })}
                    }
                    className="heart"
                  >
                    <RiDeleteBin7Fill />
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

export default ListLike;
