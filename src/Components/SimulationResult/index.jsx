import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { useSimulations } from '../../Contexts/Simulations';

import Card from './Card';
import Projection from './Projection';

function CurrencyConverter(number) {
  return number.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function SimulationResult() {
  const { simulation } = useSimulations();

  const {
    valorFinalBruto,
    aliquotaIR,
    valorPagoIR,
    valorTotalInvestido,
    valorFinalLiquido,
    ganhoLiquido,
  } = simulation;

  return (
    <VStack
      maxWidth={'600px'}
      w={'full'}
      spacing={'30px'}
      mx={'auto'}
      alignItems={{ base: 'center', sm: 'flex-start' }}
    >
      <Heading as="h2" size="lg" alignSelf={'flex-start'}>
        Resultado da simulação
      </Heading>

      <SimpleGrid columns={[1, 3]} spacing="40px">
        <Card
          title={'Valor Final Bruto'}
          value={CurrencyConverter(valorFinalBruto)}
        />
        <Card title={'Alíquota do IR'} value={aliquotaIR} />
        <Card
          title={'Valor Pago em IR'}
          value={CurrencyConverter(valorPagoIR)}
        />
        <Card
          title={'Valor Final Líquido'}
          value={CurrencyConverter(valorFinalLiquido)}
          green
        />
        <Card
          title={'Valor Total Investido'}
          value={CurrencyConverter(valorTotalInvestido)}
        />
        <Card
          title={'Ganho Líquido'}
          value={CurrencyConverter(ganhoLiquido)}
          green
        />
      </SimpleGrid>

      <Projection />
    </VStack>
  );
}

export default SimulationResult;
