import React from 'react';
import './_form.scss';

const Form = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form className="form">
      <div className="form__input">
        <input
          name="amount"
          value={formData.amount}
          className="form__input--amount common-height"
          type="number"
          onChange={handleChange}
          placeholder="Enter Amount"
        />
        <input
          className="form__input--description common-height"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          name="description"
          type="text"
        />
        <div className="radio-buttons">
          <input
            className="radio-buttons__expense"
            name="checked"
            type="radio"
            id="expense"
            value="expense"
            onChange={handleChange}
            checked={formData.checked === 'expense'}
          />
          <label htmlFor="expense">Expense</label>

          <input
            className="radio-buttons__income"
            type="radio"
            name="checked"
            id="income"
            value="income"
            checked={formData.checked === 'income'}
            onChange={handleChange}
          />
          <label htmlFor="income">Income</label>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="add-transaction"
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default Form;
