import { ReactNode, useState } from 'react';
import MyContext from './MyContext';

interface ProviderProps {
  children: ReactNode;
}

const MyProvider = ({ children }: ProviderProps) => {
  const [value, setValue] = useState<number>(0);

  const changeValue = () => {
    setValue((prevValue) => {
      return ++prevValue;
    });
  };

  return (
    <MyContext.Provider value={{ value, changeValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
