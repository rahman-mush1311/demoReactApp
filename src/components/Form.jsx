import { useState } from 'react';
import Button from '@material-ui/core/Button';
import React from 'react';



const Form=(props)=>  {
  const [valid, setValid] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
  };

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };


  
    return (
      <div className="form-container" onSubmit={handleSubmit}>
        {submitted && <div className='success-message'>Success! Thank you for registering</div>}
        <form className="register-form" >
          {/* Uncomment the next line to show the success message */}
          {/* <div class="success-message">Success! Thank you for registering</div> */}
          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleFirstNameInputChange}
           // {submitted && !values.firstName && <span id='first-name-error'>Please enter a first name</span>}
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="first-name-error">Please enter a first name</span> */}
          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleLastNameInputChange}
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="last-name-error">Please enter a last name</span> */}
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleEmailInputChange}
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="email-error">Please enter an email address</span> */}
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      
      </div>
     
    );
  }
  export default Form;

