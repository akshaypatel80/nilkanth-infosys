import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../Components/AdminComponents/adminNavbar/Navbar";
import AdminGetAllOrder from "../../Components/AdminComponents/AdminOrderComponent/AdminGetAllOrder";

const AdminShowOrderPage = () => {
  return (
    <div>
      <Navbar />
      <Box minH="100vh" bg={"gray.100"}>
        <Container maxW={"80%"} margin={"auto"} mr={"20px"}>
          <AdminGetAllOrder />
        </Container>
      </Box>
    </div>
  );
};

export default AdminShowOrderPage;
