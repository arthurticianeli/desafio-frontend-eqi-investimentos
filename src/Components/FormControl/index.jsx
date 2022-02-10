import { InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Flex,
  FormControl as FormControlChakra,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import React from 'react';

function FormControl({ children, label, icon, errors }) {
  return (
    <FormControlChakra isInvalid={!!errors} errortext={errors?.message}>
      <Flex justifyContent={'space-between'}>
        <FormLabel>{label}</FormLabel>
        {icon && <InfoOutlineIcon />}
      </Flex>
      {children}
      <FormErrorMessage color="red.500">{errors?.message}</FormErrorMessage>
    </FormControlChakra>
  );
}

export default FormControl;
