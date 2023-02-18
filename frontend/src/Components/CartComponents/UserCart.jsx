import { Box, Flex, Heading, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProduct } from "../../Redux/cart/cart.action";
import CartProductCard from "./CartProductCard";

const UserCart = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const { message, isError, cartData } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartProduct(user[0]._id));
  }, []);
  console.log(cartData);
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      maxW="100vw"
      overflow={"hidden"}
      justifyContent="space-between"
      p="40px"
    >
      <Stack direction={"column"} spacing="20px">
        <Heading
          fontSize={"19px"}
          pl="10px"
          color="rgb(0,18,51)"
          pb="20px"
          borderBottom={"2px"}
          borderBottomColor="rgb(0,18,51)"
        >
          Your Cart
        </Heading>
        {cartData?.map((ele) => {
          return (
            <CartProductCard
              product={ele.product._id}
              productQunt={ele.product.Quantity}
              key={ele.product._id}
              qty={ele.Quantity}
              id={ele._id}
              title={ele.product.Title}
              brand={ele.product.Subcategory}
              category={ele.product.Category}
              img={ele.product.Thumbnail}
              price={ele.product.StrikePrice}
            />
          );
        })}
        {cartData?.length == 0 ? (
          <Image src="https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png" />
        ) : (
          ""
        )}
      </Stack>

      <Stack direction="column">total</Stack>
    </Stack>
  );
};

export default UserCart;
