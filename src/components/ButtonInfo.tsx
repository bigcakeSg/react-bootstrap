import { useContext } from 'react';
import MyContext from '@/contexts/MyContext';

const ButtonInfo = () => {
  const { changeValue } = useContext(MyContext);

  return <button onClick={() => changeValue()}>CLICK</button>;
};

export default ButtonInfo;
