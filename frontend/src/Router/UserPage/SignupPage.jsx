import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../Redux/userSignup/userSingup.action";
import logo from "../../Logo/nilkanth-infosys.png";
const SignupPage = () => {
  const [signupCred, setSignupCred] = useState({});
  const dispatch = useDispatch();
  const { isAuth, error, isMsg } = useSelector((store) => store.userSingup);
  const naviget = useNavigate();
  const toast = useToast();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setSignupCred({
      ...signupCred,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(signupCred));
  };
  useEffect(() => {
    if (isAuth) {
      naviget("/user/login");
      toast({
        title: "Success",
        description: isMsg,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else if (error) {
      toast({
        title: "Something Went Wrong ",
        description: "Fill All Details",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  }, [isAuth, error]);
  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        //   bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack
          spacing={6}
          w={"full"}
          maxW={"md"}
          // bg={useColorModeValue('white', 'gray.700')}
          rounded={"xl"}
          boxShadow={"lg"}
          p={5}
          my={12}
          alignItems={"center"}
        >
          <Image src={logo} width={"30%"} />
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Signup
          </Heading>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <FormControl isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>First Name</FormLabel>
              <Input type="text" name="first_name" onChange={hanldeChange} />
            </FormControl>
            <FormControl isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Last Name</FormLabel>
              <Input type="text" name="last_name" onChange={hanldeChange} />
            </FormControl>
            <FormControl isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Mobile Number</FormLabel>
              <Input type="number" name="mobile" onChange={hanldeChange} />
            </FormControl>
            <FormControl isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Email address</FormLabel>
              <Input
                placeholder="your-email@gmail.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                name="email"
                onChange={hanldeChange}
              />
            </FormControl>
            <FormControl isRequired pb={"20px"}>
              <FormLabel fontSize={"18px"}>Password</FormLabel>
              <Input type="password" name="password" onChange={hanldeChange} />
            </FormControl>

            <Stack spacing={6} alignItems={"center"}>
              <Button
                width={"200px"}
                bg={"#052a62"}
                color={"white"}
                _hover={{
                  bg: "#06419b",
                }}
                type="submit"
              >
                Signup
              </Button>
              <Text>
                Alredy a user?
                <Link
                  to={"/user/login"}
                  state={{ TextDecoderLine: "underline" }}
                >
                  LOGIN
                </Link>
              </Text>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </div>
  );
};

export default SignupPage;
