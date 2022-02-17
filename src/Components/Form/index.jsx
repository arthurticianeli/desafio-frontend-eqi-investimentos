import React, { useEffect, useState } from 'react';
import { Flex, Heading, VStack } from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { useIndicators } from '../../Contexts/Indicators';
import { ButtonSubmit } from '../Buttons/ButtonSubmit';
import ButtonReset from '../Buttons/ButtonClean';
import { useSimulations } from '../../Contexts/Simulations';
import Loading from '../Loading';
import InputGroup from '../Inputs/InputGroup';
import InputCurrency from '../Inputs/InputCurrency';
import InputNumber from '../Inputs/InputNumber';
import InputPercentage from '../Inputs/InputPercentage';

function Form() {
  const { isLoading, getIndicators } = useIndicators();
  const { getSimulation } = useSimulations();

  useEffect(() => {
    getIndicators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [incomingTypeData, setIncomingTypeData] = useState('bruto');
  const [indexadtionTypeData, setIndexadtionTypeData] = useState('pre');

  const formSchema = yup.object().shape({
    initialContribution: yup
      .string()
      .required('Preencha o campo')
      .matches(
        /^R\$(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$/,
        'Digite o valor em Real (ex. R$1.000,00)'
      ),
    term: yup
      .string()
      .required('Preencha o campo')
      .matches(/^[0-9]*$/, 'Apenas números'),
    monthlyContribution: yup
      .string()
      .required('Preencha o campo')
      .matches(
        /^R\$(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$/,
        'Digite o valor em Real (ex. R$1.000,00)'
      ),
    revenue: yup
      .string()
      .required('Preencha o campo')
      .matches(
        /\b(?<!\.)(?!0+(?:\.0+)?%)(?:\d|[1-9]\d|100)(?:(?<!100)\.\d+)?%/,
        'Apenas porcentagem (ex. 10%)'
      ),
    cdi: yup
      .string()
      .required('Preencha o campo')
      .matches(
        /\b(?<!\.)(?!0+(?:\.0+)?%)(?:\d|[1-9]\d|100)(?:(?<!100)\.\d+)?%/,
        'Apenas porcentagem (ex. 10%)'
      ),
    ipca: yup
      .string()
      .required('Preencha o campo')
      .matches(
        /\b(?<!\.)(?!0+(?:\.0+)?%)(?:\d|[1-9]\d|100)(?:(?<!100)\.\d+)?%/,
        'Apenas porcentagem (ex. 10%)'
      ),
  });

  const defaultValues = {
    initialContribution: '',
    term: '',
    monthlyContribution: '',
    revenue: '',
    ipca: '10.06%',
    cdi: '9.15%',
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(formSchema),
    defaultValues: defaultValues,
  });

  const isCorrect = JSON.stringify(errors) === '{}';

  const onSubmit = data => {
    getSimulation({ ...data, incomingTypeData, indexadtionTypeData });
  };

  if (isLoading) return <Loading />;

  return (
    <FormProvider>
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
            spacing={'30px'}
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

            <InputCurrency
              name="initialContribution"
              label="Aporte Inicial"
              error={errors.initialContribution}
              control={control}
            />

            <InputNumber
              name="term"
              label="Prazo (em meses)"
              error={errors.term}
              control={control}
            />

            <InputPercentage
              name="ipca"
              label="IPCA (ao ano)"
              error={errors.ipca}
              control={control}
            />
          </VStack>

          <VStack alignItems={'left'} spacing={'30px'} w="200px" mx="5px">
            <InputGroup
              label={'Tipo de indexação'}
              setIncomingTypeData={setIndexadtionTypeData}
              buttons={[
                { title: 'PRÉ', value: 'pre', id: '0' },
                { title: 'PÓS', value: 'pos', id: '1' },
                { title: 'FIXADO', value: 'ipca', id: '2' },
              ]}
            />

            <InputCurrency
              name="monthlyContribution"
              label="Aporte Mensal"
              error={errors.monthlyContribution}
              control={control}
            />

            <InputNumber
              name="revenue"
              label="Rentabilidade"
              error={errors.revenue}
              control={control}
            />

            <InputPercentage
              name="cdi"
              label="CDI (ao ano)"
              error={errors.cdi}
              control={control}
            />
          </VStack>
        </Flex>

        <Flex flexDir={{ base: 'column', sm: 'row' }}>
          <ButtonReset onClick={() => reset()}>Limpar campos</ButtonReset>
          <ButtonSubmit correct={isCorrect && 'true'} type="submit">
            Simular
          </ButtonSubmit>
        </Flex>
      </VStack>
    </FormProvider>
  );
}

export default Form;
