import { CheckMyStatus } from "../informacionDelUsuario/CheckMyStatus"
import { CardService } from "./CardService"

export const Home = () => {
  return (
    <>
       <CheckMyStatus/>
       <CardService/>
    </>
  )
}
