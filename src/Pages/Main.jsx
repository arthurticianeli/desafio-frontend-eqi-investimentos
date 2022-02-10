import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Simulator from '../Components/Simulator';
import SimulationResult from '../Components/SimulationResult';
import { useSimulations } from '../Contexts/Simulations';

function Main() {
  const { simulation } = useSimulations();

  return (
    <Box
      bg="background"
      paddingY="50px"
      w="full"
      maxWidth={'1440px'}
      p="20px"
      mx="auto"
      mt="50px"
    >
      <Heading textAlign={'center'} as="h1" mb="40px">
        Simulador de Investimentos
      </Heading>
      <Flex flexWrap={'wrap'}>
        <Simulator />

        {!!simulation && <SimulationResult />}
      </Flex>
    </Box>
  );
}

export default Main;
