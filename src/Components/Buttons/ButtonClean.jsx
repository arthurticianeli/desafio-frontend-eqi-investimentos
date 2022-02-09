import { Button as ChakraButton } from '@chakra-ui/react';
import React from 'react';

function ButtonClean({ children }) {
  return (
    <ChakraButton
      isFullWidth
      size={'lg'}
      border={'1px black solid'}
      bg={'transparent'}
      mr={{ base: '0px', sm: '20px' }}
      mb={{ base: '20px', sm: '0px' }}
    >
      {children}
    </ChakraButton>
  );
}

export default ButtonClean;
