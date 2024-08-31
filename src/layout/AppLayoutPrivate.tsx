import { Outlet } from 'react-router-dom';
import { Sidebar } from '../pages/private/components/Sidebar';


export const AppLayoutPrivate = () => {
  return (
    <>
       <section>
        <div className='grid grid-cols-5'>
            <div className='col-span-1 h-screen bg-gray-900'>
              <Sidebar/>
            </div>
            <Outlet/>
        </div>
       </section>
    </>
  )
}
