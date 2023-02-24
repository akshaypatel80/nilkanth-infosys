import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GiBeachBag } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../Redux/AdminOrder/AdminOrder.action";
import { adminShowProducts } from "../../../Redux/AdminShowProduct/AdminShowProduct.action";
import { getAllUser } from "../../../Redux/AdminShowUser/AdminShowUser.action";

const AdminDashBordStatistics = () => {
  const { userCount } = useSelector((store) => store.adminUser);
  const { product } = useSelector((store) => store.adminShowProduct);
  const { orderCount } = useSelector((store) => store.adminOrder);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
    dispatch(adminShowProducts());
    dispatch(getAllOrder());
  }, []);
  console.log(userCount);
  return (
    <SimpleGrid
      columns={{ base: 1, md: 3 }}
      spacing={{ base: 5, lg: 8 }}
      mt={"16"}
    >
      {/* 1 */}
      <Box>
        <Stat
          px={{ base: 2, md: 4 }}
          py={"5"}
          shadow={"xl"}
          border={"1px solid"}
          borderColor="gray.500"
          rounded={"lg"}
        >
          <Flex justifyContent={"space-between"}>
            <Box pl={{ base: 2, md: 4 }}>
              <StatLabel fontWeight={"medium"} isTruncated>
                Users
              </StatLabel>
              <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
                {userCount}
              </StatNumber>
            </Box>
            <Box my={"auto"} color="gray.800" alignContent={"center"}>
              <BsPerson size={"3em"} />
            </Box>
          </Flex>
        </Stat>
      </Box>
      {/* 2 */}
      <Box>
        <Stat
          px={{ base: 2, md: 4 }}
          py={"5"}
          shadow={"xl"}
          border={"1px solid"}
          borderColor="gray.500"
          rounded={"lg"}
        >
          <Flex justifyContent={"space-between"}>
            <Box pl={{ base: 2, md: 4 }}>
              <StatLabel fontWeight={"medium"} isTruncated>
                Product
              </StatLabel>
              <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
                {product}
              </StatNumber>
            </Box>
            <Box my={"auto"} color="gray.800" alignContent={"center"}>
              <GiBeachBag size={"3em"} />
            </Box>
          </Flex>
        </Stat>
      </Box>
      {/* 3 */}
      <Box>
        <Stat
          px={{ base: 2, md: 4 }}
          py={"5"}
          shadow={"xl"}
          border={"1px solid"}
          borderColor="gray.500"
          rounded={"lg"}
        >
          <Flex justifyContent={"space-between"}>
            <Box pl={{ base: 2, md: 4 }}>
              <StatLabel fontWeight={"medium"} isTruncated>
                Order
              </StatLabel>
              <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
                {orderCount}
              </StatNumber>
            </Box>
            <Box my={"auto"} color="gray.800" alignContent={"center"}>
              <FiShoppingCart size={"3em"} />
            </Box>
          </Flex>
        </Stat>
      </Box>
    </SimpleGrid>
  );
};

export default AdminDashBordStatistics;
