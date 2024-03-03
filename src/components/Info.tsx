import { useContext } from 'react';
import MyContext from '@/contexts/MyContext';

const Info = () => {
  const { value } = useContext(MyContext);

  return <>{value}</>;
};

export default Info;
