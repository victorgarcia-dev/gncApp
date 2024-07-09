import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';

import { AppLayoutPrivate } from './layout/AppLayoutPrivate';
import { DashboardView } from './views/DashboardView';
import { CreateCarView } from './views/form/CreateCarView';
import { AppLayout } from './layout/AppLayout';
//import { ShowUserStatus } from './pages/ShowUserStatus';
import { LoginView } from './views/auth/LoginView';
import { Home } from './pages/Home';
import { ShowUserData } from './views/user/ShowUserData';



export const Router = () => {
    return(
        <BrowserRouter>
           <Routes>
                <Route element={ <AppLayout/>}>
                   <Route path='/'  element={ <Home/> } index/>
                   <Route path='/login'  element={ <LoginView/> }/>
                   <Route path='/user'  element={ <ShowUserData/> }/>
                   <Route path='*'  element={ <Navigate to="/"/> }/>
               </Route>
               <Route element= { <AppLayoutPrivate/> }>
                   <Route path='/dashboard' element={ <DashboardView/>}/>
                   <Route path='/form/createCar' element={ <CreateCarView/> }/> 
               </Route>
             
           </Routes>
        </BrowserRouter>
    );
}