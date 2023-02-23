import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../Redux/Order/Order.action";

const OrderListPage = () => {
  const { isLoding, isError, orderData } = useSelector((store) => store.order);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder());
  }, []);

  return (
    <Container maxW={"90%"} m={"10"}>
      <Heading p={"5"} textAlign={"center"}>
        Your Order
      </Heading>
      <SimpleGrid columns={[1, 2, 4]} spacing="20px">
        {orderData?.map((item) => (
          <Stack spacing={{ base: "4", md: "5" }}>
            <Box
              bg={"white"}
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
              p={"10"}
            >
              <Image
                src={item.product.Thumbnail}
                //   alt={`Picture of ${data.name}`}
                roundedTop="lg"
              />
              <Stack>
                <Stack spacing="1">
                  <Text
                    fontWeight="medium"
                    color={"gray.500"}
                    height={"90px"}
                    overflow={"hidden"}
                  >
                    {item.product.Title}
                  </Text>
                </Stack>
                <HStack>
                  <Text textDecoration={"line-through"} color={"gray.400"}>
                    ₹{item.product.Price}
                  </Text>
                  <Text>₹{item.product.StrikePrice}</Text>
                </HStack>
                <HStack>
                  <Text fontSize="sm" color={"gray.400"}>
                    {item.product.length}
                  </Text>
                </HStack>
                <HStack>
                  <Text size="sm">Brand</Text>
                  <Text size="sm" color={"gray.400"}>
                    {item.product.Subcategory}
                  </Text>
                </HStack>
                <Button
                  colorScheme="blue"
                  width={"100%"}
                  size={"lg"}
                  bg={"#052a62"}
                  _hover={{
                    bg: "#06419b",
                  }}
                >
                  {item.status}
                </Button>
              </Stack>
            </Box>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default OrderListPage;
