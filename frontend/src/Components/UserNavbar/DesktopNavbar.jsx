import {
  Box,
  // Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import DesktopSubNav from "./DesktopSubNav";
import { navdata } from "./navdata";

const DesktopNavbar = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {navdata.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              {/* <Link
                p={2}
                href={navItem.href ?? "/"}
                fontSize={"medium"}
                fontWeight={500}
                color={"#052a62"}
                _hover={{
                  textDecoration: "none",
                  color: "gray.400",
                }}
              >
                {navItem.label}
              </Link> */}
              <Link to={navItem.href ?? "/"}>
                <Text
                  p={2}
                  href={navItem.href ?? "/"}
                  fontSize={"medium"}
                  fontWeight={500}
                  color={"#052a62"}
                  _hover={{
                    textDecoration: "none",
                    color: "gray.400",
                  }}
                >
                  {navItem.label}
                </Text>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={"white"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((item) => (
                    <DesktopSubNav
                      key={item.label}
                      label={item.label}
                      href={item.href}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNavbar;
