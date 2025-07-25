# Personal Finance Tracker

A web application for tracking personal income and expenses, built with Vite, React, and TypeScript.

## Features

-   Add new income or expense transactions.
-   View a list of all transactions with descriptions, amounts, types, and dates.
-   See a running balance of total income, expenses, and net worth.
-   Filter transactions by type (Income/Expense) and search by description text.
-   **Bonus**: All data is persisted in your browser's `localStorage`.

## Project Structure

```
src/
├── components/
│   ├── AddTransactionForm/
│   │   ├── AddTransactionForm.tsx
│   │   └── AddTransactionForm.module.css
│   ├── TransactionList/
│   │   ├── TransactionList.tsx
│   │   └── TransactionList.module.css
│   ├── BalanceDisplay/
│   │   ├── BalanceDisplay.tsx
│   │   └── BalanceDisplay.module.css
│   └── Filters/
│       ├── Filters.tsx
│       └── Filters.module.css
├── hooks/
│   └── useLocalStorage.ts
├── types/
│   └── index.ts
├── App.tsx
├── App.css
└── main.tsx
```

## How to Run Locally

1.  Clone the repository:
    `git clone https://github.com/bambapips/personal-finance-tracker.git`
2.  Install dependencies:
    `npm install`
3.  Start the development server:
    `npm run dev`
4.  Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in your browser.

## Tech Stack

-   Vite
-   React 
-   TypeScript 
-   Functional Components + Hooks 
-   Modular CSS 
