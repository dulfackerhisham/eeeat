import './App.css';
import Header from './components/Header';
// import Body from './components/Body';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/Usercontext';
import { useEffect, useState } from 'react';

function App() {

  const [userData, setUserData] = useState();

  useEffect(() => {
    const data = {
      name: "Hisham Dulfacker"
    };
    setUserData(data.name);
  }, [])
  console.log(userData);

  return (
    <UserContext.Provider value={{loggedInUser: userData, setUserData}}>
    <div className="app">
      <Header />
    {/* <UserContext.Provider value={{loggedInUser: "sulthani"}}> */}

      <Outlet />
    {/* </UserContext.Provider> */}

    </div>
    </UserContext.Provider>
  )
}



export default App;
