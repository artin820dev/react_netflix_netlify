import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { updateDoc, doc, arrayUnion, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Movie = ({ movie }) => {
  const { user } = UserAuth();
  const [like, setLike] = useState(false);
  const [likedmovie, setLikedmovie] = useState();

  const likeHandler = () => {
    if (user) {
      if (like) {
        try {
          const result = likedmovie.filter((film) => film.id !== movie.id);

          updateDoc(doc(db, "users", `${user?.email}`), {
            savedShows: result,
          });
        } catch (error) {
          console.log(error.message);
        }
      } else {
        updateDoc(doc(db, "users", `${user?.email}`), {
          savedShows: arrayUnion({
            id: movie.id,
            title: movie.title,
            img: movie.backdrop_path,
          }),
        });
      }
      setLike(!like);
    } else {
      alert("you should login first");
    }
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setLikedmovie(doc.data()?.savedShows);
    });
  }, [user]);

  useEffect(() => {
    const isMovieLiked = likedmovie?.some((film) => film.id === movie.id);
    setLike(isMovieLiked);
  }, [likedmovie]);

  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt="/"
      />
      <div className="movie-inside">
        <p>{movie.title}</p>
        <p className="heart" onClick={likeHandler}>
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  );
};

export default Movie;
