import axios from "axios";
import {useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link  } from "react-router-dom";
import { DateContext } from "../../../context/DateContext";

export const Calendario = () => {
    const {id} = useParams();

    //capturo fecha y hora 
    const {setUserDate, setUserHour} = useContext(DateContext);
    
    
    //dias y horaios de la empresa
    const [post, setPost] = useState([]);
    const [horaInicio, setHoraInicio] = useState(0);
    const [horaFinal, setHoraFinal] = useState(0);
    const [turnosOcupados, setTurnosOcupados] = useState([]);


    const [fecha, setFecha] = useState(new Date());
    
    const [minDate, setMinDate] = useState(new Date());


    
    const getFormattedDate = (date) => {
      if (!date) return '';
      
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexed
      const day = String(date.getDate()).padStart(2, '0');
  
      return `${year}-${month}-${day}`;
    };
    

    const baseURL = `https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/OrganizacionHorarios/organizacion/${id}`;
    const baseURL2 = `https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/turnos/organizacion/${id}/soloHorarios?fecha=${getFormattedDate(fecha)}`;
   
    


    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);

    useEffect(() => {
      axios.get(baseURL2).then((response) => {
        setTurnosOcupados(response.data);
      });
    }, [fecha])

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
      console.log(fecha);
      setUserDate(fecha);
     
       for (let index = 0; index < post.length; index++) {
          if(post[index].dia === numberToDay(fecha.getDay())){
             console.log(numberToDay(fecha.getDay()))
             setHoraInicio(timeStringToNumber(post[index].horaDesde));
             setHoraFinal(timeStringToNumber(post[index].horaHasta)+1); 
          } 
       }

       //si no existe un horario predeterminado de empresa pongo todos por deafult
       if( post[0].dia  !== numberToDay(fecha.getDay()) && post[1].dia  !== numberToDay(fecha.getDay())){
        setHoraInicio(0);
        setHoraFinal(0);
       }
  }

  //hora del turno seleccionado por el usuario
  const handleHour = (hour) => {
    setUserHour(hour)
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

    //comparar fechas
    const dateString = turnosOcupados[0];
    const dateObject = new Date(dateString); 

   
  return (
    <div className="flex flex-col justify-center bg-gray-100 py-4 container mx-auto w-full px-5 rounded">
       <h3 className="text-center font-extrabold my-3 md:text-xl">Seleccione dia y hora</h3>
       <div className="flex my-3 items-center md:justify-center">
          <p className="font-semibold mr-3 md:text-xl">Fecha</p>
          <DatePicker
          selected={fecha}
          onChange={(fecha) => onChange(fecha)}
          withPortal
          minDate={minDate}
          className="styled-input"
          />
       </div>

      <h3 className="font-semibold my-5 text-indigo-500 md:text-xl">Horarios disponibles</h3>
      <div className="h-screen overflow-y-auto border border-gray-300 rounded">
        <ul role="list" className="divide-y divide-gray-500 bg-white rounded-md space-y-2">
                {hours.map((hour,index) => { 
                return (
                    <Link to={'/user/filterTurner/calendar/createTurnerUser'}
                          key={index} className="flex justify-between gap-x-6 py-5 hover:bg-indigo-100"
                          onClick={() => handleHour(hour)}
                          
                    >
                      
                            <div className="mt-1 flex items-center gap-x-1.5 px-3">
                                { dateObject.getHours() === timeStringToNumber(hour) ? (
                                  <>
                                    <div className="flex-none rounded-full bg-red-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                    </div>
                                    <p className="text-xs md:text-lg leading-5 text-gray-500">{hour} hs - no disponible</p>
                                  </>
                                ) : (
                                  <>
                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    </div>
                                    <p className="text-xs md:text-lg leading-5  text-gray-500">{hour}: hs - disponible</p>
                                  </>
                                )
                                }
                            </div> 
                    </Link>
                )})}
          </ul>
      </div>
         
    </div>
  )
}
