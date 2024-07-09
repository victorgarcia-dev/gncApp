import { useState, createContext, SetStateAction, Dispatch, ReactNode } from 'react';
import { UserData } from '../types';


type UserContextProps = {
    userData: UserData
    setUserData : Dispatch<SetStateAction<UserData>>
}

type UserProviderProps = {
    children: ReactNode
}

export const UserContext = createContext<UserContextProps>(null!);

export const UserProvider = ( {children}: UserProviderProps ) => {
    const  [userData, setUserData] = useState({});

    return(
        <UserContext.Provider value={{ userData, setUserData}}>
            {children}
        </UserContext.Provider>
    );

}