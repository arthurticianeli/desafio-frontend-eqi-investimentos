import { CheckIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup as ButtonGroupChakra } from '@chakra-ui/react';
import { useState } from 'react';

// prop buttons pass a array of strings (buttons names)
// prop initialSelected recives the id of the default selected button

const ButtonGroup = ({ buttons, initialSelected, setData }) => {
  const [buttonSelected, setButtonSelected] = useState(initialSelected);

  const handleChange = event => {
    setButtonSelected(event.target.value);
    setData(event.target.value);
  };

  return (
    <ButtonGroupChakra w="full" size={'lg'} isAttached>
      {buttons.map((option, i) => (
        <Button
          value={option}
          w="full"
          key={i}
          fontSize={'12px'}
          fontWeight={'400'}
          border={'1px black solid'}
          bg={buttonSelected === option ? 'primary' : 'transparent'}
          color={buttonSelected === option ? 'white' : 'black'}
          _hover={{ bg: buttonSelected === option && 'primary' }}
          onClick={handleChange}
        >
          {buttonSelected === option && <CheckIcon mr="2px" />}
          {option}
        </Button>
      ))}
    </ButtonGroupChakra>
  );
};

export default ButtonGroup;
