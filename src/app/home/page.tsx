import Home from '@/components/features/home';
import { getAllCharities } from '@/lib/charities';

const HomePage: React.FC = () => {
  const charities = getAllCharities();
  return <Home charities={charities} />;
};

export default HomePage;
