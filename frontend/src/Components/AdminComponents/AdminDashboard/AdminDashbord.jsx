import { Heading } from "@chakra-ui/react";
import React from "react";
import AdminDashBordStatistics from "./AdminDashBordStatistics";

const AdminDashbord = () => {
  return (
    <div>
      <Heading textAlign={"center"} pt={"20px"}>
        Dashboard
      </Heading>
      <AdminDashBordStatistics />
    </div>
  );
};

export default AdminDashbord;
