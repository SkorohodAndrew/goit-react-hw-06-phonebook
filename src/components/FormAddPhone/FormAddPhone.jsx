import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/contactsSlice';

import { Form, Label, Input, Button } from './FormAddPhone.styled';

const nameId = nanoid(5);
const numberId = nanoid(8);

export const FormAddPhone = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact);

  const handleInputChange = contact => {
    contact.preventDefault();
    isDuplicate();
    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  const isDuplicate = ({ name, number }) => {
    const result = contacts.find(
      contact => contact.name === name && contact.number === number
    );
    if (result({ name, number })) {
      return alert(` Такий ${name} i ${number} вже є`);
    }

    return result;
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleInputChange}>
      <div>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          id={nameId}
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor={numberId}>Number</Label>
        <Input
          id={numberId}
          name="number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Button>Add contact</Button>
      </div>
    </Form>
  );
};

FormAddPhone.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
