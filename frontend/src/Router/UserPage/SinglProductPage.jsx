import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCartData } from "../../Redux/cart/cart.action";
import {
  addReview,
  getReview,
} from "../../Redux/ProductReview/ProductReview.action";
const getSinglProduct = async (id) => {
  try {
    let res = await axios.get(
      `https://nilkanth-infosys.onrender.com/product/${id}`
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
const SinglProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [productQuntity, setProductQuntity] = useState(0);
  const user = JSON.parse(localStorage.getItem("userData"));
  const { message, isError } = useSelector((store) => store.cart);
  const { reviewData, msg } = useSelector((store) => store.review);
  const [review, setReview] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  useEffect(() => {
    getSinglProduct(id).then((res) => {
      setData(res.totalProduct);
    });
  }, [id]);

  useEffect(() => {
    dispatch(getReview(id));
  }, [msg]);
  console.log(msg);
  const hendelAddtoCart = () => {
    const newcart = {
      userid: user[0]._id,
      product: data._id,
      Quantity: Number(productQuntity),
    };
    dispatch(addToCartData(newcart));

    if (!isError) {
      toast({
        title: "",
        description: "Successfully Add Checout Cart ",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "",
        description: "Product already in cart",
        status: "info",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };
  const quantity = (total) => {
    let q = new Array(total).fill(1);
    if (total <= 0) {
      return;
    } else {
      for (let i = 0; i <= total; i++) {
        q[i] = i;
      }
    }
    return q;
  };
  let qun = quantity(data.Quantity);

  let dis;
  if (data.Description) {
    dis = data.Description.split("|").map(String);
  }
  // console.log(data);
  const hendelAddReview = () => {
    let sendData = {
      productId: id,
      userId: user[0]._id,
      comment: review,
    };
    dispatch(addReview(sendData));
    toast({
      title: "",
      description: "Thank you for your Review!",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
    setReview("");
  };
  return (
    <Container maxW={"80%"} pt={"25px"}>
      <Flex
        gap={"20"}
        justifyContent={"center"}
        align={"center"}
        direction={["column", "row"]}
      >
        <Stack width={["150%", "100%"]} p={"10"}>
          <Image src={data.Thumbnail} />
        </Stack>
        <Stack
          textAlign={"left"}
          p={"10"}
          scaleY={"20"}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
        >
          {data.Onsale ? (
            <Text
              bg={"green.400"}
              w={["25%", "15%"]}
              p={"2"}
              color={"white"}
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              textAlign={"center"}
            >
              {data.Onsale}
            </Text>
          ) : null}
          {data.Quantity <= 1 ? (
            <Image
              src="https://www.kindpng.com/picc/m/265-2657343_graphics-hd-png-download.png"
              width={"30%"}
            />
          ) : null}
          <Text fontSize={["23px", "25px"]} fontWeight={"500"}>
            {data.Title}
          </Text>
          <HStack gap={"15px"}>
            <Text
              textDecoration={"line-through"}
              color={"gray.400"}
              fontSize={"20px"}
            >
              ???{data.Price}
            </Text>
            <Text fontSize={"20px"} fontWeight={"600"}>
              ???{data.StrikePrice}
            </Text>
          </HStack>
          <Text
            bg={"green"}
            w={["40%", "25%"]}
            p={"2"}
            color={"white"}
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            textAlign={"center"}
          >
            Rating:{data.rating}
          </Text>
          <Stack>
            <ul>
              {dis?.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
            <Text fontSize={["15px", "17px"]} fontWeight={"500"}>
              Category:{data.Subcategory}
            </Text>
          </Stack>
          <Select
            placeholder="Select Quntity"
            onChange={(e) => setProductQuntity(e.target.value)}
            isDisabled={data.Quantity <= 1}
          >
            {qun.map((ele) => (
              <option value={ele}>{ele}</option>
            ))}
          </Select>
          <HStack pt={"20px"}>
            <Button
              isDisabled={data.Quantity <= 1}
              colorScheme="blue"
              width={"40%"}
              size={"lg"}
              bg={"#052a62"}
              _hover={{
                bg: "#06419b",
              }}
              onClick={hendelAddtoCart}
            >
              Add to cart
            </Button>
            <Button
              isDisabled={data.Quantity <= 1}
              colorScheme="blue"
              width={"40%"}
              size={"lg"}
              bg={"#052a62"}
              _hover={{
                bg: "#06419b",
              }}
            >
              Wishlist
            </Button>
          </HStack>
        </Stack>
      </Flex>
      <Accordion
        allowToggle
        m={"20"}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Product Review
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Flex
              gap={"25px"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FormControl isRequired>
                <FormLabel>Add Product Review</FormLabel>
                <Textarea
                  type="text"
                  onChange={(e) => setReview(e.target.value)}
                  placeholder={"Write Review Hier"}
                />
              </FormControl>
              <Button
                width={{ base: "50%", sm: "50%", lg: "15%" }}
                size={"lg"}
                bg={"#052a62"}
                color={"white"}
                _hover={{
                  bg: "#06419b",
                }}
                type={"submit"}
                onClick={hendelAddReview}
              >
                Submit
              </Button>
            </Flex>
          </AccordionPanel>
          {reviewData.map((item) => (
            <Box textAlign={"left"} fontWeight={"600"}>
              <AccordionPanel
                borderWidth="3px"
                rounded="lg"
                shadow="lg"
                p={"5"}
              >
                <Text
                  fontSize={"25px"}
                  fontWeight={"500"}
                  textTransform={"capitalize"}
                >
                  {item.userId.first_name} {item.userId.last_name}
                </Text>
                <li>{item.comment}</li>
              </AccordionPanel>
            </Box>
          ))}
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default SinglProductPage;
