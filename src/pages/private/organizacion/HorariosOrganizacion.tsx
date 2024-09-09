const schedules = [
  {
    id: 1,
    dia: 'lunes',
    horaDesde: "09:00:00",
    horaHasta: "11:00:00",
    organizacionId: 1
  },
  {
      id: 2,
      dia: 'martes',
      horaDesde: "10:00:00",
      horaHasta: "12:00:00",
      organizacionId: 1
      
    }
]

export const HorariosOrganizacion= () => {

  // Función que transforma "09:00:00" a "09:00"
  const formatTime = (time: string) => {
    // Dividir la cadena en partes usando ":"
    const [hours, minutes] = time.split(':');
    // Retornar solo las horas y minutos
    return `${hours}:${minutes}`;
  };


  return (
    <div className="mx-3">
     <h2 className="text-center text-xl font-bold mt-4 mb-6 text-indigo-600">Lista de Servicios</h2>
      <ul role="list" className="divide-y divide-gray-300">
      {schedules.map((schedule) => (
        <li key={schedule.id} className="flex justify-between gap-x-6 py-5">
        
            <div className="min-w-0 flex-auto">
              <p className="text-lg font-semibold leading-6 text-gray-900">Dia: {schedule.dia}</p>
              <p className="mt-1 font-bold truncate text-sm leading-5 text-gray-500">Horario de inicio: {formatTime(schedule.horaDesde)} hs</p>
              <p className="mt-1 font-bold truncate text-sm leading-5 text-gray-500">Horario de cierre: {formatTime(schedule.horaHasta)} hs</p>
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
  );
};
