import { Td, Tr, useToast } from "@chakra-ui/react";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../Redux/AdminShowUser/AdminShowUser.action";

const AdminUserCard = ({ id, first_name, last_name, email, mobile }) => {
  const { msg } = useSelector((store) => store.adminUser);
  const dispatch = useDispatch();
  const toast = useToast();
  return (
    <Tr
      textAlign={"center"}
      _hover={{
        bg: "gray.100",
      }}
    >
      <Td>{id}</Td>
      <Td>{first_name}</Td>
      <Td>{last_name}</Td>
      <Td>{email}</Td>
      <Td>{mobile}</Td>
      <Td
        color={"red"}
        cursor={"pointer"}
        onClick={() =>
          dispatch(
            deleteUser(id),
            toast({
              title: msg,
              status: "success",
              duration: 9000,
              isClosable: true,
              position: "top",
            })
          )
        }
      >
        {<MdDelete />}
      </Td>
    </Tr>
  );
};

export default AdminUserCard;
