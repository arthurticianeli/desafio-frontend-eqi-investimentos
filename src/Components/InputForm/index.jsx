import { Input as InputChakra } from '@chakra-ui/react';
import React, { forwardRef } from 'react';

const Input = ({ name, ...rest }, ref) => {
  return (
    <InputChakra
      name={name}
      id={name}
      variant="unstyled"
      w="100%"
      borderBottom={'1px solid black'}
      borderRadius={'0px'}
      ref={ref}
      {...rest}
    />
  );
};

export const InputForm = forwardRef(Input);
