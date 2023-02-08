import {
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  useEffect(() => {
    getSinglProduct(id).then((res) => {
      setData(res.totalProduct);
    });
  }, [id]);

  let dis;
  if (data.Description) {
    dis = data.Description.split("|").map(String);
  }
  console.log(data);
  return (
    <Container maxW={"80%"} pt={"25px"}>
      <Flex gap={"20"} justifyContent={"center"} align={"center"}>
        <Stack width={"100%"} p={"10"}>
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
          <Text
            bg={"green.400"}
            w={"10%"}
            p={"2"}
            color={"white"}
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
          >
            {data.Onsale}
          </Text>
          <Text fontSize={"25px"} fontWeight={"500"}>
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
            w={"19%"}
            p={"2"}
            color={"white"}
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
          >
            Rating:{data.rating}
          </Text>
          <Stack>
            <ul>
              {dis?.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
            <Text fontSize={"17px"} fontWeight={"500"}>
              Category:{data.Subcategory}
            </Text>
          </Stack>
          <HStack pt={"20px"}>
            <Button
              colorScheme="blue"
              width={"40%"}
              size={"lg"}
              bg={"#052a62"}
              _hover={{
                bg: "#06419b",
              }}
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
