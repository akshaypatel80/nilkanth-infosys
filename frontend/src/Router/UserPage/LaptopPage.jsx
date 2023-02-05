import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import FilterComponents from "../../Components/LaptopAndAllinOne/FilterComponents";
import LaptopList from "../../Components/LaptopAndAllinOne/LaptopList";

const LaptopPage = () => {
  return (
    <Container maxW={"100%"}>
      <Flex gap={"20px"}>
        <Box
          w={"20%"}
          height={"100 vh"}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          display={{ base: "none", md: "flex" }}
        >
          <FilterComponents />
        </Box>
        <Box w={"80%"}>
          <LaptopList />
        </Box>
      </Flex>
    </Container>
  );
};

export default LaptopPage;
