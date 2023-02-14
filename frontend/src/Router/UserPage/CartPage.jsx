import { Container } from "@chakra-ui/react";
import React from "react";
import UserCart from "../../Components/CartComponents/UserCart";

const CartPage = () => {
  return (
    <Container maxW={"100%"}>
      <UserCart />
    </Container>
  );
};

export default CartPage;
