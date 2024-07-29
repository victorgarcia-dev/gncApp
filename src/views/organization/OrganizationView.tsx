import { Link } from 'react-router-dom';

export const OrganizationView = () => {
  return (
    <>
        <h1 className="text-2xl font-black text-center">Mi Organización</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">Maneja y administra tus clientes</p>

        <nav className="my-5 flex flex-col">
          <Link 
               className='bg-purple-400 hover:bg-purple-500 px-10 text-white text-xl font-bold cursor-pointer transition-colors mb-3'
               to='/organization/form/createOrganizationalSchedules'
          >
            Definir horarios
          </Link>
          <Link 
               className='bg-purple-400 hover:bg-purple-500 px-10 text-white text-xl font-bold cursor-pointer transition-colors mb-3'
               to='/organization/form/createServiceOrganization'
          >
            Crear Servicio
          </Link>
          <Link 
               className='bg-purple-400 hover:bg-purple-500 px-10 text-white text-xl font-bold cursor-pointer transition-colors mb-3'
               to='/organization/organizationShifts'
          >
            Ver turnos
          </Link>

        </nav>
    </>
  )
}
