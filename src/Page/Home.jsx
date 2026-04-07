import React from "react";
import Hero from "../Components/Header/Hero";
import Main from "../Components/Header/Main ";
import Place from "../Components/Header/Place";
import ChooseUs from "../Components/Header/ChooseUs";
import Deals from "../Components/Header/Deals";
import VideoPlace from "../Components/Header/VideoPlace";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Main></Main>
      <Place></Place>
      <ChooseUs></ChooseUs>
      <Deals></Deals>
      <VideoPlace></VideoPlace>
    </div>
  );
};

export default Home;
