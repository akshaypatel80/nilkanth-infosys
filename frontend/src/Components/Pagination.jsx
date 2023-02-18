import { Button } from "@chakra-ui/react";
import React from "react";
function CreateArrayOfSize(n) {
  return new Array(n).fill(0);
}
const Pagination = ({ totalPage, currentPage, handlePageChange }) => {
  let page = CreateArrayOfSize(totalPage).map((a, i) => {
    return (
      <Button
        bg={"#052a62"}
        color={"white"}
        _hover={{
          bg: "#06419b",
        }}
        key={i + 1}
        disable={currentPage == i}
        onClick={() => handlePageChange(i + 1)}
        variant="outline"
      >
        {i + 1}
      </Button>
    );
  });

  return (
    <div>
      <div>{page}</div>
    </div>
  );
};

export default Pagination;
