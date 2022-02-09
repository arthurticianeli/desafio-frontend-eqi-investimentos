import { Box, Center, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const Projections = [
  '1.3',
  '2.0',
  '2.5',
  '3.0',
  '4.5',
  '6',
  '7',
  '8',
  '9.8',
  '11',
  '23',
  '30',
  '34',
  '36',
  '40',
  '46',
  '10',
  '120',
];

function Projection() {
  return (
    <Box>
      <Heading>Projeção de Valores</Heading>
      <HStack alignItems={'flex-end'}>
        {Projections.map((value, i) => (
          <Flex flexDir={'column-reverse'}>
            <Text textAlign={'center'}>{i}</Text>
            <Box minW="20px" h={'20px'} bg={'black'} mt="5px" />
            <Box h={`${value}px`} bg={'primary'} />
          </Flex>
        ))}
      </HStack>
      <Center margin="auto">
        <Flex mr="50px">
          <Box
            w={'20px'}
            h={'20px'}
            mr={'5px'}
            bg="primary"
            borderRadius={'full'}
          />
          <Text>Com aporte</Text>
        </Flex>
        <Flex>
          <Box
            w={'20px'}
            h={'20px'}
            mr={'5px'}
            bg="black"
            borderRadius={'full'}
          />
          <Text>Sem aporte</Text>
        </Flex>
      </Center>
    </Box>
  );
}

export default Projection;
