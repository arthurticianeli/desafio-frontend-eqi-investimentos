import { Grid, GridItem, Heading, VStack } from '@chakra-ui/react';
import React from 'react';

import Card from './Card';
import Projection from './Projection';

function SimulationResult() {
  return (
    <Grid rowGap={8} columnGap={20}>
      <GridItem colSpan={4}>
        <Heading as="h2" size="lg">
          Resultado da simulação
        </Heading>
      </GridItem>
      <GridItem colSpan={2} colStart={2}>
        <Card title={'Valor Final Bruto'} value={'R$ 15.509,27'} />
      </GridItem>
      <GridItem colSpan={2} colStart={2}>
        <Card title={'Alíquota do IR'} value={'20%'} />
      </GridItem>
      <GridItem colSpan={2} colStart={2}>
        <Card title={'Valor Pago em IR'} value={'R$ 1.509,27'} />
      </GridItem>
      <GridItem colSpan={2} colStart={2}>
        <Card title={'Valor Final Líquido'} value={'R$ 56.509,27'} green />
      </GridItem>
      <GridItem colSpan={2} colStart={2}>
        <Card title={'Valor Total Investido'} value={'R$ 9.509,27'} />
      </GridItem>
      <GridItem colSpan={2} colStart={2}>
        <Card title={'Ganho Líquido'} value={'R$ 47,000,00'} green />
      </GridItem>
      <GridItem colSpan={4}>
        <Projection />
      </GridItem>
    </Grid>
  );
}

export default SimulationResult;
