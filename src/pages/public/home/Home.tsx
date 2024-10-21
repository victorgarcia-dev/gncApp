import { CheckMyStatus } from "../informacionDelUsuario/CheckMyStatus"
import { CardService } from "./CardService"


export const Home = () => {
  return (
      <div className="">
          <CheckMyStatus/>
          <CardService/>
      </div>
  )
}
