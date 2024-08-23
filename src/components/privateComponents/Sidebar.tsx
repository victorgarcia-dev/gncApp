import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton";

import { FaClipboardList } from "react-icons/fa6";
import { TbClockHour4 } from "react-icons/tb";
import { MdOutlineHourglassBottom } from "react-icons/md";

export const Sidebar = () => {
  return (
    <aside>
      <div className="grid justify-items-end mr-3 mb-8 mt-2">
          <LogoutButton/>
      </div>
      
      <nav className=" flex flex-col mx-8">
         <Link 
               className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center'
               to='/dashboard/form/createOrganization'
          >
            <FaClipboardList className="text-3xl mr-5"/>
            Ver Turnos
          </Link>
         
          <Link 
               className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center'
               to='/dashboard/form/createOrganization'
          >
            <TbClockHour4 className="text-3xl mr-5"/>
            Fijar horarios
          </Link>

          <Link 
               className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center'
               to='/dashboard/form/createOrganization'
          >
            <MdOutlineHourglassBottom className="text-3xl mr-5"/>
            tomar birra
          </Link>
    </nav>
    </aside>
  )
}
