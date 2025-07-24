import React from 'react';
import styles from './Filters.module.css';

type FiltersProps = {
  onFilterChange: (type: 'All' | 'Income' | 'Expense') => void;
  onSearchChange: (text: string) => void;
};

export const Filters: React.FC<FiltersProps> = ({ onFilterChange, onSearchChange }) => {
  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        placeholder="Search by description..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select onChange={(e) => onFilterChange(e.target.value as any)}>
        <option value="All">All</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
    </div>
  );
};