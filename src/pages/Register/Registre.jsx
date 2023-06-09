import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/operations/operations';
import { selectUserData } from '../../redux/selectors/selectors';
import { Alert } from '@mui/material';
import { FormBtn, FormTitle, FormWrapper, FormInput } from './Register.styled';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
    setSubmitted(true);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        padding: '20px',
        width: '300px',
        height: '300px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <FormTitle>Register</FormTitle>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="email"
          />
          {submitted && userData.isError && (
            <Alert severity="error">Incorrect entry</Alert>
          )}

          <FormInput
            style={{ borderRadius: '15px' }}
            type="text"
            name="name"
            label="Name"
            value={name}
            onChange={handleChange}
            required
            placeholder="name"
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            placeholder="password"
          />
          {submitted && userData.isError && (
            <Alert severity="error">Incorrect entry</Alert>
          )}

          <FormBtn type="submit">Register</FormBtn>
        </FormWrapper>
      </form>
    </div>
  );
};

export default Register;
