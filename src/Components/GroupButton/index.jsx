import { CheckIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup as ButtonGroupChakra } from '@chakra-ui/react';
import { useState } from 'react';

// prop buttons pass a array of strings (buttons names)
// prop initialSelected recives the id of the default selected button

const ButtonGroup = ({ buttons, setData }) => {
  const [buttonSelected, setButtonSelected] = useState(0);

  const handleChange = event => {
    setButtonSelected(event.target.id);
    setData(event.target.value);
  };

  return (
    <ButtonGroupChakra w="full" size={'lg'} isAttached>
      {buttons.map(button => (
        <Button
          value={button.value}
          id={button.id}
          w="full"
          key={button.id}
          fontSize={'12px'}
          fontWeight={'400'}
          border={'1px black solid'}
          bg={buttonSelected == button.id ? 'primary' : 'transparent'}
          color={buttonSelected == button.id ? 'white' : 'black'}
          _hover={{ bg: buttonSelected == button.id && 'primary' }}
          onClick={handleChange}
        >
          {buttonSelected == button.id && <CheckIcon mr="2px" />}
          {button.title}
        </Button>
      ))}
    </ButtonGroupChakra>
  );
};

export default ButtonGroup;
