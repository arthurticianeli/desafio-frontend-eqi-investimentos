import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input as InputChakra,
} from '@chakra-ui/react';
import React from 'react';

function Input({ label, errorText, value }) {
  return (
    <FormControl>
      <FormLabel mb="20px">{label}</FormLabel>

      <InputChakra
        variant="unstyled"
        defaultValue={value}
        w="100%"
        borderBottom={'1px solid black'}
        borderRadius={'0px'}
      />
      <FormErrorMessage>{errorText}</FormErrorMessage>
    </FormControl>
  );
}

export default Input;
