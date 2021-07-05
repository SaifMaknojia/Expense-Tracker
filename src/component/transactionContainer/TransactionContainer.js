import React from 'react';
import './_transactionContainer.scss';
import Transaction from '../transaction/Transaction';

const TransactionContainer = ({
  details,
  totalExpense,
  totalIncome,
  handleFilterSearch,
  filterSearch
}) => {
  return (
    <div className="transaction-container">
      <div className="category">
        <div className="category__expense">
          <p className="category__expense--title">Expense</p>
          <p className="category__expense--amount">
            ${totalExpense === 0 ? 0 : totalExpense}
          </p>
        </div>
        <div className="category__income">
          <p className="category__income--title">Income</p>
          <p className="category__income--amount">
            ${totalIncome === 0 ? 0 : totalIncome}
          </p>
        </div>
      </div>
      {details?.length > 0 ? (
        <Transaction
          handleFilterSearch={handleFilterSearch}
          details={details}
          filterSearch={filterSearch}
        />
      ) : null}
    </div>
  );
};

export default TransactionContainer;
