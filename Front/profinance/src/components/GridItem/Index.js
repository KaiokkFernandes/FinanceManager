import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

// As propriedades devem corresponder às que estão sendo passadas para o componente.
const GridItem = ({ description, value, entry, exit, onDelete, id }) => {
  // Supondo que a propriedade 'entry' determina se é uma entrada ou saída
  // Supondo também que 'exit' não é necessária pois 'entry' já determina o tipo de transação
  const isExpense = !entry; // Se não é entrada, então é despesa

  return (
    <C.Tr>
      <C.Td>{description}</C.Td>
      <C.Td>R$ {value}</C.Td> {/* Adicionando o símbolo de moeda */}
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
    </C.Tr>
  );
};

export default GridItem;
