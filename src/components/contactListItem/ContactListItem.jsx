import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';

const ContactsListItem = ({ id, name, number, children }) => {
  return (
    <>
      <li key={id}>
        {name}: {number} {children}
      </li>
      <Divider />
    </>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ContactsListItem;
