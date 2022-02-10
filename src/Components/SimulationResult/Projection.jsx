import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

import { useSimulations } from '../../Contexts/Simulations';

function Projection() {
  const [isMobile] = useMediaQuery('(max-width: 30em)');

  const { simulation } = useSimulations();

  const { comAporte, semAporte } = simulation.graficoValores;

  return (
    <>
      <Heading as="h3" size={'md'} w="full">
        Projeção de Valores
      </Heading>
      <Box w={{ base: 'fit-content', sm: 'full' }}>
        <Flex position={'relative'} h="150px">
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
            flexDir={{ base: 'column-reverse', sm: 'row' }}
            alignItems={{ base: 'flex-start', sm: 'flex-end' }}
            ml={'20px'}
            w="full"
            h="100%"
          >
            {Object.keys(comAporte).map((item, i) => (
              <Flex
                flexDir={{ base: 'row-reverse', sm: 'row' }}
                alignItems={'flex-end'}
                w={{ base: '', sm: 'full' }}
                h="100%"
                key={i}
              >
                <Flex flexDir={'column'} justifyContent={'flex-end'} h="100%">
                  <Box
                    h={{ base: 'full', sm: `${comAporte[item] / 100}%` }}
                    w={{ base: `${comAporte[item] / 100}%`, sm: 'full' }}
                    bg={'primary'}
                  />

                  <Box
                    h={{ base: 'full', sm: `${semAporte[item] / 100}px` }}
                    w={{ base: `${semAporte[item] / 100}`, sm: 'full' }}
                    bg={'black'}
                    mt={{ base: '0', sm: '2px' }}
                    mr={{ base: '2px', sm: '0' }}
                  />
                  <Text textAlign={'center'} w={'25px'}>
                    {i}
                  </Text>
                </Flex>
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
    </>
  );
}

export default Projection;
