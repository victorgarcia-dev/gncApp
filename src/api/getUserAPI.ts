import axios from "axios";
import { PatenteFormData } from "../types";


export async function getUser( patente:PatenteFormData ) {
    try {
        const {data} = await axios.get(`https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/minimalApiUsr/${patente}`); //devuelve un usuario de la bd
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}