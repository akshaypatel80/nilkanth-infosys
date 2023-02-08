import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const HomeComponents = () => {
  return (
    <div>
      <Heading m={"10"} textDecor={"underline"}>
        Best AMD Processor
      </Heading>

      <Flex
        direction={["column", "row"]}
        gap={"20px"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box>
          <Image src="https://i0.wp.com/atozinfosys.com/wp-content/uploads/2023/02/amd-star-wars-jedi-survivor.webp?w=640&ssl=1" />
        </Box>
        <Box>
          <Image src="https://i0.wp.com/atozinfosys.com/wp-content/uploads/2023/02/amd-company-of-heroes-3.webp?w=640&ssl=1" />
        </Box>
      </Flex>
      <Heading
        backgroundColor={"#EFEFEF"}
        mt={"20"}
        pt={"10"}
        textDecor={"underline"}
      >
        ASUS Chromebook
      </Heading>
      <Flex
        backgroundColor={"#EFEFEF"}
        p={"8"}
        direction={["column", "row"]}
        gap={"20px"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box width={{ base: "100%", md: "60%" }}>
          <Image
            src="https://dlcdnwebimgs.asus.com/files/media/68f1107b-843b-4cf7-9f46-9d3cfa037928/v1/features/images/large/1x/s1/main.jpg"
            width={"100%"}
          />
        </Box>
        <Box width={{ base: "100%", md: "50%" }}>
          <Text textAlign={"justify"}>
            ASUS Chromebook CM14 is made for boosting productivity and having
            more fun — all day, every day. An efficient MediaTek Kompanio 520
            processor and up to 15-hour battery life1 gives you the freedom to
            stay productive throughout the day. The device also opens a gateway
            to the best of Google, including the rich library of apps for work
            and play, including the rich library of apps for work and play,
            found on Google Play2. With speedy performance, robust security and
            convenient features, ASUS Chromebook CM14 is not only perfect for
            students and teachers — it’s ideal for anyone, anytime!
          </Text>
        </Box>
      </Flex>
      <Box m={"10"}>
        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Storage/August/One_Touch_SSD_1500x300_4_1.jpg" />
      </Box>
    </div>
  );
};

export default HomeComponents;
