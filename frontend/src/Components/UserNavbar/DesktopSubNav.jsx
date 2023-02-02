import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const DesktopSubNav = ({ label, href }) => {
  return (
    <Link to={href}>
      <Stack
        direction={"row"}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: "gray.100" }}
      >
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#052A62" }}
            fontWeight={500}
            textAlign={"left"}
            // fontSize={"20px"}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        ></Flex>
      </Stack>
    </Link>
  );
};

export default DesktopSubNav;
