
import { CheckMyStatus } from "../components/publicComponents/CheckMyStatus";
import { Footer } from "../components/publicComponents/Footer";
import { Header } from "../components/publicComponents/Header";
import { Services } from "../components/publicComponents/Services";

export const Home = () => {

  return (
    <>
       <Header/>
       <CheckMyStatus/>
       <Services/>
       <Footer/>
    </>
  )
}
