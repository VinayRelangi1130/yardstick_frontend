// src/utils/api.js
const API_URL = 'https://yardstickbackend-1.onrender.com';

export const getTransactions = async () => {
  const res = await fetch(`${API_URL}/transactions`);
  return res.json();
};

export const addTransaction = async (data) => {
  await fetch(`${API_URL}/transactions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export const updateTransaction = async (id, data) => {
  await fetch(`${API_URL}/transactions/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export const deleteTransaction = async (id) => {
  await fetch(`${API_URL}/transactions/${id}`, { method: 'DELETE' });
};
