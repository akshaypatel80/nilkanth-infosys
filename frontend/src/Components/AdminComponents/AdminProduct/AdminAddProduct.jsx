import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../Redux/AdminAddProduct/AdminAddProduct.action";

const AdminAddProduct = () => {
  const [product, setProduct] = useState({});
  const { productData, msg } = useSelector((store) => store.adminAddProduct);
  const dispatch = useDispatch();
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    toast({
      title: msg,
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  console.log(productData);
  return (
    <div>
      <Heading textAlign={"center"} pt={"20px"}>
        Add Product
      </Heading>
      <Flex justify={"center"} width={"100%"} bg={"whiteAlpha.800"} mt={"15"}>
        <form
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: "30px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <Stack
            spacing={"10"}
            direction={{ base: "column", sm: "row" }}
            width={{ base: "100%", sm: "100%" }}
          >
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Product Title</FormLabel>
                <Input
                  type="text"
                  name="Title"
                  onChange={hanldeChange}
                  placeholder={"Title"}
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Product Price</FormLabel>
                <Input
                  type="text"
                  name="Price"
                  onChange={hanldeChange}
                  placeholder={"Product Price"}
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack
            spacing={"10"}
            direction={{ base: "column", sm: "row" }}
            width={{ base: "100%", sm: "100%" }}
          >
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>First Image</FormLabel>
                <Input
                  type="text"
                  name="Thumbnail"
                  onChange={hanldeChange}
                  placeholder={"Image URL"}
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Strike Price</FormLabel>
                <Input
                  type="text"
                  name="StrikePrice"
                  onChange={hanldeChange}
                  placeholder={"Strike Price"}
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack
            width={{ base: "100%", sm: "100%" }}
            spacing={"10"}
            direction={{ base: "column", sm: "row" }}
          >
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Main Category</FormLabel>
                <Select
                  placeholder="Select option"
                  onChange={hanldeChange}
                  name="Category"
                >
                  <option value="LaptopAllinOne">Laptop & All inOne</option>
                  <option value="DesktopAccessories">
                    Desktop Accessories
                  </option>
                </Select>
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Sub Category</FormLabel>
                <Select onChange={hanldeChange} name="Subcategory">
                  {product.Category === "LaptopAllinOne" && (
                    <option value="HP">HP</option>
                  )}
                  {product.Category === "LaptopAllinOne" && (
                    <option value="Dell">Dell</option>
                  )}
                  {product.Category === "LaptopAllinOne" && (
                    <option value="Lanovo">Lanovo</option>
                  )}
                  {product.Category === "LaptopAllinOne" && (
                    <option option value="Asus">
                      Asus
                    </option>
                  )}
                  {product.Category === "DesktopAccessories" && (
                    <option value="Monitor">Monitor</option>
                  )}
                  {product.Category === "DesktopAccessories" && (
                    <option value="Keyboard">Keyboard</option>
                  )}
                  {product.Category === "DesktopAccessories" && (
                    <option value="Mouse">Mouse</option>
                  )}
                  {product.Category === "DesktopAccessories" && (
                    <option value="CPU">CPU</option>
                  )}
                  {product.Category === "DesktopAccessories" && (
                    <option value="Motherboard">Motherboard</option>
                  )}
                  {product.Category === "DesktopAccessories" && (
                    <option value="Ram">Ram</option>
                  )}
                </Select>
              </FormControl>
            </Box>
          </Stack>
          <Stack
            width={{ base: "100%", sm: "100%" }}
            spacing={"10"}
            direction={{ base: "column", sm: "row" }}
          >
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Product Onsale</FormLabel>
                <Select
                  placeholder="Select option"
                  onChange={hanldeChange}
                  name="Onsale"
                >
                  <option value="Sale!">Yes</option>
                  <option value="">No</option>
                </Select>
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Add Quantity</FormLabel>
                <Input
                  type="number"
                  name="Quantity"
                  onChange={hanldeChange}
                  placeholder={"Quantity"}
                />
              </FormControl>
            </Box>
          </Stack>
          <Box width={{ base: "100%", sm: "100%" }}>
            <FormControl>
              <FormLabel>Product Description</FormLabel>
              <Textarea
                type="text"
                name="Description"
                onChange={hanldeChange}
                placeholder={"Product Description"}
              />
            </FormControl>
          </Box>
          <Stack
            spacing={10}
            pt={8}
            display={"flex"}
            direction={{ base: "column", sm: "row" }}
            justifyContent={{ base: "center", sm: "center", lg: "flex-end" }}
          >
            <Button
              width={{ base: "50%", sm: "50%", lg: "15%" }}
              size={"md"}
              bg={"#052a62"}
              color={"white"}
              _hover={{
                bg: "#06419b",
              }}
              type={"submit"}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Flex>
    </div>
  );
};

export default AdminAddProduct;
