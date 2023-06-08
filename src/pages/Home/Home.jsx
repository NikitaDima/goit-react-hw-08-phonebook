import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/selectors/selectors';
import { Slide } from '@mui/material';

const Home = () => {
  const userData = useSelector(selectUserData);

  return (
    <>
      {userData.isLoggedIn ? (
        <Slide direction="down" in={true} timeout={300}>
          <h1>Welcome to our service, {userData.name}.</h1>
        </Slide>
      ) : (
        <Slide direction="down" in={true} timeout={300}>
          <h1>Welcome to Phone Book</h1>
        </Slide>
      )}
    </>
  );
};

export default Home;
