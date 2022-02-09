import { VStack } from '@chakra-ui/react';
import React from 'react';
import { useIndicators } from '../../Contexts/Indicators';
import ButtonGroup from '../GroupButton';
import Input from '../Input';

function Income() {
  const { IPCA } = useIndicators();

  return (
    <VStack
      alignItems={'left'}
      spacing={'40px'}
      w="200px"
      mx="5px"
      mb={{ base: '50px', sm: '0px' }}
    >
      <ButtonGroup
        label={'Rendimento'}
        buttons={['Bruto', 'Líquido']}
        initialSelected={'0'}
      />
      <Input label={'Aporte Inicial'} errorText={'Errado'} />
      <Input label={'Prazo (em meses)'} errorText={'Errado'} />
      <Input label={'IPCA (ao ano)'} value={`${IPCA}%`} errorText={'Errado'} />
    </VStack>
  );
}

export default Income;
