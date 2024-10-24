import { useState, useContext, useEffect } from 'react';
import LogoutButton from '../pages/auth/LogoutButton';
import { CrearOrganizacion } from '../pages/private/form/CrearOrganizacion';

import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { InfoOrganizationContext } from '../context/InfoOrganizationContext';
import { DashboardView } from '../pages/private/components/DashboardView';

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

export const AppLayoutPrivate = () => {

  const {setInfoOrganization} = useContext(InfoOrganizationContext);

  const { getIdTokenClaims, isAuthenticated } = useAuth0();
 
  const [data, setData] = useState<Organization[]>([]);  // Estado para almacenar los datos

  const handleFetchData =async () => {
        try {
          const response = await axios.get(`https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/organizacion/v1/users/${loadFromLocalStorage('idUser')}`, {
            headers: {
              Authorization: `Bearer ${loadFromLocalStorage('id_token')}`,  // Agregar el token de autorización aquí
            },
          });
          setData(response.data);
          setInfoOrganization(response.data[0])
        } catch (err) {
         console.log(err);
         console.log("nose encontro un usuario con ese id");
        }
      };  
   

   const loadFromLocalStorage = (key: string) => {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue || ""); // Convierte de JSON a su tipo original
  };


   useEffect(() => {
    const fetchIdToken = async () => {
      try {
        const tokenClaims = await getIdTokenClaims(); // Obtener el id_token
        saveToLocalStorage("id_token",tokenClaims?.__raw); // El token JWT crudo se encuentra en __raw
      } catch (error) {
        console.error('Error al obtener el ID Token:', error);
      }
    };
  
    if (isAuthenticated) {
      fetchIdToken();
    }
  }, []);

  const saveToLocalStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value)); // Convierte el valor a JSON
  };

  console.log(data);

  return (
    <>
       {
        !data.length ?(
          <div className="bg-white h-screen">
        
          <div className="relative isolate px-6 pt-3 lg:px-8">
          <div className="grid justify-items-end mr-3 mb-8 mt-2">
              <LogoutButton/>
          </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                ¡Bienvenido a PROPTYPE!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Gracias por unirte a nosotros. ¡Estamos emocionados de que pruebes nuestra app! Si tienes alguna duda, no dudes en contactarnos. ¡Esperamos que disfrutes de la experiencia!
                </p>
  
                <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  onClick={()=> handleFetchData()}>
                    Ingresar
                </button>
                  
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <div className="text-lg font-semibold leading-6 text-gray-900">
                    ¿No tienes una organizacion? crea una <span aria-hidden="true">→</span>
                  </div>
                  <CrearOrganizacion/>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
        </div>
        ): (
          <DashboardView/>
        )
       }
    </>
  )
}
