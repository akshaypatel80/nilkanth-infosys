import {
  Collapse,
  Flex,
  // Link,
  Stack,
  Text,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const MobilNavbar = ({ label, href, children }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        // as={Link}

        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text style={{ color: "#052a62" }}>{label}</Text>
        {children && (
          <Icon
            as={FaAngleDown}
            color={"#052a62"}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={5}
            h={5}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          mt={2}
          pl={4}
          borderColor={"gray.600"}
          align={"start"}
          color={"#052a62"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobilNavbar;
