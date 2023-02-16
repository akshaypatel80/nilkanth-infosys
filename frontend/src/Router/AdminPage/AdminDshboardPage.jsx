import { Box, Container } from "@chakra-ui/react";
import React from "react";
import AdminDashbord from "../../Components/AdminComponents/AdminDashboard/AdminDashbord";
import Navbar from "../../Components/AdminComponents/adminNavbar/Navbar";

const AdminDshboardPage = () => {
  return (
    <div>
      <Navbar />
      <Box minH="100vh" bg={"gray.100"}>
        <Container maxW={"80%"} margin={"auto"} mr={"25px"}>
          <AdminDashbord />
        </Container>
      </Box>
    </div>
  );
};

export default AdminDshboardPage;
