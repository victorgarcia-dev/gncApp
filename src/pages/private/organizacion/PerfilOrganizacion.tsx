import { VscOrganization } from "react-icons/vsc";
import { useEffect, useState } from "react";
import axios from "axios";

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



export const PerfilOrganizacion = () => {
const [data, setData] = useState<Organization[]>([]);  // Estado para almacenar los datos

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/organizacion/v1/users/${loadFromLocalStorage('idUser')}`, {
          headers: {
            Authorization: `Bearer ${loadFromLocalStorage('id_token')}`,  // Agregar el token de autorización aquí
          },
        });
        setData(response.data[0]);
      } catch (err) {
       console.log(err);
      }
    };

    fetchData();  // Llamar a la función asíncrona
  }, []);  //

  //obtener datos del localStorage
  const loadFromLocalStorage = (key: string) => {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue || ""); // Convierte de JSON a su tipo original
  };

  return (
    <div className='mx-3'>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Información de la Organización</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Nombre de la Organización</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.nombre || "----"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Razon Social</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.razonSocial || "----"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Cuit</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.cuit || "----"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Dirección</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.direccion || "----"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.email || "----"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Telefono</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.telefono || "----"}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Actualizar</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <VscOrganization className="h-5 w-5 flex-shrink-0 text-gray-900" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        actualizar Margot Foster
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button
                    className=" h-10 justify-center rounded-md bg-green-600 px-3  text-sm font-semibold text-white shadow-sm hover:bg-green-500"
                    >
                        Actualizar
                    </button> 
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
