import { Flex, Heading, Spinner } from '@chakra-ui/react';
import React from 'react';

function Loading() {
  return (
    <Flex flexDir={'column'} alignItems={'center'} m="auto" h="40vh">
      <Heading size={'lg'}>Carregando dados</Heading>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.300"
        color="primary"
        size="xl"
      />
    </Flex>
  );
}

export default Loading;
