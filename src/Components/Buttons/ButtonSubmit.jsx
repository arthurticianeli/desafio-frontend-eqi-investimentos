import { Button as ChakraButton } from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';
import React from 'react';
import { useSimulations } from '../../Contexts/Simulations';

// the prop correct set the bg to the primary color

function ButtonSubmit({ children, correct }) {
  const { getSimulations } = useSimulations();

  const handleClick = () => {
    getSimulations();
  };

  return (
    <ChakraButton
      border={'none'}
      isFullWidth
      size={'lg'}
      bg={correct ? 'primary' : 'grey'}
      _hover={{ bg: correct ? whiten('primary', 20) : whiten('grey', 20) }}
      onClick={handleClick}
    >
      {children}
    </ChakraButton>
  );
}

export default ButtonSubmit;
