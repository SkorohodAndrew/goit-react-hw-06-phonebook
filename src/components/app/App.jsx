import { FormAddPhone } from '../FormAddPhone/FormAddPhone';
import { Contacts } from '../ContactsList/ContactsList';
import { FilterContacts } from '../FilterContacts/FilterContacts';

import { Container } from 'components/app/App.styled';

export const App = () => {
  return (
    <Container>
      <h1>PhoneBook</h1>
      <FormAddPhone />
      <h1>Contacts</h1>
      <FilterContacts />
      <Contacts />
    </Container>
  );
};
