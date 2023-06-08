import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/Store';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
// import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        {/* <ChakraProvider> */}
        <App />
        {/* </ChakraProvider> */}
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
