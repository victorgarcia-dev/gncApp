import { Outlet } from 'react-router-dom';
import { Header } from '../components/publicComponents/Header';
import { Footer } from '../components/publicComponents/Footer';

export const AppLayout = () => {
  return (
    <>
        <div className='bg-gray-900'>
          <div className='container mx-auto w-full'>
            <Header/>
              <Outlet/>
            <Footer/>
       </div>
    </div>
    </>
  )
}
