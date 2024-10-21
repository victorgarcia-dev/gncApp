import { useState, useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../pages/private/components/Sidebar';
import { DashboardView } from '../pages/private/components/DashboardView';

import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { InfoOrganizationContext } from '../context/InfoOrganizationContext';

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
  const {setInfoOrganization} = useContext(InfoOrganizationContext)

  const { getIdTokenClaims, isAuthenticated } = useAuth0();

  const [data, setData] = useState<Organization[]>([]);  // Estado para almacenar los datos

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();  // Llamar a la función asíncrona
  }, []);  //

  //obtener datos del localStorage
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

  //guardar localstorage id_token
  const saveToLocalStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value)); // Convierte el valor a JSON
  };

  return (
    <>
      {
        data.length > 0 ? ( //verificao si existe el perfil
          <section>
          <div className='flex flex-row'>
              <div className='w-1/6 bg-gray-900 h-screen'>
                <Sidebar/>
              </div>
              <div className='bg-white w-5/6 h-screen'>
                 <Outlet/>
              </div>
          </div>
         </section>
        ) : (
          <DashboardView/>
        )
      }
    </>
  )
}
