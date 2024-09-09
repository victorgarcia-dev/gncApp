import { ErrorMessage } from '../../../components/ErrorMessage';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';

type FormValues = {
  schedules: {
    id: number;
    dia: string;
    horaDesde: string;
    horaHasta: string
    organizacionId: number
  }[];
};

export const CrearHorariosOrganizacion = () => {

  const { register, control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      schedules: [
        { id:0, dia: 'Lunes', horaDesde: '', horaHasta: "", organizacionId: 1 },
        { id:1, dia: 'Martes', horaDesde: '', horaHasta: "", organizacionId: 1 },
        { id:2, dia: 'Miércoles', horaDesde: '', horaHasta: "", organizacionId: 1 },
        { id:3, dia: 'Jueves', horaDesde: '', horaHasta: "", organizacionId: 1 },
        { id:4, dia: 'Viernes', horaDesde: '', horaHasta: "", organizacionId: 1 },
        { id:5, dia: 'Sábado', horaDesde: '', horaHasta: "", organizacionId: 1 },
      ],
    },
  });

  const { fields } = useFieldArray({
    control,
    name: 'schedules',
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };
  return (
    <div className="isolate bg-white px-6 py-4 sm:py-3 lg:px-8 rounded">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Crear Horarios de Atención</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          por favor, complete los siguientes campos
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-10 max-w-xl sm:mt-20">
        {fields.map((field, index) => (
          <div key={field.id} className="sm:col-span-2 mt-5">
            <label className="block text-lg font-semibold leading-6 text-gray-900 mb-1">
              {field.dia}:
            </label>
              <h4 className='text-sm text-gray-500'>Hora Inicio</h4>
              <div className='mt-1'>
                <input
                    type="time"
                    {...register(`schedules.${index}.horaDesde`, { required: 'Seleccionar un horario es obligatorio' })}
                    className="block w-1/2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.schedules?.[index]?.horaDesde && (
                      <ErrorMessage>{errors.schedules?.[index]?.horaDesde.message}</ErrorMessage>
                  )}
              </div>
           
              <h4 className='text-sm text-gray-500'>Hora Hasta</h4>
              <div className='mt-1'>
                <input
                    type="time"
                    {...register(`schedules.${index}.horaHasta`, { required: 'Seleccionar un horario es obligatorio' })}
                    className="block w-1/2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.schedules?.[index]?.horaHasta && (
                      <ErrorMessage>{errors.schedules?.[index]?.horaHasta.message}</ErrorMessage>
                  )}
                </div>
          </div>
        ))}

       <div className='w-1/2 flex justify-center'>
        <button type="submit" className="mt-4 w-1/3 bg-blue-500 text-white p-2 rounded">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
