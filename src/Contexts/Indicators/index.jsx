import { createContext, useContext, useState } from 'react';
import { api } from '../../Services/api';

const IndicatorsContext = createContext({});

const useIndicators = () => {
  const context = useContext(IndicatorsContext);

  return context;
};

const IndicatorsProvider = ({ children }) => {
  const [CDI, setCDI] = useState(Number);
  const [IPCA, setIPCA] = useState(Number);

  const getIndicators = () => {
    api.get('/indicadores?nome=cdi').then(response => {
      setCDI(response.data[0].valor);
    });
    api.get('/indicadores?nome=ipca').then(response => {
      setIPCA(response.data[0].valor);
    });
  };

  return (
    <IndicatorsContext.Provider
      value={{
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
