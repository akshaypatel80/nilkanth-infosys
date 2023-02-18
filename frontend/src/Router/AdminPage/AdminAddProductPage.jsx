import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../Components/AdminComponents/adminNavbar/Navbar";
import AdminAddProduct from "../../Components/AdminComponents/AdminProduct/AdminAddProduct";

const AdminAddProductPage = () => {
  return (
    <div>
      <Navbar />
      <Box minH="100vh" bg={"gray.100"}>
        <Container maxW={"80%"} margin={"auto"} mr={"25px"}>
          <AdminAddProduct />
        </Container>
      </Box>
    </div>
  );
};

export default AdminAddProductPage;
