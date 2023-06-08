import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations/operations';
import ContactForm from '../../components/contactForm/ContactForm';
import Filter from '../../components/filter/Filter';
import ContactsList from '../../components/contactList/ContactList';

import { Spiner } from './Contacts.styled';

import { getTasks } from '../../redux/selectors/selectors';

const Contacts = () => {
  const contactsData = useSelector(getTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <ContactForm />
      </div>
      <div>
        {contactsData.operation === 'fatch' ? (
          <div>
            <Spiner />
          </div>
        ) : (
          <>
            <Filter />
            <ContactsList />
          </>
        )}
      </div>
    </div>
  );
};

export default Contacts;
