import { Flex, Heading, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useIndicators } from '../../Contexts/Indicators';
import ButtonClean from '../Buttons/ButtonClean';
import ButtonSubmit from '../Buttons/ButtonSubmit';
import Income from './Income';
import Indexing from './IndexingType';

function Simulator() {
  const { getIndicators } = useIndicators();

  useEffect(() => {
    getIndicators();
  }, []);

  return (
    <VStack
      maxWidth={'500px'}
      w={'full'}
      spacing={'30px'}
      mb={{ base: '50px', xl: '0px' }}
    >
      <Heading as="h2" size="lg" alignSelf={'flex-start'}>
        Simulador
      </Heading>

      <Flex
        flexWrap={'wrap'}
        justifyContent={{ base: 'center', sm: 'space-between' }}
        w="full"
      >
        <Income />
        <Indexing />
      </Flex>

      <Flex flexDir={{ base: 'column', sm: 'row' }}>
        <ButtonClean>Limpar campos</ButtonClean>
        <ButtonSubmit>Simular</ButtonSubmit>
      </Flex>
    </VStack>
  );
}

export default Simulator;
