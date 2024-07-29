import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';

import { AppLayoutPrivate } from './layout/AppLayoutPrivate';
import { DashboardView } from './views/DashboardView';
import { AppLayout } from './layout/AppLayout';
//import { ShowUserStatus } from './pages/ShowUserStatus';
import { Home } from './pages/Home';
import { ShowUserData } from './views/user/ShowUserData';
import { CreateOrganization } from './views/form/CreateOrganization';
import { OrganizationView } from './views/organization/OrganizationView';
import { OrganizationsView } from './views/organization/OrganizationsView';
import { CreateShedules } from './views/form/CreateShedules';
import { OrganizationShiftsView } from './views/organization/OrganizationShiftsView';
import { CreateServiceOrganization } from './views/form/CreateServiceOrganization';





export const Router = () => {
    return(
        <BrowserRouter>
           <Routes>
                <Route element={ <AppLayout/>}>
                   <Route path='/'  element={ <Home/> } index/>
                   <Route path='/user'  element={ <ShowUserData/> }/>
                   <Route path='*'  element={ <Navigate to="/"/> }/>
               </Route>
               <Route element= { <AppLayoutPrivate/> }>
                    {/**rutas Admin */}
                   <Route path='/dashboard' element={ <DashboardView/>}/>
                   <Route path='/dashboard/form/createOrganization' element={ <CreateOrganization/> }/>
                   <Route path='/dashboard/organizationsView' element={ <OrganizationsView/> }/>
                   
                   {/**rutas organización */}
                   <Route path='/organization' element={ <OrganizationView/> }/>
                   <Route path='/organization/form/createOrganizationalSchedules' element={ <CreateShedules/>}/>
                   <Route path='/organization/form/createServiceOrganization' element={ <CreateServiceOrganization/>}/>
                   <Route path='/organization/organizationShifts' element={ <OrganizationShiftsView/>}/> 
               </Route>
             
           </Routes>
        </BrowserRouter>
    );
}