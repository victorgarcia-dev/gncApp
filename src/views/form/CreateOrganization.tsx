import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Organization } from '../../types';

export const CreateOrganization = () => {

    const initialValues : Organization= {
        "nombre": "",
        "razonSocial": "",
        "cuit": "",
        "intervaloPorHorario": 0,
        "direccion": "",
        "telefono": "",
        "email": "",
    };
    const { register, handleSubmit, formState:{errors}} = useForm({defaultValues:initialValues});

    const handleCreateOrganzation = (formData: Organization) => { 
        console.log(formData); 
      }

  return (
    <>
       <h3 className='text-center mt-3 mb-3 text-lg text-purple-500 font-bold'>Crear Organización</h3>
       <form onSubmit={handleSubmit(handleCreateOrganzation)}>
            <div className="mb-5 space-y-3">
                <label htmlFor="nombre" className="text-sm uppercase font-bold">
                   nombre de la organización
                </label>
                <input
                    id="nombre"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Nombre de la organización"
                    {...register("nombre", {
                        required: "El nombre de la organización es obligatorio",
                    })}
                />

                {errors.nombre && (
                    <ErrorMessage>{errors.nombre.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="razonSocial" className="text-sm uppercase font-bold">
                     Razon Social
                </label>
                <input
                    id="razonSocial"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Nombre de la razon social"
                    {...register("razonSocial", {
                        required: "El Nombre del Cliente es obligatorio",
                    })}
                />

                {errors.razonSocial && (
                    <ErrorMessage>{errors.razonSocial.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="cuit" className="text-sm uppercase font-bold">
                   Cuit
                </label>
                <input
                    id="cuit"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="cuit de la organización"
                    {...register("cuit", {
                        required: "El cuit de la organizacion es obligatorio",
                    })}
                />

                {errors.cuit && (
                    <ErrorMessage>{errors.cuit.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="intervaloPorHorario" className="text-sm uppercase font-bold">
                Intervalo Por Horario
                </label>
                <input
                    id="intervaloPorHorario"
                    className="w-full p-3  border border-gray-200"
                    type="number"
                    placeholder="cuit de la organización"
                    {...register("intervaloPorHorario", {
                        required: "El intervalo Por Horario es obligatorio",
                    })}
                />

                {errors.intervaloPorHorario && (
                    <ErrorMessage>{errors.intervaloPorHorario.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="direccion" className="text-sm uppercase font-bold">
                    Dirección
                </label>
                <input
                    id="direccion"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Cuit de la organización"
                    {...register("direccion", {
                        required: "La dirección  de la organización es obligatorio",
                    })}
                />

                {errors.direccion && (
                    <ErrorMessage>{errors.direccion.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="telefono" className="text-sm uppercase font-bold">
                    Telefono
                </label>
                <input
                    id="telefono"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Telefono de la organización"
                    {...register("telefono", {
                        required: "El telefono de la organización es obligatorio",
                    })}
                />

                {errors.telefono && (
                    <ErrorMessage>{errors.telefono.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label
                    className="text-sm uppercase font-bold"
                >Email</label>

                <input
                    id="email"
                    type="email"
                    placeholder="Email de Registro"
                    className="w-full p-3  border border-gray-200"
                    {...register("email", {
                    required: "El Email es obligatorio",
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "E-mail no válido",
                    },
                    })}
                />
                {errors.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
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
