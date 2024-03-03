import { useEffect, useState } from 'react';
import MyProvider from '@contexts/MyProvider';
import Info from '@components/Info';
import ButtonInfo from '@components/ButtonInfo';
import { getUserList } from './services/user.services';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await getUserList();
      setUsers(result);
    };

    fetchUser();
  }, []);

  console.log(users);

  return (
    <MyProvider>
      <div className="App">
        <ButtonInfo />
        <div>
          <Info />
        </div>
      </div>
    </MyProvider>
  );
}

export default App;
