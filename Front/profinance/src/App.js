import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import axios from "axios";
import Grid from "./components/Grid";

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
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8800/users ');
      setUsers(res.data.sort((a, b) => a.id - b.id ? 1 : -1));
    } catch (error) {
      console.error("Erro ao buscar itens", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const getSummary = async () => {
    try {
      const { data } = await axios.get('http://localhost:8800/summary');
      setIncome(data.income);
      setExpense(data.expense);
      setTotal(data.total);
    } catch (error) {
      console.error("Erro ao buscar o resumo financeiro", error);
    }
  };

  useEffect(() => {
    getSummary();
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

    const total = (income - expense).toFixed(2);
    setTotal(`${Number(income) >= Number(expense) ? "" : "-"}R$ ${total}`);

    

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAddTransaction = async (transaction) => {
    try {
      
      const { desc, amount, isExpense } = transaction;
  
      // Faça a requisição POST com isExpense no corpo
      await axios.post('http://localhost:8800/transaction', {
        desc,
        valor: amount,
        isExpense, 
      });
  
      
    
      getUsers();
      getSummary();
    } catch (error) {
      console.error("Erro ao adicionar transação:", error);
    }
  };

  const handleDeleteTransaction = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/delete/${id}`); 
      
      // Busque a lista atualizada de itens e o resumo financeiro
      getUsers();
      getSummary();
    } catch (error) {
      console.error("Erro ao deletar transação:", error);
    }
  };

  return (
    <div style={backgroundStyle}>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form onAddTransaction={handleAddTransaction} />
      <Grid items={users} onDeleteTransaction={handleDeleteTransaction} />
      <GlobalStyle />
    </div>
  );
};

export default App;
