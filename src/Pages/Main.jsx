import React from 'react';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import Simulator from '../Components/Simulator';
import SimulationResult from '../Components/SimulationResult';

function Main() {
  return (
    // <Box bg="background" paddingY="50px" m="20px">
    //   <Grid rowGap={8} columnGap={20}>
    //     <GridItem colSpan={12}>
    //       <Heading textAlign={'center'} as="h1" mb="40px">
    //         Simulador de Investimentos
    //       </Heading>
    //     </GridItem>
    //     <GridItem colSpan={5} colStart={2}>
    //       <Simulator />
    //     </GridItem>
    //     <GridItem colSpan={5} colStart={7}>
    //       <SimulationResult />
    //     </GridItem>
    //   </Grid>
    // </Box>
    <Box bg="background" paddingY="50px" m="20px">
      <Grid rowGap={8} columnGap={20}>
        <GridItem colSpan={{ base: 1, sm: 4, md: 12 }}>
          <Heading textAlign={'center'} as="h1" mb="40px">
            Simulador de Investimentos
          </Heading>
        </GridItem>
        <GridItem
          colSpan={{ base: 1, sm: 2, md: 4 }}
          colStart={{ base: 0, sm: 2, md: 2 }}
        >
          <Simulator />
        </GridItem>
        <GridItem
          colSpan={{ base: 1, sm: 2, md: 4 }}
          colStart={{ base: 0, sm: 2, md: 7 }}
        >
          {/* <SimulationResult /> */}
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Main;
