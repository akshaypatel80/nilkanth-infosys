import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import DesktopAccessories from "../../Components/DesktopAccessories/DesktopAccessories";
import DesktopFilterComponents from "../../Components/DesktopAccessories/DesktopFilterComponents";

const DesktopPage = () => {
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
          <DesktopFilterComponents />
        </Box>
        <Box w={"80%"}>
          <DesktopAccessories />
        </Box>
      </Flex>
    </Container>
  );
};

export default DesktopPage;
