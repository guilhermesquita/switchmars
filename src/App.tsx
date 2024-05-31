import React from 'react';
import { Header } from './components/Header';
import { AppRoutes } from './routes/routes';

const RegisterAddress: React.FC = () => {
  return (
    <div>
      <Header />
      <main className='w-full flex items-center justify-center '>
        <AppRoutes />
      </main>
    </div>
  );
};

export default RegisterAddress;