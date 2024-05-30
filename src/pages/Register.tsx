import React, { useState, ChangeEvent, FormEvent } from 'react';

export interface Address {
  name: string;
  lotNumber: string;
}

interface AddressFormProps {
  initialData?: Address;
  onSubmit: (address: Address) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ initialData, onSubmit }) => {
  const [address, setAddress] = useState<Address>(initialData || { name: '', lotNumber: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={address.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lotNumber">Número do Lote</label>
        <input
          type="text"
          id="lotNumber"
          name="lotNumber"
          value={address.lotNumber}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AddressForm;