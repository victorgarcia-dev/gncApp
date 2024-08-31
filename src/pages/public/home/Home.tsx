import { CheckMyStatus } from "../informacionDelUsuario/CheckMyStatus"
import { Services } from "./Services"

export const Home = () => {
  return (
    <>
       <CheckMyStatus/>
       <Services/>
    </>
  )
}
