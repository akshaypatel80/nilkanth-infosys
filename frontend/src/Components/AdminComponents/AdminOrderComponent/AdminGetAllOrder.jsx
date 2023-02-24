import {
  Flex,
  Heading,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../Redux/AdminOrder/AdminOrder.action";
import Pagination from "../../Pagination";
import AdminGetAllOrderCard from "./AdminGetAllOrderCard";

const AdminGetAllOrder = () => {
  const { order, orderCount, isLoding } = useSelector(
    (store) => store.adminOrder
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  let total = Math.ceil(orderCount / 10);
  useEffect(() => {
    dispatch(getAllOrder(page));
  }, [page]);
  return (
    <div>
      <Heading textAlign={"center"}>Ordert</Heading>
      <TableContainer
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        bg={"white"}
        mt={"25px"}
      >
        <Table variant={"simple"}>
          <Thead bg={"cyan.300"} fontWeight={"bold"} textAlign={"center"}>
            <Tr>
              <Th>Image</Th>
              <Th>Product Name</Th>
              <Th>Product Price</Th>
              <Th>Quantity</Th>
              <Th>Total</Th>
              <Th>User Name</Th>
              <Th>status</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          {isLoding ? (
            <Tbody>
              <Tr>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
              </Tr>
            </Tbody>
          ) : (
            <Tbody>
              {order.map((item) => (
                <AdminGetAllOrderCard
                  key={item._id}
                  id={item._id}
                  img={item.product.Thumbnail}
                  title={item.product.Title}
                  price={item.product.StrikePrice}
                  stocks={item.product.Quantity}
                  first_name={item.user.first_name}
                  last_name={item.user.last_name}
                  status={item.status}
                  page={page}
                />
              ))}
            </Tbody>
          )}
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

export default AdminGetAllOrder;
