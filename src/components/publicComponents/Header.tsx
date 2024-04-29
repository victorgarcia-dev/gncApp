import { Link } from 'react-router-dom';

export const Header = () => {
    return (
      <>
        <div className="py-5">
          <h1 className="text-2xl text-yellow-500 font-bold">RENOVAR GNC <br/><span className="text-base text-white font-medium">OBLEA - P.H - CONVERSIONES</span></h1>
        </div>
       {/*<div>
         <p className='text-white'>sos PEC o TALLER?</p> 
         <Link
              className="bg-yellow-500 hover:bg-yellow-600 w-2/12 h-8 rounded-md text-white font-bold"
              to={'/home/login'}
         >iNGRESAR</Link>
         </div>*/}
      
      </>
    )
  }
  