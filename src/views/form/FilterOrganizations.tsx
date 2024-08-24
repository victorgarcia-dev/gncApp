import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const talleres = ['taller victor', 'taller pablo', 'taller leo'];

enum ProvinceEnum {
  cordoba = "cordoba",
  corrientes = "corrientes",
  mendoza = "mendoza",
}
enum ServiceEnum {
    oblea = "oblea",
    ph = "ph", 
  }

enum NameEnum {
    taller1 = "taller pablo",
    taller2 = "taller victor", 
    taller3 = "taller leo",
  }


interface IFormInput {
  firstName: string
  province?: ProvinceEnum
  service?: ServiceEnum
  taller?: NameEnum
}



export const FilterOrganizations = () => {

    const { register, handleSubmit } = useForm<IFormInput>()
    const navigate = useNavigate();

    // por provincia
    const [provinceValue, setProvinceValue] = useState({});
    const onSubmit: SubmitHandler<IFormInput> = (data) => setProvinceValue(data);
    console.log(provinceValue);

    const handleCalendar = () => {
        navigate('/user/filterTurner/calendar')
    }

 

  return (
   <div>
    <h1>Listados de organizaciones</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-5">
        <label>Buscar por Provincia</label>
        <select {...register("province")}>
            <option value="cordoba">cordoba</option>
            <option value="corrientes">corrientes</option>
            <option value="mendoza">mendoza</option>
        </select>
      </div>
      <div className="mt-5">
        <label>Buscar por Servicio</label>
        <select {...register("service")}>
            <option value="oblea">oblea</option>
            <option value="ph">ph</option>
        </select>
      </div>
      <div className="mt-5 mb-3">
        <label>Buscar por Nombre</label>
        <select {...register("taller")}>
            <option value="taller pablo">taller pablo</option>
            <option value="taller victor">taller victor</option>
            <option value="taller leo">taller leo</option>
        </select>
      </div>
      <input type="submit" className="mb-3"/>
    </form>


     <h2>talleres encontrados</h2>
     {
       talleres.map(taller => {
        return <div className="flex flex-col" key={taller}>
             <button onClick={handleCalendar}>{taller}</button>
        </div>
       })
     }
   </div>
  )
}
