import {z} from 'zod';

/**Patente**/
export const patenteSchema = z.object({
    patente: z.string()
});

export type Patente = z.infer<typeof patenteSchema>
export type PatenteFormData = Pick<Patente, 'patente'>

/** type data Json**/
export type UserData = {
	codtal: number
    email: string
    envioId: number
    id: number
    inyeccion: string
    peccod: string
    phpropia: number
    pmatreshab: number
    rmatreshab: string
    talcuit: string
    te_tipo: string
    tnrointopr: string
    uano: string
    uapeynom: string
    ubarrio: string
    ucalle: string
    ucaract: string
    ucodgest: number
    ucodpostal: string
    udescgest: string
    udominio: string
    ufechab: string
    ufecmont: string
    ufecrev: string
    ufecvenhab: string
    ulocalidad: string
    umarca: string
    umodelo: string
    unrodoc: string
    uobleaant: string
    uobleanew: string
    uobservac: string
    uprovincia: string
    usuario: number
    utelefono: string
    utipodoc: string
    utipuso: number
    xfecasig: string
    xfecmodrec: string
    xfectrf: string
    xtipoprrec: string
}

/***auth***/
const authSchema = z.object({
	email: z.string().email(),
	password: z.string()
});

type Auth = z.infer<typeof authSchema>;
export type UserLoginform = Pick<Auth, 'email' | 'password'>

