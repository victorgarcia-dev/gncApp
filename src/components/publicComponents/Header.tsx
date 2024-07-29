import { FaUserCircle } from "react-icons/fa";
import { LoginView } from "../../views/auth/LoginView";
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const navigate = useNavigate();
    return (
      <>
        <div className="mx-4 py-5 flex justify-between items-center">
          <h1 className="text-lg text-indigo-500 font-bold">SOLUCIONES GNC <br/><span className="text-sm text-white font-medium">OBLEA - P.H - CONVERSIONES</span></h1>
          <button className="text-4xl text-indigo-500"
                  onClick={ () => navigate('?login=true')}
           >
              <FaUserCircle />
          </button>
          <LoginView/>
        </div>
      </>
    )
  }
  