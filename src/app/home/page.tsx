import Greeting from '@/components/features/home/Greeting';
import CharitiesList from '@/components/features/home/CharitiesList';
import { getAllCharities } from 'data/charities';

const HomePage: React.FC = () => {
  const charities = getAllCharities();
  return (
    <>
      <Greeting />
      <CharitiesList charities={charities} />
    </>
  );
};

export default HomePage;
