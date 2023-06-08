import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/selectors/selectors';

const Home = () => {
  const userData = useSelector(selectUserData);

  return (
    <>
      {userData.isLoggedIn ? (
        <h1>Welcome to our service, {userData.name}.</h1>
      ) : (
        <h1>Welcome to Phone Book</h1>
      )}
    </>
  );
};

export default Home;
