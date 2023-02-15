import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteCart,
  getCartProduct,
  updateQuntity,
} from "../../Redux/cart/cart.action";
const CartProductCard = ({
  product,
  qty,
  id,
  title,
  brand,
  category,
  img,
  price,
}) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const toast = useToast();
  useEffect(() => {
    dispatch(getCartProduct(user[0]._id));
  }, [qty]);
  const increaseQty = () => {
    const newQty = qty + 1;
    dispatch(updateQuntity(id, newQty, product));
  };

  const decreaseQty = () => {
    const newQty = qty - 1;
    dispatch(updateQuntity(id, newQty, product));
  };
  const RemoveCart = () => {
    dispatch(deleteCart(id));
    toast({
      title: "",
      description: "Delete Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };
  return (
    <Stack
      maxW={{ base: "100%", md: "630px" }}
      direction={{ base: "column", md: "row" }}
      p="10px"
      pb="20px"
      borderBottom={"1px"}
      borderBottomColor="rgb(214,217,222)"
    >
      <Box maxW="300px">
        <Image maxW={{ base: "100%", md: "200px" }} src={img} />
      </Box>
      <Stack justifyContent={"space-between"} minW="400px">
        <HStack
          alignContent={"center"}
          justifyContent={"space-between"}
          maxW={{ base: "250px", md: "100%" }}
        >
          <Stack direction={"column"}>
            <Heading color={"gray.500"} fontSize={"20px"} fontWeight="400">
              {title}
            </Heading>
            <HStack
              spacing={"20"}
              alignContent={"center"}
              justifyContent={"space-around"}
            >
              <Text>{category}</Text>
              <Text>{brand}</Text>
            </HStack>
          </Stack>
        </HStack>
        <HStack
          justifyContent={"space-between"}
          maxW={{ base: "250px", md: "100%" }}
        >
          <HStack
            p="5px"
            minW={"100px"}
            justifyContent="space-around"
            border={"2px"}
            borderColor="rgb(0,18,51)"
          >
            <Button disabled={qty === 1} onClick={decreaseQty}>
              <BiMinus />
            </Button>
            <Heading fontSize={"17px"} fontWeight="400">
              {qty}
            </Heading>
            <Button onClick={increaseQty} disabled={qty === 7}>
              <MdAdd />
            </Button>
          </HStack>
          <Heading fontSize={"22px"} color="rgb(0,18,51)" fontWeight="400">
            ₹ {price * qty}
          </Heading>
          <MdDelete
            cursor={"pointer"}
            fontSize={"30px"}
            color={"red"}
            onClick={RemoveCart}
          />
        </HStack>
      </Stack>
    </Stack>
  );
};

export default CartProductCard;
