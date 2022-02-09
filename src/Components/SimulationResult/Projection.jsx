import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
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
  const [isMobile] = useMediaQuery('(max-width: 30em)');
  return (
    <Box>
      <Heading as="h3" size={'md'}>
        Projeção de Valores
      </Heading>
      <Flex position={'relative'}>
        <Text
          position={'absolute'}
          bottom="10px"
          left="-10px"
          transformOrigin="0 0"
          transform="rotate(270deg)"
        >
          {isMobile ? 'Tempo (meses)' : 'Valor (R$)'}
        </Text>
        <Flex
          flexDir={{ base: 'column', sm: 'row' }}
          alignItems={{ base: 'flex-start', sm: 'flex-end' }}
          ml={'20px'}
          w="full"
        >
          {Projections.map((value, i) => (
            <Flex
              flexDir={{ base: 'row-reverse', sm: 'column' }}
              w={{ base: '', sm: 'full' }}
            >
              <Box
                h={{ base: 'full', sm: `${value}px` }}
                w={{ base: `${value}px`, sm: 'full' }}
                bg={'primary'}
              />
              <Box
                h={{ base: 'full', sm: '20px' }}
                w={{ base: '20px', sm: 'full' }}
                bg={'black'}
                mt={{ base: '0', sm: '5px' }}
                mr={{ base: 'px', sm: '0' }}
              />
              <Text textAlign={'center'} w={'25px'}>
                {i}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Box margin="auto">
        <Text textAlign={'center'}>
          {isMobile ? 'Valor (R$)' : 'Tempo (meses)'}
        </Text>
        <Center>
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
    </Box>
  );
}

export default Projection;
