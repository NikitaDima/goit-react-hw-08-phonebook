import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../operations/operations';

const handleRejected = (state, action) => {
  state.operation = null;
  state.isLoading = false;
  state.error = action.payload;
};

const SliceContacts = createSlice({
  name: 'Contacts',
  initialState: {
    items: [],
    isLoading: false,
    operation: null,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.operation = 'fatch';
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.operation = 'add';
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.operation = null;
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.operation = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      });
  },
});

const SliceFilter = createSlice({
  name: 'Filter',
  initialState: '',
  reducers: {
    filterContacts(_, action) {
      return action.payload;
    },
  },
});

export const contactsReducers = SliceContacts.reducer;
export const { filterContacts } = SliceFilter.actions;
export { SliceFilter, SliceContacts };
