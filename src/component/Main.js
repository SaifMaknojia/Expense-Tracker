import React, { useState, useEffect } from 'react';
import FormContainer from './formContainer/FormContainer';
import TransactionContainer from './transactionContainer/TransactionContainer';

// import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [details, setDetails] = useState([]);
  const [totalExpense, setTotalExpense] = useState();
  const [totalIncome, setTotalIncome] = useState();
  const [totalBalance, setTotalBalance] = useState();
  const [filterSearch, setFilterSearch] = useState('');
  const [newFilterArray, setNewFilterArray] = useState([]);

  const handleFilterSearch = data => {
    setFilterSearch(data);
    console.log('passing the info from app js', filterSearch);
  };

  //description
  //using reduce to get the sum of all amount
  //filtering the array to get all the object with expenses
  //chaning filter to get array with only expenses
  //mapping all items to get only amounts, since they are in strings we use Number function to convert in number
  const filterExpense = details
    .filter(expense => {
      return expense.checked === 'expense';
    })
    .map(expenseAmount => {
      return Number(expenseAmount.amount);
    })
    .reduce((a, b) => a + b, 0);

  const filterIncome = details
    .filter(expense => {
      return expense.checked === 'income';
    })
    .map(expenseAmount => {
      return Number(expenseAmount.amount);
    })
    .reduce((a, b) => a + b, 0);

  // net Balance
  const allBalance = totalIncome - totalExpense;

  useEffect(() => {
    const results = details.filter(detail =>
      detail.description.toLowerCase().includes(filterSearch)
    );

    setNewFilterArray(results);
  }, [filterSearch]);

  useEffect(() => {
    setTotalBalance(allBalance);
    setTotalExpense(filterExpense);
    setTotalIncome(filterIncome);
  }, [allBalance, filterIncome, filterExpense]);

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <FormContainer
        totalBalance={totalBalance}
        details={details}
        setDetails={setDetails}
      />
      <TransactionContainer
        handleFilterSearch={handleFilterSearch}
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        filterSearch={filterSearch}
        //dynamically getting the array to fetch either search value or all input
        details={filterSearch ? newFilterArray : details}
      />
    </div>
  );
};

export default Main;
