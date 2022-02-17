import { createContext, useContext, useState } from 'react';
import { api } from '../../Services/api';

const IndicatorsContext = createContext({});

const useIndicators = () => {
  const context = useContext(IndicatorsContext);

  return context;
};

const IndicatorsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [CDI, setCDI] = useState('');
  const [IPCA, setIPCA] = useState('');

  const getIndicators = async () => {
    setIsLoading(true);
    await api.get('/indicadores?nome=cdi').then(response => {
      setCDI(response.data[0].valor);
    });
    await api.get('/indicadores?nome=ipca').then(response => {
      setIPCA(response.data[0].valor);
      setIsLoading(false);
    });
  };

  return (
    <IndicatorsContext.Provider
      value={{
        isLoading,
        CDI,
        IPCA,
        getIndicators,
      }}
    >
      {children}
    </IndicatorsContext.Provider>
  );
};

export { IndicatorsProvider, useIndicators };
