import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getLaptop } from "../../Redux/Laptop/laptop.action";
import LaptopCard from "./LaptopCard";

const LaptopList = () => {
  const { laptop, loding } = useSelector((store) => store.laptopAndAllinOne);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (location || laptop.length === 0) {
      const sortBy = searchParams.get("sort");
      const getLaptopParams = {
        params: {
          Subcategory: searchParams.getAll("Subcategory"),
          //   sort: sortBy && "Price",
          sort: sortBy,
        },
      };
      dispatch(getLaptop(getLaptopParams));
    }
  }, [location.search]);

  //   useEffect(() => {
  //     dispatch(getLaptop());
  //   }, []);
  console.log(laptop);

  if (loding) {
    return (
      <SimpleGrid columns={[1, 2, 4]} spacing="20px">
        <Skeleton>
          <Box height="200px"></Box>
        </Skeleton>
        <Skeleton>
          <Box height="200px"></Box>
        </Skeleton>
        <Skeleton>
          <Box height="200px"></Box>
        </Skeleton>
        <Skeleton>
          <Box height="200px"></Box>
        </Skeleton>
        <Skeleton>
          <Box height="200px"></Box>
        </Skeleton>
        <Skeleton>
          <Box height="200px"></Box>
        </Skeleton>
      </SimpleGrid>
    );
  }
  return (
    <div>
      <SimpleGrid columns={[1, 2, 4]} spacing="20px">
        {laptop.map((item) => (
          <LaptopCard laptopData={item} key={item.id} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default LaptopList;
