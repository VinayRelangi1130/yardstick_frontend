// src/components/TransactionList.js
import React from 'react';
import './Cs.css';

const TransactionList = ({ transactions, onDelete, onEdit }) => {
  return (
    <ul className='ull'>
      {transactions.map((tx) => (
        <li key={tx.id} className='li'>
          {tx.date} - {tx.description}: ₹{tx.amount}
          <button onClick={() => onEdit(tx)}>Edit</button>
          <button onClick={() => onDelete(tx.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
