import React, { useState } from 'react';
import Form from '../form/Form';
import './_formContainer.scss';

const FormContainer = ({ setDetails, totalBalance }) => {
  //toggle form and dyncamically showing value of add and cancel(based on user Click)
  const [form, toggleForm] = useState(false);

  //creating Empty
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    checked: 'expense'
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevValue => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.amount && formData.description !== '') {
      setDetails(prevData => [...prevData, formData]);
      setFormData({
        amount: '',
        description: '',
        checked: 'expense'
      });
      toggleForm();
    }
  };

  /*
Dynamically get balace based on input value
1. if details === [] , then show balance as 0
2. if balance is less than 0 show balance in red with - sign
3. if balace is more than 0 then show balance with green color with no sign
4. so netAmount next to balance i.e income - expense
  */

  return (
    <div className="form-container">
      <div className="form-container__top">
        <p className="form-container__top--balance">
          Balance: <span>${totalBalance ? totalBalance : 0}</span>
        </p>
        <button
          onClick={() => toggleForm(!form)}
          className="form-container__top--button"
        >
          {form ? 'Cancel' : 'Add'}
        </button>
      </div>
      {form ? (
        <Form
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : null}
    </div>
  );
};

export default FormContainer;
