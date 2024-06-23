import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <>
        <div className='bg-gray-800'>
          <div className='container mx-auto w-full'>
           <Outlet/>
       </div>
    </div>
    </>
  )
}
