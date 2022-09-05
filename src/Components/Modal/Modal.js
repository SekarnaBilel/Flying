import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  Children,
} from "react";
import "./Modal.css";
import image from "../../img/imgNotFound.jpg";

function Modal({ open, close, data }) {
  if (!open) return null;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="containerLeft">
          <div>
            <img
              id="poster"
              src={data.poster_path ? data.poster_path : image}
            />
          </div>
        </div>
        <div className="containerRight">
          <button className="btn" onClick={close}>
            X
          </button>
          <h1 className="titles">{data.title}</h1>
          <p className="description">{data.overview.substr(0, 150)}...</p>
          <div className="center">
            <div>Sortie le : {data.release_date}</div>
            <div>Type : {data.media_type ? data.media_type : "undefined"}</div>
            <div>
              <span>⭐</span>
              {data.vote_average}/10
            </div>
            <div>💖 {data.vote_count} avis</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
