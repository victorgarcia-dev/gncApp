import { Outlet } from 'react-router-dom';
import { Sidebar } from '../pages/private/components/Sidebar';


export const AppLayoutPrivate = () => {
  return (
    <>
       <section>
        <div className='flex flex-row'>
            <div className='w-1/5 bg-gray-900 h-screen'>
              <Sidebar/>
            </div>
            <div className='bg-white w-4/5 h-screen'>
               <Outlet/>
            </div>
        </div>
       </section>
    </>
  )
}
