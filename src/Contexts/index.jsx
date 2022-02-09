import { IndicatorsProvider } from './Indicators';
import { SimulationsProvider } from './Simulations';

const Providers = ({ children }) => {
  return (
    <IndicatorsProvider>
      <SimulationsProvider>{children}</SimulationsProvider>;
    </IndicatorsProvider>
  );
};

export default Providers;
