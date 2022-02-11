import { createContext, useContext, useState } from 'react';
import { api } from '../../Services/api';

const SimulationsContext = createContext({});

const useSimulations = data => {
  const context = useContext(SimulationsContext);

  return context;
};

const SimulationsProvider = ({ children }) => {
  const [simulation, setSimulation] = useState(null);

  const getSimulation = data => {
    api
      .get(
        `/simulacoes?tipoIndexacao=${data.indexadtionTypeData}&tipoRendimento=${data.incomingTypeData}`
      )
      .then(response => {
        setSimulation(response.data[0]);
      });
  };

  return (
    <SimulationsContext.Provider
      value={{
        simulation,
        getSimulation,
      }}
    >
      {children}
    </SimulationsContext.Provider>
  );
};

export { SimulationsProvider, useSimulations };
