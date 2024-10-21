import { Sidebar } from "./Sidebar"
import { Outlet } from "react-router-dom"
export const DashboardView = () => {

  return (
    <>
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
   
    </>
  )
}
