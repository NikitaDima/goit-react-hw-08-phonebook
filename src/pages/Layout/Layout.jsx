import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import { Spiner } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Suspense fallback={<Spiner />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
