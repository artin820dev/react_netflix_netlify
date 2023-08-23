import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
import { UserAuth } from "../context/AuthContext";

const Main = () => {
  const [movies, setMovies] = useState("");
  const { user } = UserAuth();

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const rand = Math.floor(Math.random() * 20);
  const targetMovie = movies[rand];

  const cut = (text) => {
    if (text?.length > 150) {
      return text.slice(0, 150);
    }
    return text;
  };

  return (
    <div className="main">
      <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${targetMovie?.backdrop_path}`}
        alt=""
      />
      <div className="main__second">
        <h3>{targetMovie?.original_title}</h3>
        <div className="second__child">
          <button>Play</button>
          <button className="button--second">Watch Later</button>
        </div>
        <p>Realesed {targetMovie?.release_date}</p>
        <p className="overview">{cut(targetMovie?.overview)}...</p>
      </div>
    </div>
  );
};

export default Main;
