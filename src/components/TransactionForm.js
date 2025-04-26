// src/components/TransactionForm.js
import React, { useState, useEffect } from 'react';

const TransactionForm = ({ onSubmit, currentTransaction, isEdit }) => {
  const [form, setForm] = useState({ description: '', amount: '', date: '' });

  useEffect(() => {
    if (isEdit && currentTransaction) {
      setForm({
        description: currentTransaction.description,
        amount: currentTransaction.amount,
        date: currentTransaction.date,
      });
    }
  }, [isEdit, currentTransaction]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ description: '', amount: '', date: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />
      <button type="submit">{isEdit ? 'Edit Transaction' : 'Add Transaction'}</button>
    </form>
  );
};

export default TransactionForm;
