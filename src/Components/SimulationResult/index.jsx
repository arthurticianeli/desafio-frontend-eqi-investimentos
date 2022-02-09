import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';

import Card from './Card';
import Projection from './Projection';

function SimulationResult() {
  return (
    <VStack
      maxWidth={'600px'}
      w={'full'}
      spacing={'30px'}
      mx={'auto'}
      alignItems={'flex-start'}
    >
      <Heading as="h2" size="lg" alignSelf={'flex-start'}>
        Resultado da simulação
      </Heading>

      <SimpleGrid columns={[1, 3]} spacing="40px">
        <Card title={'Valor Final Bruto'} value={'R$ 15.509,27'} />
        <Card title={'Alíquota do IR'} value={'20%'} />
        <Card title={'Valor Pago em IR'} value={'R$ 1.509,27'} />
        <Card title={'Valor Final Líquido'} value={'R$ 56.509,27'} green />
        <Card title={'Valor Total Investido'} value={'R$ 9.509,27'} />
        <Card title={'Ganho Líquido'} value={'R$ 47,000,00'} green />
      </SimpleGrid>

      <Projection />
    </VStack>
  );
}

export default SimulationResult;
