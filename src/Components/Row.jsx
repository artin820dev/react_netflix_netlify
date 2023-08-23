import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie.jsx";

const Row = ({ title, req }) => {
  const [movies, setMovies] = useState([]);

  const slider = useRef();

  useEffect(() => {
    axios.get(req).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const sliderLeft = () => {
    slider.current.scrollLeft -= 500;
  };

  const sliderRight = () => {
    slider.current.scrollLeft += 500;
  };

  return (
    <>
      <h2 className="title">{title}</h2>
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
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
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

export default Row;
