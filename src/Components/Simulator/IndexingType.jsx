import { VStack } from '@chakra-ui/react';
import React from 'react';
import { useIndicators } from '../../Contexts/Indicators';
import ButtonGroup from '../GroupButton';
import Input from '../Input';

function IndexingType() {
  const { CDI } = useIndicators();

  return (
    <VStack alignItems={'left'} spacing={'40px'} w="200px" mx="5px">
      <ButtonGroup
        label={'Tipos de indexação'}
        buttons={['PRÉ', 'PÓS', 'FIXADO']}
        initialSelected={'1'}
      />
      <Input label={'Aporte Mensal'} errorText={'Errado'} />
      <Input label={'Rentabilidade'} errorText={'Errado'} />
      <Input label={'CDI (ao ano)'} value={`${CDI}%`} errorText={'Errado'} />
    </VStack>
  );
}

export default IndexingType;
