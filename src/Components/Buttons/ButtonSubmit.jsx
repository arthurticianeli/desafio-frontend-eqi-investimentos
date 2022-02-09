import { Button as ChakraButton } from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';
import React from 'react';

// the prop correct set the bg to the primary color

function ButtonSubmit({ children, correct }) {
  return (
    <ChakraButton
      border={'none'}
      isFullWidth
      size={'lg'}
      bg={correct ? 'primary' : 'grey'}
      _hover={{ bg: correct ? whiten('primary', 20) : whiten('grey', 20) }}
    >
      {children}
    </ChakraButton>
  );
}

export default ButtonSubmit;
