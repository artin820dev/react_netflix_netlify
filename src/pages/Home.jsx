import React from "react";
import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up Coming" req={requests.requestUpcoming} />
      <Row title="Popular" req={requests.requestPopular} />
      <Row title="Trending" req={requests.requestTrending} />
      <Row title="Top Rated" req={requests.requestTopRated} />
      <Row title="cartoon" req={requests.requestHorror} />
    </>
  );
};

export default Home;
