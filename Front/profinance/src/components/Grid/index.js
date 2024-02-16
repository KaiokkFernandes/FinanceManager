import React from "react";
import GridItem from "../GridItem/Index"; // Ajuste o caminho se necessário
import * as C from "./styles";

const Grid = ({ items, onDeleteTransaction }) => {
  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={10} alignCenter>
            Tipo
          </C.Th>
          <C.Th width={10}>Ações</C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {items?.map((item, index) => (
          <GridItem
            key={index}
            description={item.desc} // Mude para 'description' se for o nome correto
            value={item.valor}
            entry={item.entrada} // Mude para 'entry' se for o nome correto
            exit={item.saida} // Mude para 'exit' se for o nome correto
            total={item.total}
            onDelete={() => onDeleteTransaction(item.id)}
          />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
