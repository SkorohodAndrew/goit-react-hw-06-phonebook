import { useState, useEffect } from 'react';
import { FormAddPhone } from './FormAddPhone/FormAddPhone';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContacts } from './FilterContacts/FilterContacts';

import { Container } from 'App.styled';

export const App = () => {
  const [filter, setFilter] = useState('');

  const serchingFilter = e => {
    const value = e.currentTarget.value;
    setFilter(value);
  };

  return (
    <Container>
      <h1>PhoneBook</h1>
      <FormAddPhone />
      <h1>Contacts</h1>
      <FilterContacts item={filter} onChange={serchingFilter} />
      <ContactsList />
    </Container>
  );
};
