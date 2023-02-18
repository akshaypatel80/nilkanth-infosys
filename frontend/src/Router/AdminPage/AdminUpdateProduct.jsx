import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../Components/AdminComponents/adminNavbar/Navbar";
import AdminUpdate from "../../Components/AdminComponents/AdminProduct/AdminUpdate";

const AdminUpdateProduct = () => {
  return (
    <div>
      <Navbar />
      <Box minH="100vh" bg={"gray.100"}>
        <Container
          maxW={"80%"}
          margin={"auto"}
          mr={"25px"}
          // border={"1px solid red"}
        >
          <AdminUpdate />
        </Container>
      </Box>
    </div>
  );
};

export default AdminUpdateProduct;
