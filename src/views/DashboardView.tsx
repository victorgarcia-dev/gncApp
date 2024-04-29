import { Link } from 'react-router-dom';

export const DashboardView = () => {
  return (
    <>
        <h1 className="text-5xl font-black">Mi Taller</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">Maneja y administra tus clientes</p>

        <nav className="my-5">
          <Link 
               className='bg-purple-400 hover:bg-purple-500 px-10 text-white text-xl font-bold cursor-pointer transition-colors'
               to='/form/createCar'
          >
            Nuevo Auto
          </Link>

        </nav>
    </>
  )
}
