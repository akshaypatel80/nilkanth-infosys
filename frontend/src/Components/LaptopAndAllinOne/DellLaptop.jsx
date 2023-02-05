import { Box, Container, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLaptop } from "../../Redux/Laptop/laptop.action";
import LaptopCard from "./LaptopCard";

const DellLaptop = () => {
  const { laptop, loding } = useSelector((store) => store.laptopAndAllinOne);
  const dispatch = useDispatch();
  useEffect(() => {
    const getLaptopParams = {
      params: {
        Subcategory: "Dell",
      },
    };

    dispatch(getLaptop(getLaptopParams));
  }, []);
  if (loding) {
    return (
      <SimpleGrid columns={[1, 2, 4]} spacing="20px">
        <Skeleton>
          <Box height="200px"></Box>
        </Skeleton>
        <Skeleton>
          <Box height="200px"></Box>
        </Skeleton>
        <Skeleton>
          <Box height="200px"></Box>
        </Skeleton>
        <Skeleton>
          <Box height="200px"></Box>
        </Skeleton>
        <Skeleton>
          <Box height="200px"></Box>
        </Skeleton>
        <Skeleton>
          <Box height="200px"></Box>
        </Skeleton>
      </SimpleGrid>
    );
  }
  return (
    <Container maxW={"80%"}>
      <SimpleGrid columns={[1, 2, 4]} spacing="20px">
        {laptop.map((item) => (
          <LaptopCard laptopData={item} key={item.id} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default DellLaptop;
