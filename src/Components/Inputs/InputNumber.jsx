import { Box, FormLabel, Input, Text } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

const InputNumber = ({ label, name, error, control }) => {
  return (
    <Box>
      <FormLabel color={!!error && 'red'}>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            variant="unstyled"
            borderBottom={error ? '1px solid red' : '1px solid black'}
            borderRadius={'0px'}
            {...field}
          />
        )}
      />
      <Text fontSize={'sm'} color={'red.500'} h="10px">
        {error?.message && error.message}
      </Text>
    </Box>
  );
};

export default InputNumber;
