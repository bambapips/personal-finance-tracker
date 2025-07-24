import React from 'react';
import type { Transaction } from '../../types';
import styles from './BalanceDisplay.module.css';

type BalanceDisplayProps = {
  transactions: Transaction[];
};

export const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ transactions }) => {
  const totalIncome = transactions
    .filter(t => t.type === 'Income')
    .reduce((acc, t) => acc + t.amount, 0); 

  const totalExpenses = transactions
    .filter(t => t.type === 'Expense')
    .reduce((acc, t) => acc + t.amount, 0); 

  const netBalance = totalIncome - totalExpenses; 

  return (
    <div className={styles.balanceContainer}>
      <div>
        <h4>Total Income</h4>
        <p className={styles.income}>${totalIncome.toFixed(2)}</p>
      </div>
      <div>
        <h4>Total Expenses</h4>
        <p className={styles.expense}>${totalExpenses.toFixed(2)}</p>
      </div>
      <div>
        <h4>Net Balance</h4>
        <p>${netBalance.toFixed(2)}</p>
      </div>
    </div>
  );
};