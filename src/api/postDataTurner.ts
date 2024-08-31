import axios from 'axios';

export const postDataTurner = async(formData:any) => {
    console.log(formData)
    try {
        const response = await axios.post('https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/turnos', formData);
        console.log('Response:', response.data);
        // Aquí puedes manejar la respuesta, mostrar un mensaje, etc.
      } catch (error) {
        console.error('There was an error!', error);
      }
    }
