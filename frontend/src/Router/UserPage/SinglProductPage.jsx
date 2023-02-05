import { Container, Flex, Image, Stack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const getSinglProduct = async (id) => {
  try {
    let res = await axios.get(`http://localhost:8080/product/${id}`);
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
  return (
    <Container maxW={"80%"} pt={"25px"}>
      <Flex gap={"20"}>
        <Stack border={"1px solid red"} width={"100%"}>
          <Image src={data.Thumbnail} />
        </Stack>
        <VStack border={"1px solid green"}>
          <Text textAlign={"left"}>{data.Title}</Text>
          <VStack textAlign={"left"}>
            {dis?.map((el) => (
              <Text>{el}</Text>
            ))}
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default SinglProductPage;
