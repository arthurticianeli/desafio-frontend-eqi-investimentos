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
import { useSimulations } from '../../Contexts/Simulations';

function Simulator() {
  const { isLoading, CDI, IPCA, getIndicators } = useIndicators();
  const { getSimulation } = useSimulations();

  useEffect(() => {
    getIndicators();
  }, []);

  const [incomingTypeData, setIncomingTypeData] = useState('bruto');
  const [indexadtionTypeData, setIndexadtionTypeData] = useState('pre');

  const formSchema = yup.object().shape({
    initialContribution: yup
      .string()
      .required('Preencha o campo')
      .matches(
        /^R\$(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$/,
        'Aporte deve ser em Real (R$1.000,00)'
      ),
    term: yup
      .string()
      .required('Preencha o campo')
      .matches(/^[0-9]+$/, 'Prazo deve ser apenas número'),
    monthlyContribution: yup
      .string()
      .required('Preencha o campo')
      .matches(
        /^R\$(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$/,
        'Aporte deve ser em Real (R$1.000,00)'
      ),
    revenue: yup
      .string()
      .required('Preencha o campo')
      .matches(
        '\\d+(?:\\.\\d+)?%',
        'Rentabilidade deve ser uma porcentagem, exemplo "10%"'
      ),
    cdi: yup
      .string()
      .required('Preencha o campo')
      .matches(
        '\\d+(?:\\.\\d+)?%',
        'CDI deve ser uma porcentagem, exemplo "10%"'
      ),
    ipca: yup
      .string()
      .required('Preencha o campo')
      .matches(
        '\\d+(?:\\.\\d+)?%',
        'IPCA deve ser uma porcentagem, exemplo "10%"'
      ),
  });

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(formSchema) });

  // watch the fields on the formSchema (line 26)
  const watchFields = watch([
    'initialContribution',
    'term',
    'monthlyContribution',
    'revenue',
  ]);

  // pass trought the watched fields checking if it is empty
  const isEmptyWatcher = watchFields.every(e => e === undefined || e === '');

  const onSubmit = data => {
    console.log(data);
    getSimulation({ ...data, incomingTypeData, indexadtionTypeData });
  };

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
              buttons={[
                { title: 'Bruto', value: 'bruto', id: '0' },
                { title: 'Líquido', value: 'liquido', id: '1' },
              ]}
            />
          </FormControl>

          <FormControl
            label={'Aporte Inicial'}
            errors={errors.initialContribution}
          >
            <InputForm
              name="initialContribution"
              {...register('initialContribution')}
              errors={errors.initialContribution}
            />
          </FormControl>

          <FormControl label={'Prazo (em meses)'} errors={errors.term}>
            <InputForm name="term" {...register('term')} errors={errors.term} />
          </FormControl>

          <FormControl label={'IPCA (ao ano)'} errors={errors.ipca}>
            <InputForm
              name="ipca"
              {...register('ipca')}
              defaultValue={`${IPCA}%`}
              errors={errors.ipca}
            />
          </FormControl>
        </VStack>

        <VStack alignItems={'left'} spacing={'40px'} w="200px" mx="5px">
          <FormControl icon label={'Rendimento'}>
            <ButtonGroup
              setData={setIndexadtionTypeData}
              buttons={[
                { title: 'PRÉ', value: 'pre', id: '0' },
                { title: 'PÓS', value: 'pos', id: '1' },
                { title: 'FIXADO', value: 'ipca', id: '2' },
              ]}
            />
          </FormControl>
          <FormControl
            label={'Aporte Mensal'}
            errors={errors.monthlyContribution}
          >
            <InputForm
              name="monthlyContribution"
              {...register('monthlyContribution')}
              errors={errors.monthlyContribution}
            />
          </FormControl>
          <FormControl label={'Rentabilidade'} errors={errors.revenue}>
            <InputForm
              name="revenue"
              {...register('revenue')}
              errors={errors.revenue}
            />
          </FormControl>
          <FormControl label={'CDI (ao ano)'} errors={errors.cdi}>
            <InputForm
              name="cdi"
              {...register('cdi')}
              defaultValue={`${CDI}%`}
              errors={errors.cdi}
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
