import { Heading } from '@chakra-ui/react';

import { useSimulations } from '../../Contexts/Simulations';
import Chart from './Chart';

function Projection() {
  const { simulation } = useSimulations();

  const { comAporte, semAporte } = simulation.graficoValores;

  return (
    <>
      <Heading as="h3" size={'md'} w="full">
        Projeção de Valores
      </Heading>
      <Chart comAporte={comAporte} semAporte={semAporte} />
    </>
  );
}

export default Projection;
