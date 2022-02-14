import { CheckIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Flex,
  FormControl,
  FormLabel,
  Button,
  ButtonGroup as ButtonGroupChakra,
} from '@chakra-ui/react';
import { useState } from 'react';
const InputGroup = ({ label, setIncomingTypeData, buttons }) => {
  const [buttonSelected, setButtonSelected] = useState(0);

  const handleChange = event => {
    setButtonSelected(event.target.id);
    setIncomingTypeData(event.target.value);
  };

  return (
    <FormControl>
      <Flex justifyContent={'space-between'}>
        <FormLabel>{label}</FormLabel>
        <InfoOutlineIcon />
      </Flex>
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
      </ButtonGroupChakra>{' '}
    </FormControl>
  );
};

export default InputGroup;
