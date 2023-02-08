import {
  Checkbox,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterComponents = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.getAll("Subcategory");
  const initialSort = searchParams.getAll("sort");

  const [category, setCatgory] = useState(initialCategory || []);
  const [sort, setSort] = useState(initialSort[0] || "");

  const handleFilterChang = (e) => {
    // fiter
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCatgory(newCategory);
  };

  useEffect(() => {
    let params = {};
    params.Subcategory = category;
    sort && (params.sort = sort);
    setSearchParams(params);
  }, [category, searchParams, sort]);
  return (
    <VStack>
      <Heading m={"20px 0px"} size={"lg"}>
        Category
      </Heading>
      <Flex flexDir={"column"} pl={"15"} gap={"20px 0px"}>
        <Checkbox
          value="Dell"
          onChange={handleFilterChang}
          isChecked={category.includes("Dell")}
        >
          Dell
        </Checkbox>

        <Checkbox
          value="HP"
          onChange={handleFilterChang}
          isChecked={category.includes("HP")}
        >
          HP
        </Checkbox>
      </Flex>
      <Heading m={"20px 0px"} size={"lg"}>
        Sorting
      </Heading>
      <RadioGroup onChange={setSort} value={sort}>
        <Flex flexDir={"column"} pl={"15"} gap={"20px 0px"}>
          <Radio value="HTL" name="sort" defaultChecked={sort === "HTL"}>
            Ascending Order
          </Radio>
          <Radio value="LTH" name="sort" defaultChecked={sort === "LTH"}>
            Descending Order
          </Radio>
        </Flex>
      </RadioGroup>
    </VStack>
  );
};

export default FilterComponents;
