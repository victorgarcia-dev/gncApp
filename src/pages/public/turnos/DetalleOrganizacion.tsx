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
                <div className="flex min-w-0 gap-x-4">
            <img alt=""  className="h-12 w-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{org.nombre}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{org.direccion}</p>
            </div>
          </div>
            </li>
            ))}
            </ul>
    </div>
  );
}
  