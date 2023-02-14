import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../Logo/nilkanth-infosys.png";
import { userLogin } from "../../Redux/userLogin/useLogin.action";
const LoginPage = () => {
  const [loginCred, setLoginCred] = useState({});
  const dispatch = useDispatch();
  const { isAuth, error, isLoading } = useSelector((store) => store.userLogin);
  const { state } = useLocation();
  const naviget = useNavigate();
  const toast = useToast();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCred({
      ...loginCred,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(loginCred));
  };
  useEffect(() => {
    if (isAuth) {
      if (state) {
        naviget(state.form, { replace: true });
      } else {
        naviget("/");
        toast({
          title: "Success",
          description: "Welcome To The Nilkanth Infosys",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
      if (error) {
        toast({
          title: "Something Went Wrong ",
          description: "Enter Right Credential",
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
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
            Login
          </Heading>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
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
              {isLoading ? (
                <Button
                  isLoading
                  loadingText="Loading"
                  colorScheme="facebook"
                  variant="outline"
                  spinnerPlacement="end"
                >
                  Click me
                </Button>
              ) : (
                <Button
                  width={"200px"}
                  bg={"#052a62"}
                  color={"white"}
                  _hover={{
                    bg: "#06419b",
                  }}
                  type="submit"
                >
                  Login
                </Button>
              )}
            </Stack>
          </form>
        </Stack>
      </Flex>
    </div>
  );
};

export default LoginPage;
