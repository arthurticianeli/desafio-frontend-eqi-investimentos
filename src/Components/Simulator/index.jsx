import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useIndicators } from '../../Contexts/Indicators';
import ButtonReset from '../Buttons/ButtonClean';
import { ButtonSubmit } from '../Buttons/ButtonSubmit';
import ButtonGroup from '../GroupButton';
import { InputForm } from '../InputForm';

import FormControl from '../FormControl';

function Simulator() {
  const { isLoading, CDI, IPCA, getIndicators } = useIndicators();

  const [incomingTypeData, setIncomingTypeData] = useState('Bruto');
  const [indexadtionTypeData, setIndexadtionTypeData] = useState('PRÉ');

  const formSchema = yup.object().shape({
    initialContribution: yup.string().required('Preencha o campo'),
    term: yup.string().required('Preencha o campo'),
    monthlyContribution: yup.string().required('Preencha o campo'),
    revenue: yup.string().required('Preencha o campo'),
    cdi: yup.string().required('Preencha o campo'),
    ipca: yup.string().required('Preencha o campo'),
  });

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(formSchema), defaultValues: {} });

  const watchFields = watch([
    'initialContribution',
    'term',
    'monthlyContribution',
    'revenue',
  ]);

  const isEmptyWatcher = watchFields.every(e => e === undefined || e === '');

  const onSubmit = data => {
    console.log({ ...data, incomingTypeData, indexadtionTypeData });
  };

  useEffect(() => {
    getIndicators();
  }, []);

  if (isLoading) return <Box>Loading...</Box>;

  return (
    <VStack
      maxWidth={'500px'}
      w={'full'}
      spacing={'30px'}
      mb={{ base: '50px', xl: '0px' }}
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading as="h2" size="lg" alignSelf={'flex-start'}>
        Simulador
      </Heading>

      <Flex
        flexWrap={'wrap'}
        justifyContent={{ base: 'center', sm: 'space-between' }}
        w="full"
      >
        <VStack
          alignItems={'left'}
          spacing={'40px'}
          w="200px"
          mx="5px"
          mb={{ base: '50px', sm: '0px' }}
        >
          <FormControl icon label={'Rendimento'}>
            <ButtonGroup
              setData={setIncomingTypeData}
              buttons={['Bruto', 'Líquido']}
              initialSelected={'Bruto'}
            />
          </FormControl>

          <FormControl
            label={'Aporte Inicial'}
            errors={errors.initialContribution}
          >
            <InputForm
              name="initialContribution"
              {...register('initialContribution')}
            />
          </FormControl>

          <FormControl label={'Prazo (em meses)'} errors={errors.term}>
            <InputForm name="term" {...register('term')} />
          </FormControl>

          <FormControl label={'IPCA (ao ano)'} errors={errors.ipca}>
            <InputForm
              name="ipca"
              {...register('ipca')}
              defaultValue={`${IPCA}%`}
            />
          </FormControl>
        </VStack>

        <VStack alignItems={'left'} spacing={'40px'} w="200px" mx="5px">
          <FormControl icon label={'Rendimento'}>
            <ButtonGroup
              setData={setIndexadtionTypeData}
              buttons={['PRÉ', 'PÓS', 'FIXADO']}
              initialSelected={'PRÉ'}
            />
          </FormControl>
          <FormControl
            label={'Aporte Mensal'}
            errors={errors.monthlyContribution}
          >
            <InputForm
              name="monthlyContribution"
              {...register('monthlyContribution')}
            />
          </FormControl>
          <FormControl label={'Rentabilidade'} errors={errors.revenue}>
            <InputForm name="revenue" {...register('revenue')} />
          </FormControl>
          <FormControl label={'CDI (ao ano)'} errors={errors.cdi}>
            <InputForm
              name="cdi"
              {...register('cdi')}
              defaultValue={`${CDI}%`}
            />
          </FormControl>
        </VStack>
      </Flex>

      <Flex flexDir={{ base: 'column', sm: 'row' }}>
        <ButtonReset onClick={() => reset()}>Limpar campos</ButtonReset>
        <ButtonSubmit
          correct={!Object.keys(errors).length && !isEmptyWatcher}
          type="submit"
          isLoading={isSubmitting}
        >
          Simular
        </ButtonSubmit>
      </Flex>
    </VStack>
  );
}

export default Simulator;
