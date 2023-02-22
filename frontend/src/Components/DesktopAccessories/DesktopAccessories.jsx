import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getDesktop } from "../../Redux/Desktopaccessories/Desktopaccessories.action";
import LaptopCard from "../LaptopAndAllinOne/LaptopCard";

const DesktopAccessories = () => {
  const { desktop, loding } = useSelector((store) => store.desktop);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (location || desktop.length === 0) {
      const sortBy = searchParams.get("sort");
      const desktop = {
        params: {
          Subcategory: searchParams.getAll("Subcategory"),
          //   sort: sortBy && "Price",
          sort: sortBy,
        },
      };
      dispatch(getDesktop(desktop));
    }
  }, [location.search]);
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
        {desktop.map((item) => (
          <LaptopCard laptopData={item} key={item.id} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default DesktopAccessories;
