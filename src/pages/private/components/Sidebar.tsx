import { Link } from "react-router-dom";

import { GrServices } from "react-icons/gr";
import { FaClipboardList } from "react-icons/fa6";
import { MdOutlineHourglassBottom } from "react-icons/md";
import LogoutButton from "../../auth/LogoutButton";
import { RiAdminLine } from "react-icons/ri";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, PencilIcon } from '@heroicons/react/16/solid'
import { MdPageview } from "react-icons/md";

export const Sidebar = () => {
  return (
    <aside>
      <div className="grid justify-items-end mr-3 mb-8 mt-2">
          <LogoutButton/>
      </div>
      
      <nav className="flex flex-col mx-8">
         <h2 className="px-3 py-2 text-md text-gray-600 font-bold">Taller</h2>
         <Link 
               className='rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center'
               to='/dashboard/profile'
          >
            <RiAdminLine className="text-3xl mr-5"/>
            Perfil
          </Link>
          <Link 
               className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center'
               to='/dashboard/createSchedules'
          >
            <MdOutlineHourglassBottom className="text-3xl mr-5"/>
            Dias y Horarios
          </Link>

          <Menu>
            <MenuButton className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            <GrServices className="text-3xl mr-5"/>
                Servicios
                <ChevronDownIcon className="size-6 fill-white/60 ml-2"/>
            </MenuButton>

            <MenuItems
                transition
                anchor="bottom end"
                className=" rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
                <MenuItem>
                <Link 
                 to={'/dashboard/listServices'}
                 className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                    <MdPageview className="size-4 fill-white/30" />
                    Ver Lista
                </Link>
                </MenuItem>
                <MenuItem>
                <Link 
                 to={'/dashboard/createServiceOrganization'}
                 className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                    <PencilIcon className="size-4 fill-white/30" />
                    Crear
                </Link>
                </MenuItem>
            </MenuItems>
          </Menu>

          <h2 className="mt-5 px-3 py-2 text-md text-gray-600 font-bold">Administración</h2>
          <Link 
               className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center'
               to='/dashboard/calendar'
          >
            <FaClipboardList className="text-3xl mr-5"/>
             Agendar Turno
          </Link>
      </nav>
    </aside>
  )
}
