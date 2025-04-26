// src/components/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from '../src/components/Chart';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import { getTransactions, addTransaction, updateTransaction, deleteTransaction } from './utils/api';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const fetchData = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddTransaction = async (data) => {
    await addTransaction(data);
    fetchData();
  };

  const handleEditTransaction = async (data) => {
    await updateTransaction(currentTransaction.id, data);
    fetchData();
    setIsEdit(false);
    setCurrentTransaction(null);
  };

  const handleDeleteTransaction = async (id) => {
    await deleteTransaction(id);
    fetchData();
  };

  const handleEdit = (transaction) => {
    setCurrentTransaction(transaction);
    setIsEdit(true);
  };

  return (
    <div className="container">
      <h1>Personal Tracker</h1>
      <TransactionForm
        onSubmit={isEdit ? handleEditTransaction : handleAddTransaction}
        currentTransaction={currentTransaction}
        isEdit={isEdit}
      />
      <Chart transactions={transactions} />
      <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} onEdit={handleEdit} />
    </div>
  );
};

export default App;
