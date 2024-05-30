import React from 'react';
import AddressForm from './pages/Register';
import { Address } from './pages/Register';
import { Header } from './components/Header';
import { Home } from './pages/Home';

const RegisterAddress: React.FC = () => {
  const handleRegister = (address: Address) => {
    console.log('Endereço cadastrado:', address);
    // Lógica para salvar o endereço no banco de dados
  };

  return (
    <div>
      <Header />
      <main className='w-full flex items-center justify-center '>
        <Home />
      </main>
      {/* <h2>Cadastro de Endereço</h2> */}
      {/* <AddressForm onSubmit={handleRegister} /> */}
    </div>
  );
};

export default RegisterAddress;