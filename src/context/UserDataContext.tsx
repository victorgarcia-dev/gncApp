import { useState, createContext } from 'react';
import { Children } from '../types/index';

export const UserDataContext = createContext({});

export const UserDataProvider = ( {children}: Children ) => {

    const [usuario, setUser] = useState({});

  return (
    <UserDataContext.Provider
      value={{usuario,setUser}}
    >
       {children}
    </UserDataContext.Provider>
    
  )
}
