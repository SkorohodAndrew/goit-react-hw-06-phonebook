import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';

import { Info, Span, Button } from './ContactsList.styled';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const contactFiltering = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filteredContacts = contactFiltering();

  return filteredContacts.map(({ name, number, id }) => (
    <Info key={id}>
      {name} : {number}
      <Span onClick={() => dispatch(removeContacts(id))}>
        <Button>Delete</Button>
      </Span>
    </Info>
  ));
};

// ContactsList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   removeContacts: PropTypes.func.isRequired,
// };
