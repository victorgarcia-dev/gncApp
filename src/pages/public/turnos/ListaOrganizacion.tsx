import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const ListaOrganizacion = () => {
    const [organizaciones, setOrganizaciones] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/organizacion')
      .then(response => {
        setOrganizaciones(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  const handleClick = (id:any) => {
    // Redirige a la nueva ruta con el id como parámetro
    navigate(`/listaOrganizacion/${id}`);
  };

  return (
    <div style={{ padding: '4rem', color: '#222632' }}>
        <p style={{ textAlign: 'center' }}>Organizaciones</p>
            <ul role="list" className="divide-y divide-gray-100">
            {organizaciones.map((org:any) => (
            <li key={org.id} onClick={() => handleClick(org.id)} className="flex justify-between gap-x-6 py-5">
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
  