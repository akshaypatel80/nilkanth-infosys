import { Image, Select, Td, Tr, useToast } from "@chakra-ui/react";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOreder,
  updateSatate,
} from "../../../Redux/AdminOrder/AdminOrder.action";

const AdminGetAllOrderCard = ({
  id,
  img,
  title,
  price,
  stocks,
  first_name,
  last_name,
  status,
}) => {
  const { msg } = useSelector((store) => store.adminOrder);
  const dispatch = useDispatch();
  const toast = useToast();
  const handelSatatus = (e) => {
    dispatch(updateSatate(id, e.target.value));
    toast({
      title: msg,
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };
  return (
    <Tr
      textAlign={"center"}
      _hover={{
        bg: "gray.100",
      }}
    >
      <Td maxWidth={"100%"} display={"block"}>
        <Image src={img} width={"100%"} />
      </Td>
      <Td>{title}</Td>
      <Td>{price}</Td>
      <Td>{stocks}</Td>
      <Td>{price * stocks}</Td>
      <Td>{`${first_name} ${last_name}`}</Td>
      <Td>
        <Select
          width={"28"}
          onChange={handelSatatus}
          name="status"
          value={status}
        >
          <option value={"Pending"}>Pending</option>
          <option value={"Dispatch"}>Dispatch</option>
          <option value={"Cancelled"}>Cancelled</option>
          <option value={"Placed"}>Placed</option>
        </Select>
      </Td>
      <Td
        color={"red"}
        cursor={"pointer"}
        onClick={() =>
          dispatch(
            deleteOreder(id),
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

export default AdminGetAllOrderCard;
