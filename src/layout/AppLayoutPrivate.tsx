import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../pages/private/components/Sidebar';
import { DashboardView } from '../pages/private/components/DashboardView';


export const AppLayoutPrivate = () => {

  const [existeUser, setExisteUser] = useState<boolean>(false);
  return (
    <>
      {
        existeUser ? (
          <section>
          <div className='flex flex-row'>
              <div className='w-1/6 bg-gray-900 h-screen'>
                <Sidebar/>
              </div>
              <div className='bg-white w-5/6 h-screen'>
                 <Outlet/>
              </div>
          </div>
         </section>
        ) : (
          <DashboardView 
            setExisteUser={setExisteUser}
          />
        )
      }
    </>
  )
}
