import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';

import { AppLayoutPrivate } from './layout/AppLayoutPrivate';
import { DashboardView } from './views/DashboardView';
import { CreateCarView } from './views/form/CreateCarView';
import { AppLayout } from './layout/AppLayout';
import { Home } from './pages/Home';
import { ShowUserStatus } from './pages/ShowUserStatus';
import { LoginView } from './views/auth/LoginView';



export const Router = () => {
    return(
        <BrowserRouter>
           <Routes>
               <Route element= { <AppLayoutPrivate/> }>
                   <Route path='/' element={ <DashboardView/> } index/>
                   <Route path='/form/createCar' element={ <CreateCarView/> }/> 
               </Route>
               <Route element={ <AppLayout/>}>
                   <Route path='/home' element={ <Home/>}/>
                   <Route path='/home/user' element={ <ShowUserStatus/>}/>
                   <Route path='/home/login'  element={ <LoginView/> }/>
                   <Route path='*'  element={ <Navigate to="/home"/> }/>
               </Route>
           </Routes>
        </BrowserRouter>
    );
}