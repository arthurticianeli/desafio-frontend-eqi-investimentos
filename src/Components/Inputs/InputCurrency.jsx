import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as InputChakra,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const InputCurrency = ({ label, name, errors, register }) => {
  const currencyConvert = value => {
    value = value.replace('.', '').replace(',', '').replace(/\D/g, '');

    const options = { minimumFractionDigits: 2 };
    const result = new Intl.NumberFormat('pt-BR', options).format(
      parseFloat(value) / 100
    );

    return 'R$ ' + result;
  };

  const [value, setValue] = useState(currencyConvert(''));

  return (
    <FormControl invalid={errors[name]}>
      <FormLabel color={!!errors?.[name] && 'red'}>{label}</FormLabel>
      <InputChakra
        name={name}
        id={name}
        onChange={e => setValue(currencyConvert(e.target.value))}
        value={value}
        variant="unstyled"
        borderBottom={!!errors?.[name] ? '1px solid red' : '1px solid black'}
        borderRadius={'0px'}
      />

      <FormErrorMessage fontSize={'sm'} color="red.500">
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default InputCurrency;
