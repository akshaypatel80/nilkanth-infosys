import {
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCartData } from "../../Redux/cart/cart.action";
const getSinglProduct = async (id) => {
  try {
    let res = await axios.get(
      `https://nilkanth-infosys.onrender.com/product/${id}`
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
const SinglProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [productQuntity, setProductQuntity] = useState(0);
  const user = JSON.parse(localStorage.getItem("userData"));
  const { message } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const toast = useToast();
  console.log(message);
  useEffect(() => {
    getSinglProduct(id).then((res) => {
      setData(res.totalProduct);
    });
  }, [id]);
  const hendelAddtoCart = () => {
    const newcart = {
      userID: user[0]._id,
      product: data._id,
      Quantity: Number(productQuntity),
    };
    dispatch(addToCartData(newcart));
    toast({
      title: "",
      description: message,
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };
  const quantity = (total) => {
    let q = new Array(total).fill(1);
    for (let i = 1; i < total; i++) {
      q[i] = i;
    }
    return q;
  };
  let qun = quantity(data.Quantity);

  let dis;
  if (data.Description) {
    dis = data.Description.split("|").map(String);
  }
  // console.log(data);
  return (
    <Container maxW={"80%"} pt={"25px"}>
      <Flex
        gap={"20"}
        justifyContent={"center"}
        align={"center"}
        direction={["column", "row"]}
      >
        <Stack width={["150%", "100%"]} p={"10"}>
          <Image src={data.Thumbnail} />
        </Stack>
        <Stack
          textAlign={"left"}
          p={"10"}
          scaleY={"20"}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
        >
          {data.Onsale ? (
            <Text
              bg={"green.400"}
              w={["25%", "15%"]}
              p={"2"}
              color={"white"}
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              textAlign={"center"}
            >
              {data.Onsale}
            </Text>
          ) : null}
          <Text fontSize={["23px", "25px"]} fontWeight={"500"}>
            {data.Title}
          </Text>
          <HStack gap={"15px"}>
            <Text
              textDecoration={"line-through"}
              color={"gray.400"}
              fontSize={"20px"}
            >
              ₹{data.Price}
            </Text>
            <Text fontSize={"20px"} fontWeight={"600"}>
              ₹{data.StrikePrice}
            </Text>
          </HStack>
          <Text
            bg={"green"}
            w={["40%", "25%"]}
            p={"2"}
            color={"white"}
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            textAlign={"center"}
          >
            Rating:{data.rating}
          </Text>
          <Stack>
            <ul>
              {dis?.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
            <Text fontSize={["15px", "17px"]} fontWeight={"500"}>
              Category:{data.Subcategory}
            </Text>
          </Stack>
          <Select
            placeholder="Select Quntity"
            onChange={(e) => setProductQuntity(e.target.value)}
          >
            {qun.map((ele) => (
              <option value={ele}>{ele}</option>
            ))}
          </Select>
          <HStack pt={"20px"}>
            <Button
              colorScheme="blue"
              width={"40%"}
              size={"lg"}
              bg={"#052a62"}
              _hover={{
                bg: "#06419b",
              }}
              onClick={hendelAddtoCart}
            >
              Add to cart
            </Button>
            <Button
              colorScheme="blue"
              width={"40%"}
              size={"lg"}
              bg={"#052a62"}
              _hover={{
                bg: "#06419b",
              }}
            >
              Wishlist
            </Button>
          </HStack>
        </Stack>
      </Flex>
    </Container>
  );
};

export default SinglProductPage;
