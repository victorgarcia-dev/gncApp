import { Outlet } from 'react-router-dom';
import { Footer } from '../pages/public/home/Footer';
import { Header } from '../pages/public/home/Header';

export const AppLayout = () => {
  return (
    <>
        <div className='bg-gray-900 h-screen'>
          <div className='container mx-auto w-full'>
            <Header/>
              <Outlet/>
            <Footer/>
       </div>
    </div>
    </>
  )
}
