import React, { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const slider = useRef();
  const { user } = UserAuth();

  const sliderLeft = () => {
    slider.current.scrollLeft -= 500;
  };

  const sliderRight = () => {
    slider.current.scrollLeft += 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);

      await updateDoc(doc(db, "users", `${user?.email}`), {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="title">My Shows</h2>
      <div className="flex items-center group">
        <MdChevronLeft
          className="bg-white rounded-full absolute group-hover:block  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden "
          size={30}
          onClick={sliderLeft}
        />
        <div
          ref={slider}
          className="overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies?.map((movie) => {
            return (
              <div className="movie" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.img}`}
                  alt="/"
                />
                <div className="movie-inside">
                  <p>{movie.title}</p>
                  <p onClick={() => deleteShow(movie.id)} className="heart">
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          className="bg-white right-1 hidden  rounded-full absolute group-hover:block  opacity-50 hover:opacity-100 cursor-pointer z-10 "
          size={30}
          onClick={sliderRight}
        />
      </div>
    </>
  );
};

export default SavedShows;
