import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations/operations';
import ContactForm from '../../components/contactForm/ContactForm';
import Filter from '../../components/filter/Filter';
import ContactsList from '../../components/contactList/ContactList';
import { Box, Slide, Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { getTasks } from '../../redux/selectors/selectors';

const Contacts = () => {
  const contactsData = useSelector(getTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box textAlign="left">
      <h1>Phonebook</h1>
      <Grid container spacing={15}>
        <Grid item xs={6}>
          <Slide direction="down" in={true} mountOnEnter unmountOnExit>
            <div>
              <ContactForm />
            </div>
          </Slide>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              padding: '20px',
              width: '100%',
              height: '257px',
              overflowY: 'auto',
              maxWidth: '350px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, .3)',
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#999',
              },
            }}
          >
            <Slide direction="down" in={true} mountOnEnter unmountOnExit>
              <div>
                {contactsData.operation === 'fatch' ? (
                  <div>
                    <CircularProgress size={25} color="inherit" />
                  </div>
                ) : (
                  <>
                    <Filter />
                    <ContactsList />
                  </>
                )}
              </div>
            </Slide>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contacts;
