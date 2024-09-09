//convertir a formato YYYY-MM-DDTHH:mm:ss
export const convertDate = (dateUser) => {

    const date = new Date(dateUser)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses empiezan en 0
    const day = String(date.getDate()).padStart(2, '0');
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}


//modificar horas, minutos y segundos de una fecha
export const modifyDate = (hourUser,userDate) => {

    //convertir en array
    const str = hourUser;
    const strAsString = String(str);
    const arr = strAsString.split(':');


    const date = new Date(userDate);

    const newHours = Number(arr[0]);
    const newMinutes =Number( arr[1]);
    const  newSeconds =0;

    date.setHours(newHours)
    date.setMinutes(newMinutes);
    date.setSeconds(newSeconds) 
   
    return date
}


 //convertir un dia en numero
export const numberToDay = (number) => {
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

//convertir 09:00:00 a 9 
export const timeStringToNumber = (timeString) => {
    // Divide la cadena en horas, minutos y segundos
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours;
};   


//crear array de horas con intervalo
export const generateHoursWithIntervals = (interval, horaInicio, horaFinal) => {
    const hours = [];
    for (let i = horaInicio; i < horaFinal; i++) { // Recorrer las 24 horas del día
      for (let j = 0; j < 60; j += interval) { // Intervalos en minutos
        // Formatear la hora y los minutos en formato HH:MM
        const hour = `${i.toString().padStart(2, '0')}:${j.toString().padStart(2, '0')}`;
        hours.push(hour);
      }
    }
    //elimino el ultmo elemento
    hours.pop();

    return hours;
 };


//convierte a formato "HH:MM"
export const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };


export const finalFormattedDate = (isoDate) => {
  const date = new Date(isoDate);

  // Opciones para formatear la fecha
  const options = { month: 'long', day: 'numeric' };

  // Obtener el nombre del mes y el día
  const formattedDate = date.toLocaleDateString('es-ES', options);

  // Obtener la hora
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  // Formatear la fecha y la hora en el formato deseado
   return `${formattedDate} ${hours}:${minutes}hs`;
}
  