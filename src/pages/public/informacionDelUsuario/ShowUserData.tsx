import { AlertMessage } from '../../../components/AlertMessage';

const usuario = {
  "id": 3,
  "peccod": "3455",
  "codtal": "HIT0749",
  "talcuit": "30-71287010-5",
  "tnrointopr": "001",
  "pmatreshab": 5,
  "rmatreshab": "ABC",
  "ucodgest": 987,
  "udescgest": "XY",
  "uobleaant": "ANT123456789",
  "uobleanew": "NEW1234567",
  "udominio": "AD129AM",
  "umarca": "Toyota",
  "umodelo": "Corolla",
  "uano": "2022",
  "utipuso": 1,
  "uapeynom": "Melba Mondragon sorin",
  "ucalle": "San Martin s/n",
  "ubarrio": "Springfield",
  "ulocalidad": "Santa Rosa",
  "uprovincia": "La Pampa",
  "ucodpostal": "1234",
  "ucaract": "Particular",
  "utipodoc": "DNI",
  "utelefono": "12345678",
  "unrodoc": "12345678",
  "ufecrev": "2024-06-03",
  "ufecmont": "2024-06-03",
  "ufechab": "2019-05-30",
  "ufecvenhab": "2024-06-30T12:00:00",
  "uobservac": "Observaciones sobre el registro de ejemplo",
  "xfecmodrec": null,
  "xtipoprrec": null,
  "xfectrf": null,
  "xfecasig": null,
  "inyeccion": "Y",
  "email": "juan@example.com",
  "cuphmes": "Julio",
  "cuphano": 2021,
  "phpropia": 1,
  "usuario": 123,
  "envioId": 456,
  "te_tipo": "A"
}

export const ShowUserData = () => {

  return (
    <div className='mt-3 mr-2 ml-2 bg-white shadow-lg p-2 rounded-lg text-indigo-500'>
      <h2 className='bg-gray-200 shadow-lg text-center font-extrabold p-2 rounded-lg max-w-72'>ESTADO DEL EQUIPO</h2>
        <div className='mt-6 mx-2 text-gray-800 mb-6'>
            <h3 className='font-bold mb-3'>DATOS DE LA OBLEA</h3>
            <div className='mb-2 pb-2 flex justify-between border-b border-gray-400'>
              <p className='text-sm text-gray-500'>N° Oblea anterior</p>
              <p className='text-gray-900 text-sm font-bold'>{usuario.uobleaant}</p>
            </div>
            <div className='mb-2 pb-2 flex justify-between border-b border-gray-400'>
              <p className='text-sm text-gray-500'>Fecha de Habilitación</p>
              <p className='text-gray-900 text-sm font-bold'>{usuario.ufechab}</p>
            </div>
            <div className='mb-2 pb-2 flex justify-between border-b border-gray-400'>
              <p className='text-sm text-gray-500'>Fecha de Oblea anterior</p>
              <p className='text-gray-900 text-sm font-bold'>{usuario.ufecrev}</p>
            </div>
            <div className='mb-2 pb-2 flex justify-between border-b border-gray-400'>
              <p className='text-sm text-gray-500'>Código Taller</p>
              <p className='text-gray-900 text-sm font-bold'>{usuario.codtal}</p>
            </div>
        </div>
      <div className='mt-5 ml-3 text-gray-800'>
        <h3 className='font-bold mb-3'>DATOS DEL PROPIETARIO</h3>
        <div className='mb-2 pb-2 flex justify-between border-b border-gray-400'>
            <p className='text-sm text-gray-500'>Propietario</p>
            <p className='text-gray-900 text-sm font-bold'>{usuario.uapeynom}</p>
        </div>
        <div className='mb-2 pb-2 flex justify-between border-b border-gray-400'>
            <p className='text-sm text-gray-500'>Telefono</p>
            <p className='text-gray-900 text-sm font-bold'>{usuario.utelefono}</p>
        </div>
        <AlertMessage/>
			</div>
    </div>
  )
}
