// src/App.tsx
import { useState, useMemo, useEffect } from 'react';
import type { Transaction } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AddTransactionForm } from './components/AddTransactionForm/AddTransactionForm';
import { TransactionList } from './components/TransactionList/TransactionList';
import { BalanceDisplay } from './components/BalanceDisplay/BalanceDisplay';
import { Filters } from './components/Filters/Filters';
import './App.css';

function App() {
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>('transactions', []);
  const [filterType, setFilterType] = useState<'All' | 'Income' | 'Expense'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = (transaction: Omit<Transaction, 'id' | 'date'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now(),
      date: new Date().toLocaleDateString(), 
    };
    setTransactions(prev => [newTransaction, ...prev]);
  };

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const typeMatch = filterType === 'All' || t.type === filterType;
      const searchMatch = t.description.toLowerCase().includes(searchTerm.toLowerCase());
      return typeMatch && searchMatch;
    });
  }, [transactions, filterType, searchTerm]);

  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes')
      .then(res => res.json())
      .then(data => setQuote(`"${data.content}" - ${data.author}`))
      .catch(err => console.error("Failed to fetch quote", err));
  }, []);

  return (
    <div className="App">
      <h1>Personal Finance Tracker</h1>
      <br/>
      <p>{quote}</p>
      <BalanceDisplay transactions={transactions} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <hr />
      <Filters onFilterChange={setFilterType} onSearchChange={setSearchTerm} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default App;