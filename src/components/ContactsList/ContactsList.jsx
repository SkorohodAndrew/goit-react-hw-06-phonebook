import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from '../../redux/contactsSlice';

import { Info, Span, Button } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact);
  const filter = useSelector(state => state.filter);

  const getFilterContacts = () => {
    const normalisedFilter = filter.toLocaleLowerCase();

    const filterdContacts = contacts.filter(({ name, number }) => {
      const normalisedName = name.toLocaleLowerCase();
      const normalisedNumber = number.toLocaleLowerCase();
      const result =
        normalisedName.includes(normalisedFilter) ||
        normalisedNumber.includes(normalisedFilter);

      return result;
    });

    return filterdContacts;
  };

  const filteredContacts = getFilterContacts();

  return filteredContacts.map(({ name, number, id }) => (
    <Info key={id}>
      {name} : {number}
      <Span onClick={() => dispatch(removeContacts(id))}>
        <Button>Delete</Button>
      </Span>
    </Info>
  ));
};
ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContacts: PropTypes.func.isRequired,
};
