import React, { useState } from "react";
import * as C from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


const Form = ({ onAddTransaction }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      desc: desc,
      amount: Number(amount),
      isExpense: isExpense,
    };

    onAddTransaction(transaction);  

    // Limpa os campos após a adição
    setDesc("");
    setAmount("");
    setExpense(false); // Reseta o estado de despesa/receita para o padrão
  };

  return (
    <C.Container>
      <C.InputContent>
        <C.Label>Descrição</C.Label>
        <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </C.InputContent>
      <C.InputContent>
        <C.Label>Valor</C.Label>
        <C.Input
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      </C.InputContent>
      <C.RadioGroup>
        <C.Input
          type="radio"
          id="rIncome"
          name="group1"
          checked={!isExpense}
          onChange={() => setExpense(false)}
        />
        <C.Label htmlFor="rIncome">Entrada</C.Label>
        <C.Input
          type="radio"
          id="rExpenses"
          name="group1"
          checked={isExpense}
          onChange={() => setExpense(true)}
        />
        <C.Label htmlFor="rExpenses">Saída</C.Label>
      </C.RadioGroup>
         <C.Button onClick={handleSave}>ADICIONAR</C.Button>
         <C.Button onClick={handleSave}>  
         <FontAwesomeIcon icon={faFilePdf} /> GERAR PDF
         </C.Button>
    </C.Container>
  );
};

export default Form;
