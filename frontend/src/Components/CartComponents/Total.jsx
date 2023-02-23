import {
  Button,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addOrder } from "../../Redux/Order/Order.action";

const Total = () => {
  const { cartData } = useSelector((store) => store.cart);
  const { isLoding, isError } = useSelector((store) => store.order);
  const [total, settotal] = useState(0);
  const dispatch = useDispatch();
  const toast = useToast();
  const totalData = () => {
    let data = 0;
    cartData.forEach((e) => {
      data += e.Quantity * e.product.StrikePrice;
    });

    settotal(data);
  };

  useEffect(() => {
    totalData();
  }, [cartData]);
  console.log(cartData);
  return (
    <Stack
      hidden={cartData.length == 0}
      direction={"column"}
      bgColor={"gray.200"}
      minW={{ base: "", md: "400px" }}
      maxW="100vw"
      p="20px"
      gap="20px"
      maxH="400px"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
    >
      <Heading color="rgb(0,18,51)" fontSize="22px">
        Summary
      </Heading>
      <Stack direction={"column"}>
        <HStack minW={"full"} justifyContent="space-between">
          <Text>Subtotal</Text>
          <Text>₹ {total}</Text>
        </HStack>
        <HStack minW={"full"} justifyContent="space-between">
          <Text>Shipping Price ₹82</Text>
          <Text>₹ {total + 82}</Text>
        </HStack>
        <Divider />
        <HStack minW={"full"} justifyContent="space-between">
          <Text>Tax (GST 18%)</Text>
          <Text>₹ {(total * 18) / 100}</Text>
        </HStack>
      </Stack>
      <HStack minW={"full"} justifyContent="space-between">
        <Heading fontSize="22px">Balance</Heading>
        <Heading fontSize="22px">₹ {(total * 18) / 100 + total} </Heading>
      </HStack>
      {isLoding ? (
        <Button
          isLoading
          loadingText="Loading"
          colorScheme="facebook"
          variant="outline"
          spinnerPlacement="end"
        >
          <Link to={"/user/order"}>Checkout</Link>
        </Button>
      ) : (
        <Button
          bg={"#052a62"}
          color={"white"}
          _hover={{
            bg: "#06419b",
          }}
          onClick={() => {
            dispatch(addOrder());
          }}
        >
          Checkout
        </Button>
      )}
    </Stack>
  );
};

export default Total;
