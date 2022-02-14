import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';

import { useIndicators } from '../../Contexts/Indicators';
import { ButtonSubmit } from '../Buttons/ButtonSubmit';
import ButtonReset from '../Buttons/ButtonClean';

import { useSimulations } from '../../Contexts/Simulations';
import Loading from '../Loading';
import InputCurrency from '../Inputs/InputCurrency';
import InputPercentage from '../Inputs/InputPercentage';
import InputNumber from '../Inputs/InputNumber';
import InputGroup from '../Inputs/InputGroup';

function Simulator() {
  const { isLoading, CDI, IPCA, getIndicators } = useIndicators();
  const { getSimulation } = useSimulations();

  useEffect(() => {
    getIndicators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [incomingTypeData, setIncomingTypeData] = useState('bruto');
  const [indexadtionTypeData, setIndexadtionTypeData] = useState('pre');

  const formSchema = yup.object().shape({
    initialContribution: yup.number().typeError('Somente números'),
    // .required('Preencha o campo')
    // .matches(
    //   /^R\$(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$/,
    //   'Aporte deve ser em Real (R$1.000,00)'
    // ),
    term: yup.string(),
    // .required('Preencha o campo')
    // .matches(/^[0-9]+$/, 'Prazo deve ser apenas número'),
    monthlyContribution: yup.number().typeError('Somente números'),
    // .required('Preencha o campo')
    // .matches(
    //   /^R\$(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$/,
    //   'Aporte deve ser em Real (R$1.000,00)'
    // ),
    revenue: yup.string(),
    // .required('Preencha o campo')
    // .matches(
    //   '\\d+(?:\\.\\d+)?%',
    //   'Rentabilidade deve ser uma porcentagem, exemplo "10%"'
    // ),
    cdi: yup.string(),
    // .required('Preencha o campo')
    // .matches(
    //   '\\d+(?:\\.\\d+)?%',
    //   'CDI deve ser uma porcentagem, exemplo "10%"'
    // ),
    ipca: yup.string(),
    // .required('Preencha o campo')
    // .matches(
    //   '\\d+(?:\\.\\d+)?%',
    //   'IPCA deve ser uma porcentagem, exemplo "10%"'
    // ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(formSchema),
    defaultValues: {
      initialContribution: '',
      term: '',
      monthlyContribution: '',
      revenue: '',
      cdi: CDI,
      ipca: IPCA,
    },
  });

  const onSubmit = data => {
    getSimulation({ ...data, incomingTypeData, indexadtionTypeData });
  };

  if (isLoading) return <Loading />;

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
          <InputGroup
            label={'Rendimento'}
            setIncomingTypeData={setIncomingTypeData}
            buttons={[
              { title: 'Bruto', value: 'bruto', id: '0' },
              { title: 'Líquido', value: 'liquido', id: '1' },
            ]}
          />

          <FormControl>
            <FormLabel color={!!errors?.initialContribution && 'red'}>
              Aporte Inicial
            </FormLabel>
            <Input
              {...register('initialContribution')}
              id={'initialContribution'}
              variant="unstyled"
              borderBottom={
                !!errors?.initialContribution
                  ? '1px solid red'
                  : '1px solid black'
              }
              borderRadius={'0px'}
            />

            <FormErrorMessage fontSize={'sm'} color="red.500">
              {errors.initialContribution && errors.initialContribution.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel color={!!errors?.term && 'red'}>
              Prazo (em meses)
            </FormLabel>
            <Input
              {...register('term')}
              id={'term'}
              variant="unstyled"
              borderBottom={
                !!errors?.term ? '1px solid red' : '1px solid black'
              }
              borderRadius={'0px'}
            />

            <FormErrorMessage fontSize={'sm'} color="red.500">
              {errors.term && errors.term.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel color={!!errors?.ipca && 'red'}>IPCA (ao ano)</FormLabel>
            <Input
              {...register('ipca')}
              id={'ipca'}
              variant="unstyled"
              borderBottom={
                !!errors?.ipca ? '1px solid red' : '1px solid black'
              }
              borderRadius={'0px'}
              defaultValue={IPCA + '%'}
            />

            <FormErrorMessage fontSize={'sm'} color="red.500">
              {errors.ipca && errors.ipca.message}
            </FormErrorMessage>
          </FormControl>
        </VStack>

        <VStack alignItems={'left'} spacing={'40px'} w="200px" mx="5px">
          <InputGroup
            label={'Tipo de indexação'}
            setIncomingTypeData={setIndexadtionTypeData}
            buttons={[
              { title: 'PRÉ', value: 'pre', id: '0' },
              { title: 'PÓS', value: 'pos', id: '1' },
              { title: 'FIXADO', value: 'ipca', id: '2' },
            ]}
          />

          <FormControl>
            <FormLabel color={!!errors?.monthlyContribution && 'red'}>
              Aporte Mensal
            </FormLabel>
            <Input
              {...register('monthlyContribution')}
              id={'monthlyContribution'}
              variant="unstyled"
              borderBottom={
                !!errors?.monthlyContribution
                  ? '1px solid red'
                  : '1px solid black'
              }
              borderRadius={'0px'}
            />

            <FormErrorMessage fontSize={'sm'} color="red.500">
              {errors.monthlyContribution && errors.monthlyContribution.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel color={!!errors?.revenue && 'red'}>
              Rentabilidade
            </FormLabel>
            <Input
              {...register('revenue')}
              id={'revenue'}
              variant="unstyled"
              borderBottom={
                !!errors?.revenue ? '1px solid red' : '1px solid black'
              }
              borderRadius={'0px'}
            />

            <FormErrorMessage fontSize={'sm'} color="red.500">
              {errors.revenue && errors.revenue.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel color={!!errors?.cdi && 'red'}>CDI (ao ano)</FormLabel>
            <Input
              {...register('cdi')}
              id={'cdi'}
              variant="unstyled"
              borderBottom={!!errors?.cdi ? '1px solid red' : '1px solid black'}
              borderRadius={'0px'}
            />

            <FormErrorMessage fontSize={'sm'} color="red.500">
              {errors.cdi && errors.cdi.message}
            </FormErrorMessage>
          </FormControl>
        </VStack>
      </Flex>

      <Flex flexDir={{ base: 'column', sm: 'row' }}>
        <ButtonReset onClick={() => reset()}>Limpar campos</ButtonReset>
        <ButtonSubmit type="submit">Simular</ButtonSubmit>
      </Flex>
    </VStack>
  );
}

export default Simulator;
