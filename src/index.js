import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Providers from './Contexts';

ReactDOM.render(
  <Providers>
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  </Providers>,
  document.getElementById('root')
);
