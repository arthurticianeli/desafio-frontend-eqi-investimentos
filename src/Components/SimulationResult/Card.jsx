import { Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Card({ title, value, green }) {
  return (
    <Container
      display={'flex'}
      flexDir={'column'}
      boxShadow={'0px 0px 5px 0px rgba(0,0,0,0.4)'}
      p={'5px'}
      h={'75px'}
      textAlign={'center'}
      justifyContent={'space-between'}
    >
      <Heading as="h4" size="sm">
        {title}
      </Heading>
      <Text size="md" color={green && 'green'}>
        {value}
      </Text>
    </Container>
  );
}

export default Card;
