import { CheckIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup as ButtonGroupChakra,
  Flex,
  FormLabel,
} from '@chakra-ui/react';
import React, { useState } from 'react';

// prop buttons pass a array of strings (buttons names)
// prop initialSelected recives the id of the default selected button

function ButtonGroup({ label, buttons, initialSelected }) {
  const [buttonSelected, setButtonSelected] = useState(initialSelected);

  const handleClick = event => {
    setButtonSelected(event.target.id);
  };

  return (
    <Box>
      <Flex justifyContent={'space-between'}>
        <FormLabel>{label}</FormLabel>
        <InfoOutlineIcon />
      </Flex>
      <ButtonGroupChakra w="full" size={'lg'} isAttached>
        {buttons.map((buttonText, i) => (
          <Button
            w="full"
            key={i}
            id={i}
            fontSize={'12px'}
            fontWeight={'400'}
            border={'1px black solid'}
            bg={buttonSelected === i.toString() ? 'primary' : 'transparent'}
            color={buttonSelected === i.toString() ? 'white' : 'black'}
            _hover={{ bg: buttonSelected === i.toString() && 'primary' }}
            onClick={handleClick}
          >
            {buttonSelected === i.toString() && <CheckIcon mr="2px" />}
            {buttonText}
          </Button>
        ))}
      </ButtonGroupChakra>
    </Box>
  );
}

export default ButtonGroup;
