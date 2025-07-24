import React from 'react';
import type { Transaction } from '../../types';
import styles from './TransactionList.module.css';

type TransactionListProps = {
  transactions: Transaction[];
};

export const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  if (transactions.length === 0) {
    return <p>No transactions yet.</p>;
  }

  return (
    <ul className={styles.list}>
      {transactions.map(t => (
        <li key={t.id} className={t.type === 'Income' ? styles.income : styles.expense}>
          <span>{t.description}</span> {}
          <span>{t.type}</span> {}
          <span>${t.amount.toFixed(2)}</span> {}
          <span>{t.date}</span> {}
        </li>
      ))}
    </ul>
  );
};