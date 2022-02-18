import { Button as ChakraButton } from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';
import { forwardRef } from 'react';

// the prop correct set the bg to the primary color

const Button = ({ children, correct, ...rest }, ref) => {
  return (
    <ChakraButton
      border={'none'}
      isFullWidth
      size={'lg'}
      bg={correct ? 'primary' : 'grey'}
      _hover={{ bg: correct ? whiten('primary', 20) : whiten('grey', 20) }}
      ref={ref}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export const ButtonSubmit = forwardRef(Button);
