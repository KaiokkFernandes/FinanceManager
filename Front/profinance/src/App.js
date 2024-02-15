import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";

const App = () => {
  const backgroundStyle = {
    backgroundImage: `url(/img/fundo.jpg)`,
    height: '100vh', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
  };

  const [transactionsList, setTransactionsList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Função para buscar transações da API
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:3001/transactions');
        const data = await response.json();
        setTransactionsList(data);
      } catch (error) {
        console.error("Erro ao buscar transações:", error);
      }
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = async (transaction) => {
    try {
      await fetch('http://localhost:3001/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });
      // Após adicionar, buscar as transações novamente para atualizar o estado
      const response = await fetch('http://localhost:3001/transactions');
      const data = await response.json();
      setTransactionsList(data);
    } catch (error) {
      console.error("Erro ao adicionar transação:", error);
    }
  };

  return (
    <div style={backgroundStyle}>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </div>
  );
};

export default App;
