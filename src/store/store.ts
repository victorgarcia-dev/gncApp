import { create } from "zustand";
import {devtools} from "zustand/middleware";
import { User } from "../types";



type UserPatent = {
    user: User[]
    addUser:(data:User) => void
}


export const useUserPatent = create<UserPatent>()(devtools((set,get) => ({
    user:[],
    addUser: (data) => {
        console.log(data);
    }
     
})))