import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <>
        <div className='bg-gradient-to-br from-black via-black to-yellow-600 overflow-hidden '>
          <div className='container mx-auto w-full'>
           <Outlet/>
       </div>
    </div>
    </>
  )
}
