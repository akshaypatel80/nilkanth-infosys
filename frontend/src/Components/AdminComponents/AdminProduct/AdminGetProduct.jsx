import {
  Button,
  Flex,
  Heading,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsPencilFill } from "react-icons/bs";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { adminShowProducts } from "../../../Redux/AdminShowProduct/AdminShowProduct.action";
import Pagination from "../../Pagination";
import AdminProductShowCard from "./AdminProductShowCard";
const AdminGetProduct = () => {
  const { adminProduct, product, isLoding } = useSelector(
    (store) => store.adminShowProduct
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  let total = Math.ceil(product / 10);

  useEffect(() => {
    dispatch(adminShowProducts(page));
  }, [page]);
  return (
    <div>
      <Heading textAlign={"center"}>Product</Heading>
      <Flex justifyContent={"flex-end"}>
        <Button
          variant={"solid"}
          bg={"#052a62"}
          color={"white"}
          _hover={{
            bg: "#06419b",
          }}
          mb={"20px"}
          leftIcon={<MdAddCircleOutline />}
        >
          <Link to={"/admin/addProduct"}>Add Product</Link>
        </Button>
      </Flex>
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
              <Th>Stocks</Th>
              <Th>Status</Th>
              <Th>Edit</Th>
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
              </Tr>
            </Tbody>
          ) : (
            <Tbody>
              {adminProduct.map((item) => (
                <AdminProductShowCard
                  key={item._id}
                  id={item._id}
                  img={item.Thumbnail}
                  title={item.Title}
                  price={item.Price}
                  stocks={item.Quantity}
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

export default AdminGetProduct;
