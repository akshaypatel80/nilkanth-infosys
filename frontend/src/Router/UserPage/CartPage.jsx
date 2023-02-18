import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import Total from "../../Components/CartComponents/Total";
import UserCart from "../../Components/CartComponents/UserCart";

const CartPage = () => {
  return (
    <Container maxW={"100%"}>
      <Stack
        direction={{ base: "column", md: "row" }}
        maxW="100vw"
        overflow={"hidden"}
        justifyContent="space-between"
        p="40px"
      >
        <UserCart />
        <Total />
      </Stack>
    </Container>
  );
};

export default CartPage;
