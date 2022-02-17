import { Box, FormLabel, Input, Text } from '@chakra-ui/react';

import { Controller } from 'react-hook-form';

// const formatter = value =>
//   new Intl.NumberFormat('pt-BR', {
//     style: 'currency',
//     currency: 'BRL',
//     minimumFractionDigits: 2,
//   }).format(value);

const InputCurrency = ({ label, error, name, control }) => {
  return (
    <Box id={name}>
      <FormLabel color={!!error && 'red'}>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            isInvalid={error}
            variant="unstyled"
            borderBottom={!!error ? '1px solid red' : '1px solid black'}
            borderRadius={'0px'}
            {...field}
          />
        )}
      />
      <Text fontSize={'sm'} color={'red.500'} h="20px">
        {error?.message && error.message}
      </Text>
    </Box>
  );
};

export default InputCurrency;
