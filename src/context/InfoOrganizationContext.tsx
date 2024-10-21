import { useState, createContext, SetStateAction, Dispatch, ReactNode } from 'react';

type Organization = {
    id: number,
    nombre: string,
    razonSocial: string,
    cuit: string,
    intervaloPorHorario: number,
    direccion: string,
    telefono: string,
    email: string,
    uid: string,
    tipoOrganizacionId: number,
    localidadId: number
  }


type InfoOrganizationContextProps = {
    infoOrganization: Organization
    setInfoOrganization: Dispatch<SetStateAction<Date>> 
}

type InfoOrganizationProviderProps = {
    children: ReactNode
}

export const InfoOrganizationContext = createContext<InfoOrganizationContextProps>(null!);

export const InfoOrganizationProvider = ( {children}: InfoOrganizationProviderProps ) => {
    const  [infoOrganization, setInfoOrganization] = useState({});

    console.log(infoOrganization);
   

    return(
        <InfoOrganizationContext.Provider value={{ infoOrganization, setInfoOrganization}}>
            {children}
        </InfoOrganizationContext.Provider>
    );

}
