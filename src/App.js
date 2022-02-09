import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Main from './Pages/Main';
import { theme } from './Theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}

export default App;
