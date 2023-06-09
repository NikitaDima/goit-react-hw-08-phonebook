import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations/operations';
import ContactForm from '../../components/contactForm/ContactForm';
import Filter from '../../components/filter/Filter';
import ContactsList from '../../components/contactList/ContactList';

import { ContactsTitle, ContactsWrapper, Spiner } from './Contacts.styled';

import { getTasks } from '../../redux/selectors/selectors';

const Contacts = () => {
  const contactsData = useSelector(getTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsWrapper>
      <ContactsTitle>Phonebook</ContactsTitle>
      <div style={{ marginBottom: '20px' }}>
        <ContactForm />
      </div>
      <div>
        {contactsData.operation === 'fatch' ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Spiner />
          </div>
        ) : (
          <>
            <Filter />
            <ContactsList />
          </>
        )}
      </div>
    </ContactsWrapper>
  );
};

export default Contacts;
