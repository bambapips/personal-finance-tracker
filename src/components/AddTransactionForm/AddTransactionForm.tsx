import React, { useState } from 'react';
import type { Transaction } from '../../types/index';
import styles from './AddTransactionForm.module.css';

type AddTransactionFormProps = {
  onAddTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
};

export const AddTransactionForm: React.FC<AddTransactionFormProps> = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<'Income' | 'Expense'>('Income');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || amount <= 0) {
      alert('Please enter a valid description and amount.');
      return;
    }
    onAddTransaction({ description, amount, type });
    setDescription('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Description" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount" 
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        required
        min={0}
      />
      <select value={type} onChange={(e) => setType(e.target.value as 'Income' | 'Expense')}> 
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <button type="submit">Add Transaction</button> 
    </form>
  );
};