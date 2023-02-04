import {
  Avatar,
  Box,
  Button,
  Collapse,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobilNavbar from "./MobilNavbar";
import { navdata } from "./navdata";
import { MdClose, MdSearch, MdSubject } from "react-icons/md";
import logo from "../../Logo/nilkanth-infosys.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../Redux/userLogin/useLogin.action";
import { FiChevronDown } from "react-icons/fi";
const Navitem = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { isAuth, data } = useSelector((store) => store.userLogin);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userData")) || {};
  return (
    <Box>
      <Flex
        bg={"white"}
        color={"#052a62"}
        minH={"70px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <MdClose fontFamily="60px" />
              ) : (
                <MdSubject w={10} h={10} />
              )
            }
            variant={"ghost"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          align={"center"}
        >
          <Box
            // style={{ border: "1px solid red" }}
            width={{ base: "80%", md: "10%" }}
          >
            <Link to={"/"}>
              <Image src={logo} width={"100%"} />
            </Link>
          </Box>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNavbar />
          </Flex>
        </Flex>
        <InputGroup
          width={{ base: "50%", md: "30%" }}
          mr={{ base: "2px", md: "20px" }}
        >
          <Input
            pr="4.5rem"
            placeholder="Search"
            // fontSize={{ base: "10px", md: "20px" }}
            size={{ base: "sm", md: "md" }}
          />
          <InputRightElement size={{ base: "sm", md: "md" }}>
            <IconButton
              icon={<MdSearch fontSize={{ base: "10px", md: "60px" }} />}
            />
          </InputRightElement>
        </InputGroup>
        {isAuth ? (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <FiChevronDown />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">
                      {data.first_name || user[0].first_name}
                      {data.last_name || user[0].last_name}
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex", lg: "none" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList bg={"white"} borderColor={"gray.200"}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>cart</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => dispatch(userLogout())}>
                  Sign out
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        ) : (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              color={"#052a62"}
            >
              <Link to={"/user/Sign-In"}>Sign In</Link>
            </Button>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"#052a62"}
              _hover={{
                bg: "#06419b",
              }}
            >
              <Link to={"/user/login"}>Sign Up</Link>
            </Button>
          </Stack>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};
const MobileNav = () => {
  return (
    <Stack bg={"white"} p={4} display={{ md: "none" }}>
      {navdata.map((navItem) => (
        <MobilNavbar
          key={navItem.label}
          label={navItem.label}
          href={navItem.href}
          children={navItem.children}
        />
      ))}
    </Stack>
  );
};

export default Navitem;
