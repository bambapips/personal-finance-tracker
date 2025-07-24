import { useState, useMemo } from 'react';
import type { Transaction } from './types';
import { AddTransactionForm } from './components/AddTransactionForm/AddTransactionForm';
import { TransactionList } from './components/TransactionList/TransactionList';
import { BalanceDisplay } from './components/BalanceDisplay/BalanceDisplay';
import { Filters } from './components/Filters/Filters';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filterType, setFilterType] = useState<'All' | 'Income' | 'Expense'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = (transaction: Omit<Transaction, 'id' | 'date'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
    };
    setTransactions(prev => [...prev, newTransaction]);
  };

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const typeMatch = filterType === 'All' || t.type === filterType;
      const searchMatch = t.description.toLowerCase().includes(searchTerm.toLowerCase());
      return typeMatch && searchMatch;
    });
  }, [transactions, filterType, searchTerm]);

  return (
    <div className="App">
      <h1>Personal Finance Tracker</h1>
      <BalanceDisplay transactions={transactions} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <Filters onFilterChange={setFilterType} onSearchChange={setSearchTerm} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default App;