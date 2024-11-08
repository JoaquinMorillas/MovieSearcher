import React from "react";

export const Card = ({ imageUrl, movieTitle, movieDescription, movieReleaseYear}) => {
  return (
    <div
      className="card"
      style={{
        width: "20rem",
        margin: "10px",
        backgroundColor: "grey",
        color: "white",
      }}
    >
      <img src={imageUrl} className="card-img-top" alt={movieTitle} />
      <div className="card-body">
        <h5 className="card-title">{movieTitle}</h5>
        <h6 className="card-text">Release year: {movieReleaseYear}</h6>
        <p className="card-text">{movieDescription}</p>
      </div>
    </div>
  );
};
