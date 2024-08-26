import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
export const DetalleOrganizacion = () => {
    const [organizaciones, setOrganizaciones] = useState([]);
    const [error, setError] = useState(null);
    const { id } = useParams(); // Obtiene el id de la URL

  useEffect(() => {
    // Realiza la solicitud GET cuando el componente se monta
    axios.get('https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/organizacion')
      .then(response => {
        // Actualiza el estado con los datos recibidos
        setOrganizaciones(response.data);
        console.log(response.data)
      })
      .catch(error => {
        // Maneja cualquier error que ocurra durante la solicitud
        setError(error);
      });
  }, []);

  return (
    <div style={{ padding: '4rem', color: '#222632' }}>
        <p style={{ textAlign: 'center' }}>Organizaciones</p>
            <ul role="list" className="divide-y divide-gray-100">
            {organizaciones.map((org:any) => (
            <li key={org.id} className="flex justify-between gap-x-6 py-5">
                <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">9:00 hs - Disponible</p>
              </div>
            </li>
            ))}
            <li className="flex justify-between gap-x-6 py-5">
                <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-red-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">9:00 hs - No Disponible</p>
              </div>
            </li>
            </ul>
    </div>
  );
}
  