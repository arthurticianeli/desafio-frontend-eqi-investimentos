import { CheckIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup as ButtonGroupChakra } from '@chakra-ui/react';
import React, { forwardRef, useRef, useState } from 'react';

// prop buttons pass a array of strings (buttons names)
// prop initialSelected recives the id of the default selected button

const ButtonGroupBase = (
  { label, buttons, initialSelected, name, ...rest },
  ref
) => {
  const [buttonSelected, setButtonSelected] = useState(initialSelected);

  const handleClick = event => {
    console.log(event.target);
    setButtonSelected(event.target.value);
  };

  return (
    <ButtonGroupChakra w="full" size={'lg'} isAttached>
      {buttons.map((option, i) => (
        <Button
          name={name}
          value={option}
          onClick={handleClick}
          w="full"
          key={i}
          fontSize={'12px'}
          fontWeight={'400'}
          border={'1px black solid'}
          bg={buttonSelected === option ? 'primary' : 'transparent'}
          color={buttonSelected === option ? 'white' : 'black'}
          _hover={{ bg: buttonSelected === option && 'primary' }}
        >
          {buttonSelected === option && <CheckIcon mr="2px" />}
          {option}
        </Button>
      ))}
    </ButtonGroupChakra>
  );
};

export const ButtonGroup = forwardRef(ButtonGroupBase);
