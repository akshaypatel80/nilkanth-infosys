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
        {laptopData.Onsale ? (
          <Text
            position="absolute"
            top={2}
            left={2}
            bg={"green.400"}
            // w={"10%"}
            p={"2"}
            color={"white"}
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
          >
            {laptopData.Onsale}
          </Text>
        ) : null}
        <Image
          src={laptopData.Thumbnail}
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
              <Link to={`/singlProduct/${laptopData._id}`}>
                {laptopData.Title}
              </Link>
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
      </Box>
    </Stack>
  );
};

export default LaptopCard;
