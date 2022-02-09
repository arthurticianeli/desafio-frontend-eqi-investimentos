import { VStack } from '@chakra-ui/react';
import React from 'react';
import ButtonGroup from '../GroupButton';
import Input from '../Input';

function Income() {
  return (
    <VStack alignItems={'left'} spacing={'40px'}>
      <ButtonGroup
        label={'Rendimento'}
        buttons={['Bruto', 'Líquido']}
        initialSelected={'0'}
      />
      <Input label={'Aporte Inicial'} errorText={'Errado'} />
      <Input label={'Prazo (em meses)'} errorText={'Errado'} />
      <Input label={'IPCA (ao ano)'} value={'10,06%'} errorText={'Errado'} />
    </VStack>
  );
}

export default Income;
