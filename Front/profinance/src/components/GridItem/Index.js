import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ description, value, entry, exit, onDelete, id }) => {
 
  const isExpense = !entry; 

  return (
    <>
    <C.Td>{description}</C.Td>
    <C.Td>R$ {value}</C.Td>
    <C.Td alignCenter>
      {isExpense ? (
        <FaRegArrowAltCircleDown color="red" />
      ) : (
        <FaRegArrowAltCircleUp color="green" />
      )}
    </C.Td>
    <C.Td alignCenter>
      <FaTrash onClick={() => onDelete(id)} />
    </C.Td>
  </>
);
};

export default GridItem;
