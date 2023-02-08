import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import BrandCrousel from "../../Components/Home/BrandCrousel";
import Carousel from "../../Components/Home/Carousel";
import HomeComponents from "../../Components/Home/HomeComponents";

const HomePage = () => {
  return (
    <>
      <Container maxW={"100%"}>
        <Carousel />
        <HomeComponents />
        <BrandCrousel />
      </Container>
    </>
  );
};

export default HomePage;
