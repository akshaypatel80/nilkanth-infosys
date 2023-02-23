import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../Components/AdminComponents/adminNavbar/Navbar";
import AdminUserComponent from "../../Components/AdminComponents/AdminUser/AdminUserComponent";

const AdminUserPage = () => {
  return (
    <div>
      <Navbar />
      <Box minH="100vh" bg={"gray.100"}>
        <Container maxW={"80%"} margin={"auto"} mr={"20px"}>
          <AdminUserComponent />
        </Container>
      </Box>
    </div>
  );
};

export default AdminUserPage;
