import {
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../Redux/AdminShowUser/AdminShowUser.action";
import Pagination from "../../Pagination";
import AdminUserCard from "./AdminUserCard";

const AdminUserComponent = () => {
  const { allUser, userCount } = useSelector((store) => store.adminUser);
  const dispatch = useDispatch();
  const toast = useToast();
  const [page, setPage] = useState(1);
  let total = Math.ceil(userCount / 10);
  useEffect(() => {
    dispatch(getAllUser(page));
  }, [page]);
  console.log(allUser);
  return (
    <div>
      <Heading textAlign={"center"}>User</Heading>
      <TableContainer
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        bg={"white"}
        mt={"25px"}
      >
        <Table variant={"simple"}>
          <Thead bg={"cyan.300"} fontWeight={"bold"} textAlign={"center"}>
            <Tr>
              <Th>id</Th>
              <Th>First Name</Th>
              <Th>last Name</Th>
              <Th>Email ID</Th>
              <Th>mobile No</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allUser.map((item) => (
              <AdminUserCard
                key={item._id}
                id={item._id}
                first_name={item.first_name}
                last_name={item.last_name}
                email={item.email}
                mobile={item.mobile}
                page={page}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex align={"center"} justifyContent={"center"} p={"25px"}>
        <Pagination
          totalPage={total}
          handlePageChange={(page) => setPage(page)}
          currentPage={page}
        />
      </Flex>
    </div>
  );
};

export default AdminUserComponent;
