import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations/operations';
import ContactsListItem from '../contactListItem/ContactListItem';

import { ListBtn, Spiner } from './ContactList.styled';

const ContactsList = () => {
  const [loadingContacts, setLoadingContacts] = useState([]);
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleClick = id => {
    setLoadingContacts(prevState => [...prevState, id]);
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul>
        {filteredContacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          >
            <ListBtn onClick={() => handleClick(contact.id)}>
              {loadingContacts.includes(contact.id) ? <Spiner /> : 'delete'}
            </ListBtn>
          </ContactsListItem>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
