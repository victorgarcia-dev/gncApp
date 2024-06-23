import { ReactNode } from 'react';
import {z} from 'zod';

/**Patente**/
export const patenteSchema = z.object({
    patente: z.string()
});

export type Patente = z.infer<typeof patenteSchema>
export type PatenteFormData = Pick<Patente, 'patente'>

/** type data Json**/
export type User = {
        Fecha_de_habilitación?: string,
		Oblea_anterior?: string,
		Fecha_de_vencimiento?: string,
		Fecha_Oblea_anterior?:string,
		Codigo_PEC?: string,
		Codigo_de_taller?: string,
		Vehículo_Marca?: string,
		Modelo?: string,
		Año?: string,
		Tipo_de_Operación?: string,
		Dominio?: string,
		Inyección?: string,
		Tipo_de_Vehículo?: string,
		Propietario_Nombre_y_Apellido?: string,
		Dirección?: string,
		Codigo_Postal?: string,
		Localidad?: string,
		Teléfono?: string,
		Tipo_y_Nro_Documento?: string,
		Codigo_Actual?: string,
		Codigo_Montaje?: string,
		Codigo_Desmontaje?: string,
		Codigo_Baja?: string,
		Nro_Serie_Actual?: string,
		Nro_Serie_Montaje?: string,
		Nro_Serie_Desmontaje?: string,
		Nro_Serie_Baja?: string,
		Codigo?: string,
		Nro_Serie?: string,
		Nuevo?: string,
		Usado?: string,
		Fabricado_Mes?: string,
		Fabricado_Año?: string,
		Revisado_Mes?: string,
		Revisado_Ano?: string,
		CRPC?: string,
		OP?: string,
		Codigo_Valvula?: string,
		Nro_Serie_Valvula?: string,
		OP_V?: string ,
		oblea: boolean,
		ph: boolean 
}

/**context */
export type Children = {
	children: ReactNode
}

/***auth***/
const authSchema = z.object({
	email: z.string().email(),
	password: z.string()
});

type Auth = z.infer<typeof authSchema>;
export type UserLoginform = Pick<Auth, 'email' | 'password'>

