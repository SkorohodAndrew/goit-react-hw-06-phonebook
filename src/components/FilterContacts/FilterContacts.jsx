import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { filterContacts } from 'redux/filterSlice';
import { Form, Label, Input } from './FilterContacts.styled';

export const FilterContacts = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const serchingFilter = e => {
    const value = e.currentTarget.value;
    dispatch(filterContacts(value));
  };

  return (
    <Form>
      <Label htmlFor="">Find Contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={serchingFilter}
      />
    </Form>
  );
};
