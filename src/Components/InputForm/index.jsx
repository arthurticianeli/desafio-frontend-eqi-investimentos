import { Input as InputChakra } from '@chakra-ui/react';
import React, { forwardRef, useState } from 'react';

const Input = ({ name, errors, defaultValue, ...rest }, ref) => {
  const [value, setValue] = useState(defaultValue || '');

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <InputChakra
      value={value}
      name={name}
      id={name}
      variant="unstyled"
      w="100%"
      borderBottom={errors ? '1px solid red' : '1px solid black'}
      borderRadius={'0px'}
      ref={ref}
      {...rest}
      onChange={handleChange}
    />
  );
};

export const InputForm = forwardRef(Input);
