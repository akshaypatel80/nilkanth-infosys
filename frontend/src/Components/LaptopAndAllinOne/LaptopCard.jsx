import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const LaptopCard = ({ laptopData }) => {
  return (
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
        <Button position="absolute" top={2} right={2} variant={"outline"}>
          <AiOutlineHeart size={"25px"} />
        </Button>
        <Image
          src={laptopData.Thumbnail}
          //   alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />

        <Stack>
          <Stack spacing="1">
            <Text fontWeight="medium" color={"gray.500"}>
              {laptopData.Title}
            </Text>
          </Stack>
          <HStack>
            <Text textDecoration={"line-through"} color={"gray.400"}>
              ₹{laptopData.Price}
            </Text>
            <Text>₹{laptopData.StrikePrice}</Text>
          </HStack>
          <HStack>
            <Text size="sm">{laptopData.rating}</Text>
            <Text fontSize="sm" color={"gray.400"}>
              12 Reviews
            </Text>
          </HStack>
          <HStack>
            <Text size="sm">Brand</Text>
            <Text size="sm" color={"gray.400"}>
              {laptopData.Subcategory}
            </Text>
          </HStack>
        </Stack>

        <Stack align="center">
          <Button
            colorScheme="blue"
            width="full"
            bg={"#052a62"}
            _hover={{
              bg: "#06419b",
            }}
          >
            Add to cart
          </Button>
          <Link to={`/singlProduct/${laptopData._id}`}>Quick view</Link>
        </Stack>
      </Box>
    </Stack>
  );
};

export default LaptopCard;
