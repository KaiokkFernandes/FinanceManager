import React from "react";
import GridItem from "../GridItem/Index"; // Verifique se o caminho está correto
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
          <C.Tr key={index}> {}
            <GridItem
              description={item.desc} 
              value={item.valor}
              entry={item.entrada} 
              exit={item.saida} 
              onDelete={() => onDeleteTransaction(item.id)}
              id={item.id} 
            />
          </C.Tr>
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
