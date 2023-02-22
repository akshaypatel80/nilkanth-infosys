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

const DesktopFilterComponents = () => {
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
    <div>
      <VStack>
        <Heading m={"20px 0px"} size={"lg"}>
          Category
        </Heading>
        <Flex flexDir={"column"} pl={"15"} gap={"20px 0px"}>
          <Checkbox
            value="Monitor"
            onChange={handleFilterChang}
            isChecked={category.includes("Monitor")}
          >
            Monitor
          </Checkbox>

          <Checkbox
            value="Keyboard"
            onChange={handleFilterChang}
            isChecked={category.includes("Keyboard")}
          >
            Keyboard
          </Checkbox>
          <Checkbox
            value="Mouse"
            onChange={handleFilterChang}
            isChecked={category.includes("Mouse")}
          >
            Mouse
          </Checkbox>
          <Checkbox
            value="CPU"
            onChange={handleFilterChang}
            isChecked={category.includes("CPU")}
          >
            CPU
          </Checkbox>
          <Checkbox
            value="Motherboard"
            onChange={handleFilterChang}
            isChecked={category.includes("Motherboard")}
          >
            Motherboard
          </Checkbox>
          <Checkbox
            value="Ram"
            onChange={handleFilterChang}
            isChecked={category.includes("Ram")}
          >
            Ram
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
    </div>
  );
};

export default DesktopFilterComponents;
