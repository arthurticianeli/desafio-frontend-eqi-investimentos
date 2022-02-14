import { Box, Center, Flex, Skeleton, Stack } from '@chakra-ui/react';
import React from 'react';

function Loading() {
  return (
    <Stack>
      <Skeleton height="50px" width={'150px'} />
      <Flex flexWrap={'wrap'} justifyContent={'center'}>
        <Box mr={{ base: '0px', sm: '20px' }}>
          <Skeleton height="100px" width={'250px'} />
          <Skeleton height="80px" width={'250px'} />
          <Skeleton height="80px" width={'250px'} />
          <Skeleton height="80px" width={'250px'} />
        </Box>
        <Box>
          <Skeleton height="100px" width={'250px'} />
          <Skeleton height="80px" width={'250px'} />
          <Skeleton height="80px" width={'250px'} />
          <Skeleton height="80px" width={'250px'} />
        </Box>
      </Flex>
      <Center>
        <Flex flexWrap={'wrap'} justifyContent={'center'}>
          <Skeleton
            height="80px"
            width={'200px'}
            mr={{ base: '0px', sm: '20px' }}
          />
          <Skeleton height="80px" width={'200px'} />
        </Flex>
      </Center>
    </Stack>
  );
}

export default Loading;
