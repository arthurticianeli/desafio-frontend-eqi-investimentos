import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as InputChakra,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const InputPercentage = ({ name, defaultValue, label }) => {
  const [value, setValue] = useState(defaultValue || '');

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl>
      <FormLabel color={!!errors && 'red'}>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <InputChakra
            invalid={errors?.[name]}
            id={name}
            onChange={e => setValue(e.target.value + '%')}
            value={value}
            variant="unstyled"
            borderBottom={errors ? '1px solid red' : '1px solid black'}
            borderRadius={'0px'}
            {...field}
          />
        )}
      />
      <FormErrorMessage color="red.500">aaaaaaa</FormErrorMessage>
    </FormControl>
  );
};

export default InputPercentage;
