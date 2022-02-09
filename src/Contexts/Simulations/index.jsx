import { createContext, useContext, useState } from 'react';
import { api } from '../../Services/api';

const SimulationsContext = createContext({});

const useSimulations = () => {
  const context = useContext(SimulationsContext);

  return context;
};

const SimulationsProvider = ({ children }) => {
  const [simulation, setSimulation] = useState(null);

  const getSimulations = () => {
    api
      .get('/simulacoes?tipoIndexacao=pre&tipoRendimento=bruto')
      .then(response => {
        setSimulation(response.data[0]);
      });
  };

  return (
    <SimulationsContext.Provider
      value={{
        simulation,
        getSimulations,
      }}
    >
      {children}
    </SimulationsContext.Provider>
  );
};

export { SimulationsProvider, useSimulations };
