import { BrowserRouter, Routes, Route, Navigate, useNavigate  } from 'react-router-dom';

import { AppLayoutPrivate } from './layout/AppLayoutPrivate';
import { DashboardView } from './views/DashboardView';
import { AppLayout } from './layout/AppLayout';

import { Home } from './pages/Home';
import { ShowUserData } from './views/user/ShowUserData';
import { CreateOrganization } from './views/form/CreateOrganization';
import { OrganizationView } from './views/organization/OrganizationView';
import { OrganizationsView } from './views/organization/OrganizationsView';

import { OrganizationShiftsView } from './views/organization/OrganizationShiftsView';
import { CreateServiceOrganization } from './views/form/CreateServiceOrganization';

import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
//import { ScheduleShift } from './views/form/ScheduleShift';
import { CreateSchedules } from './views/form/CreateSchedule';
import { FilterOrganizations } from './views/form/FilterOrganizations';
import { CalendarView } from './views/turner/CalendarView';




const ProtectedRoute = ({ component: Component, ...args }) => {
    const ProtectedComponent = withAuthenticationRequired(Component, args);
    return <ProtectedComponent />;
  };
  
  
  const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
    const navigate = useNavigate();
    const onRedirectCallback = (appState) => {
      navigate((appState && appState.returnTo) || window.location.pathname);
    };
    return (
      <Auth0Provider
        domain={props.domain}
        clientId={props.clientId}
        authorizationParams={props.authorizationParams}
        onRedirectCallback={onRedirectCallback}
      >
        {children}
      </Auth0Provider>
    );
  };
  
  export const Router = () => {
    return (
      <BrowserRouter>
        <Auth0ProviderWithRedirectCallback
          domain="dev-fg2zl80067hbflem.us.auth0.com"
          clientId="ulIvKnNK0Vn2RO146BDIgtpKHVddQp91"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <Routes>
            <Route element={<AppLayout />}>
              <Route path='/' element={<Home />} index />
              <Route path='/user' element={<ShowUserData />} />
              <Route path='/user/filterTurner' element={<FilterOrganizations/>} />
              <Route path='/user/filterTurner/calendar' element={<CalendarView/>} />
              {/*<Route path='/user/createTurner' element={<ScheduleShift/>} />*/}
              <Route path='*' element={<Navigate to="/" />} />
              
            </Route>
            <Route element={<AppLayoutPrivate />}>
              {/* Rutas Admin */}
              <Route path='/dashboard' element={<ProtectedRoute component={DashboardView} />} />
              <Route path='/dashboard/form/createOrganization' element={<CreateOrganization />} />
              <Route path='/dashboard/organizationsView' element={<OrganizationsView />} />
              {/* Rutas organización */}
              <Route path='/workshop/form/createOrganizationalSchedules' element={<CreateSchedules/>} />
              <Route path='/organization/form/createServiceOrganization' element={<CreateServiceOrganization />} />
              <Route path='/organization/organizationShifts' element={<OrganizationShiftsView />} />
              <Route path='/profile/organization' element={<ProtectedRoute component={OrganizationView} />} />
            </Route> 
          </Routes>
        </Auth0ProviderWithRedirectCallback>
      </BrowserRouter>
    );
  };