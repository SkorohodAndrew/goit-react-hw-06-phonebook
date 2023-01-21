import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import { Form, Label, Input, Button } from './FormAddPhone.styled';

const nameInputId = nanoid(5);
const numberInputId = nanoid(8);

export const FormAddPhone = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'number':
        return setNumber(value);
      case 'name':
        return setName(value);
      default:
        return;
    }
  };

  const chekingContacts = () => {
    const result = contacts.find(
      contact => contact.name === name && contact.number === number
    );
    if (result) {
      return alert(` Такий ${name} i ${number} вже є`);
    }

    return result;
  };

  const handleSubmit = e => {
    e.preventDefault();
    chekingContacts();
    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          id={nameInputId}
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <Label htmlFor={numberInputId}>Number</Label>
        <Input
          id={numberInputId}
          name="number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Button>Add contact</Button>
      </div>
    </Form>
  );
};
