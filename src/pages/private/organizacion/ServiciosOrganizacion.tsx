const people = [
    {
      id: 0,
      nameService: 'Renovar Oblea',
      costo: 0,
      serviciosId: 0,
      organizacionId: 1
    },
    {
        id: 1,
        nameService: 'Renovar Oblea',
        costo: 0,
        serviciosId: 0,
        organizacionId: 1
      }
]


export const ServiciosOrganizacion = () => {
  return (
   <div className="mx-3">
     <h2 className="text-center text-xl font-bold mt-4 mb-6 text-indigo-600">Lista de Servicios</h2>
      <ul role="list" className="divide-y divide-gray-300">
      {people.map((person) => (
        <li key={person.id} className="flex justify-between gap-x-6 py-5">
        
            <div className="min-w-0 flex-auto">
              <p className="text-lg font-semibold leading-6 text-gray-900">{person.nameService}</p>
              <p className="mt-1 font-bold truncate text-sm leading-5 text-gray-500">Costo: {person.costo}</p>
            </div>
            <div className="flex gap-4">
                <button
                className=" h-10 w-1/2 justify-center rounded-md bg-green-600 px-3  text-sm font-semibold text-white shadow-sm hover:bg-green-500"
                >
                    Actualizar
                </button>
                <button
                className="h-10 w-1/2 justify-center rounded-md bg-red-600 px-3  text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                >
                    Eliminar
                </button>
          </div>
        </li>
        ))}
      </ul>
   </div>
  )
}
