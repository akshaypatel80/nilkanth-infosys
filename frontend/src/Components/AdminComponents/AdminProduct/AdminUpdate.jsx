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
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { adminUpdateData } from "../../../Redux/AdminShowProduct/AdminShowProduct.action";

const AdminUpdate = () => {
  const { updatemsg } = useSelector((store) => store.adminShowProduct);
  const toast = useToast();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const getdata = async (id) => {
    try {
      const res = await axios(
        `https://nilkanth-infosys.onrender.com/product/${id}`
      );
      setProduct(res.data.totalProduct);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getdata(id);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminUpdateData(id, product));
    toast({
      title: "Product Update Successfully",
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
  return (
    <div>
      <Heading textAlign={"center"} pt={"20px"}>
        Update Product
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
                  value={product.Title}
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
                  value={product.Price}
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
                  value={product.Thumbnail}
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
                  value={product.StrikePrice}
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
                  name="Category"
                  value={product.Category}
                  onChange={hanldeChange}
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
                <Select
                  onChange={hanldeChange}
                  name="Subcategory"
                  value={product.Subcategory}
                >
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
                  value={product.Onsale}
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
                  value={product.Quantity}
                  onChange={hanldeChange}
                  placeholder={"Quantity"}
                />
              </FormControl>
            </Box>
          </Stack>
          <Box width={{ base: "100%", sm: "100%" }}>
            <FormControl isRequired>
              <FormLabel>Product Description</FormLabel>
              <Textarea
                type="text"
                name="Description"
                value={product.Description}
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

export default AdminUpdate;
