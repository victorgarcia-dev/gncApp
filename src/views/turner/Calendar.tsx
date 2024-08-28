import axios from "axios";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const Calendar = () => {
    const {id} = useParams();
    const baseURL = `https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/OrganizacionHorarios/organizacion/${id}`;

   
    //dias y horaios de la empresa
    const [post, setPost] = useState([]);
    const [horaInicio, setHoraInicio] = useState(7);
    const [horaFinal, setHoraFinal] = useState(21)


    const [fecha, setFecha] = useState(new Date());
    const [minDate, setMinDate] = useState(new Date());


    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);

     console.log(post);

    if (!post) return null;

    //convertir 09:0:00 a 9 
    const timeStringToNumber = (timeString) => {
      // Divide la cadena en horas, minutos y segundos
      const [hours, minutes, seconds] = timeString.split(':').map(Number);
      return hours;
    };

     //convertir un numero a nombre de dia
     const numberToDay = (number) => {
      const daysOfWeek = [
        'Domingo', // 0
        'Lunes',   // 1
        'Martes',  // 2
        'Miércoles', // 3
        'Jueves',  // 4
        'Viernes', // 5
        'Sábado',  // 6
      ];  
      return daysOfWeek[number % 7];
    };



    //nueva fecha
    const onChange = (fecha) => {
      setFecha(fecha);
    //  console.log(fecha.getDay());
      const dayName = numberToDay(1);
      console.log(dayName) 
      
       for (let index = 0; index < post.length; index++) {
          if(post[index].dia === numberToDay(fecha.getDay())){
             console.log(numberToDay(fecha.getDay()))
             setHoraInicio(timeStringToNumber(post[index].horaDesde));
             setHoraFinal(timeStringToNumber(post[index].horaHasta)+1);
             console.log(timeStringToNumber(post[index].horaDesde))
             console.log(timeStringToNumber(post[index].horaHasta)) 
          } 
       }

       //si no existe un horario predeterminado de empresa pongo todos por deafult
       if( post[0].dia  !== numberToDay(fecha.getDay()) && post[1].dia  !== numberToDay(fecha.getDay())){
        setHoraInicio(7);
        setHoraFinal(21);
       }
  }

   



    //crear array de horas
    const generateHoursWithIntervals = (interval) => {
      const hours = [];
      for (let i = horaInicio; i < horaFinal; i++) { // Recorrer las 24 horas del día
        for (let j = 0; j < 60; j += interval) { // Intervalos en minutos
          // Formatear la hora y los minutos en formato HH:MM
          const hour = `${i.toString().padStart(2, '0')}:${j.toString().padStart(2, '0')}`;
          hours.push(hour);
        }
      }
      return hours;
    };
  
    // Obtener la lista de horarios
    const hours = generateHoursWithIntervals(30);

   


  return (
    <div className="w-11/12 flex flex-col justify-center bg-gray-100 py-4">
       <h3 className="text-center font-extrabold my-3">Seleccione dia y hora</h3>
       <DatePicker
        selected={fecha}
        onChange={(fecha) => onChange(fecha)}
        withPortal
        minDate={minDate}
        inline

        />
        <h3>hoarios disponibles</h3>
        <ul role="list" className="divide-y divide-gray-500 bg-white">
            {hours.map((hour,index) => (
            <li key={index} className="flex justify-between gap-x-6 py-5">
               
                    <div className="mt-1 flex items-center gap-x-1.5">
                        <p></p>
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs leading-5 text-gray-500">{hour}: hs - disponible</p>
                    </div> 
            </li>
            ))}
        </ul>
       
    </div>
  )
}
