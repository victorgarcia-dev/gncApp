import { useState, createContext, SetStateAction, Dispatch, ReactNode } from 'react';

type Date = {
    fechaHora: string
}

type Hour= {
    hora: string
}

type DateContextProps = {
    userDate: Date
    setUserDate: Dispatch<SetStateAction<Date>>
    userHour: Hour
    setUserHour:Dispatch<SetStateAction<Hour>>
}


type UserProviderProps = {
    children: ReactNode
}

export const DateContext = createContext<DateContextProps>(null!);

export const UserDateProvider = ( {children}: UserProviderProps ) => {
    const  [userDate, setUserDate] = useState({});
    const [userHour, setUserHour] = useState({})

    return(
        <DateContext.Provider value={{ userDate, setUserDate, setUserHour, userHour}}>
            {children}
        </DateContext.Provider>
    );

}