import { Outlet } from 'react-router-dom';

export const AppLayoutPublic = () => {
    return (
      <>
          <div className=' h-screen'>
            
            <div className='container mx-auto w-full'>
            <div className="" 
            style={{
                WebkitBoxShadow: '2px 3px 70px -21px rgba(0,0,0,0.75)',
                MozBoxShadow: '2px 3px 70px -21px rgba(0,0,0,0.75)',
                boxShadow: '2px 3px 70px -21px rgba(0,0,0,0.75)',
                display: 'flex', alignItems: 'center',
                height: '4rem'
                }}> 
               <h1 className="text-lg text-indigo-500 font-bold ml-2">SOLUCIONES GNC </h1>
            </div>
            <div style={{ minHeight: 'calc(100vh - 7.95rem)' }}>
                <Outlet/>
            </div> 
            <div className="text-indigo-500 text-bold mx-4 mb-3 text-sm" style={{
                display: 'flex', alignItems: 'center',
                height: '4rem' 
            }}>
                <p>Copyright © 2024-2025 GNC Solutions</p>
            </div>
         </div>
      </div>
      </>
    )
  }
  