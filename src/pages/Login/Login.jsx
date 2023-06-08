import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/operations/operations';
import { Alert } from '@mui/material';
import { selectUserData } from '../../redux/selectors/selectors';
import {
  FormBtn,
  FormLogin,
  FormTitle,
  FormInput,
  FormWrapper,
} from './Login.styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setSubmitted(true);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        padding: '20px',
        width: '400px',
      }}
    >
      <FormLogin onSubmit={handleSubmit}>
        <FormWrapper>
          <FormTitle>Login</FormTitle>

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          {submitted && userData.isError && (
            <Alert severity="error">Incorrect entry</Alert>
          )}

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          {submitted && userData.isError && (
            <Alert severity="error">Incorrect entry</Alert>
          )}

          <FormBtn type="submit">Login</FormBtn>
        </FormWrapper>
      </FormLogin>
    </div>
  );
};

export default Login;
