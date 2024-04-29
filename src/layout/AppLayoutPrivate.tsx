import { Outlet } from 'react-router-dom';

export const AppLayoutPrivate = () => {
  return (
    <>
       <section className='max-w-screen-2xl mx-auto mt-10 p-5'>
            <Outlet/>
       </section>
    </>
  )
}
