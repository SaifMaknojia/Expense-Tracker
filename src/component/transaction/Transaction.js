import React from 'react';
import './_transaction.scss';
import { v4 as uuidv4 } from 'uuid';

const Transaction = ({ details, handleFilterSearch, filterSearch }) => {
  /* 
1. if checkedtype is expense  display the info with red border
2. if checktype is income display the info with green border
 */

  return (
    <div className="transaction">
      <div className="transaction__block">
        <h2 className="transaction__block--header">Transaction</h2>
        <input
          onChange={e => handleFilterSearch(e.target.value)}
          value={filterSearch}
          className="transaction__block--input"
          type="text"
          placeholder="Search Transaction"
        />
      </div>
      {details.map(data => {
        return (
          <div
            key={uuidv4()}
            className={
              data.checked === 'expense'
                ? 'transaction__list border-red'
                : 'transaction__list border-green '
            }
          >
            <p className="transaction__list--description">{data.description}</p>
            <p
              className={
                data.checked === 'expense'
                  ? 'transaction__list--title font-red '
                  : 'transaction__list--title font-green'
              }
            >
              ${data.amount}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Transaction;
