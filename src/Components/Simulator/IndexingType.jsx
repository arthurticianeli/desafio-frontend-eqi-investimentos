import { VStack } from '@chakra-ui/react';
import React from 'react';
import ButtonGroup from '../GroupButton';
import Input from '../Input';

function IndexingType() {
  return (
    <VStack alignItems={'left'} spacing={'40px'} w="200px" mx="5px">
      <ButtonGroup
        label={'Tipos de indexação'}
        buttons={['PRÉ', 'PÓS', 'FIXADO']}
        initialSelected={'1'}
      />
      <Input label={'Aporte Mensal'} errorText={'Errado'} />
      <Input label={'Rentabilidade'} errorText={'Errado'} />
      <Input label={'IPCA (ao ano)'} value={'10,06%'} errorText={'Errado'} />
    </VStack>
  );
}

export default IndexingType;
