import { useForm } from 'react-hook-form';
import { ErrorMessage } from "../../components/ErrorMessage";
import { Schedules } from "../../types";

export const CreateShedules = () => {

  const initialValues: Schedules = {
  "dia": "",
  "horaDesde": 0,
  "horaHasta": 0,
};
const { register, handleSubmit, formState:{errors}} = useForm({defaultValues:initialValues});

const handleCreateSchedules = (formData: Schedules) => { 
    console.log(formData); 
  }

  return (
    <>
      <h3 className="text-center mt-3 mb-3 text-lg text-purple-500 font-bold">Definir Horarios</h3>
      <form onSubmit={handleSubmit(handleCreateSchedules)}>
            <div className="mb-5 space-y-3">
                <label htmlFor="dia" className="text-sm uppercase font-bold">
                   Dia
                </label>
                <input
                    id="dia"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Nombre de la organización"
                    {...register("dia", {
                        required: "El nombre del dia es obligatorio",
                    })}
                />

                {errors.dia && (
                    <ErrorMessage>{errors.dia.message}</ErrorMessage>
                )}
            </div>
            <div className="mb-5 space-y-3">
                <label htmlFor="horaDesde" className="text-sm uppercase font-bold">
                  horaDesde
                </label>
                <input
                    id="horaDesde"
                    min={7}
                    max={24}
                    className="w-full p-3  border border-gray-200"
                    type="number"
                    placeholder="Nombre de la organización"
                    {...register("horaDesde", {
                        required: "El nombre del dia es obligatorio",
                    })}
                />

                {errors.horaDesde && (
                    <ErrorMessage>{errors.horaDesde.message}</ErrorMessage>
                )}
            </div>
            <div className="mb-5 space-y-3">
                <label htmlFor="horaHasta" className="text-sm uppercase font-bold">
                horaHasta
                </label>
                <input
                    id="horaHasta"
                    min={7}
                    max={24}
                    className="w-full p-3  border border-gray-200"
                    type="number"
                    placeholder="Nombre de la organización"
                    {...register("horaHasta", {
                        required: "El nombre del dia es obligatorio",
                    })}
                />

                {errors.horaHasta && (
                    <ErrorMessage>{errors.horaHasta.message}</ErrorMessage>
                )}
            </div>

            
            <input type="submit"
                value="Crear Organización"
                className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
            />
            
        </form>
    </>
  )
}
