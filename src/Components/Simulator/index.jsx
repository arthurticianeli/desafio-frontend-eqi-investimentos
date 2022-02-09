import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import React from 'react';
import ButtonClean from '../Buttons/ButtonClean';
import ButtonSubmit from '../Buttons/ButtonSubmit';
import Income from './Income';
import Indexing from './IndexingType';

function Simulator() {
  return (
    <Grid rowGap={8} columnGap={20}>
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <Heading as="h2" size="lg">
          Simulador
        </Heading>
      </GridItem>
      <GridItem colSpan={1} minW={'300px'}>
        <Income />
      </GridItem>
      <GridItem colSpan={1} minW={'300px'}>
        <Indexing />
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <Flex flexDir={{ base: 'column', sm: 'row' }}>
          <ButtonClean>Limpar campos</ButtonClean>
          <ButtonSubmit>Simular</ButtonSubmit>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default Simulator;
