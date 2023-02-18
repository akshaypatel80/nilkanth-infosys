import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Select,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
  productQunt,
}) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const toast = useToast();
  const [productQuntity, setProductQuntity] = useState(qty);
  useEffect(() => {
    dispatch(getCartProduct(user[0]._id));
  }, [qty]);
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
  const quantity = (total) => {
    let q = new Array(total).fill(1);
    if (total <= 1) {
      return;
    } else {
      for (let i = 0; i < total; i++) {
        q[i] = i;
      }
    }
    return q;
  };
  let qun = quantity(productQunt);
  console.log(qun);
  const hendleCangeQut = (e) => {
    setProductQuntity(e.target.value);
    dispatch(updateQuntity(id, productQuntity, product));
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
          <Select
            placeholder="Select Quntity"
            onChange={hendleCangeQut}
            isDisabled={qty <= 0}
            value={qty}
            width={"20%"}
          >
            {qun.map((ele) => (
              <option value={ele}>{ele}</option>
            ))}
          </Select>
          <Heading fontSize={"20px"} color="rgb(0,18,51)" fontWeight="400">
            ₹ {price * productQuntity}
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
