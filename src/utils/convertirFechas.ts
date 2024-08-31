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