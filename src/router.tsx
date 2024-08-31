import { BrowserRouter, Routes, Route, Navigate, useNavigate  } from 'react-router-dom';

import { AppLayoutPrivate } from './layout/AppLayoutPrivate';
import { DashboardView } from './pages/private/components/DashboardView';
import { AppLayout } from './layout/AppLayout';

import { ShowUserData } from './pages/public/informacionDelUsuario/ShowUserData';

import { OrganizationView } from './views/organization/OrganizationView';
import { OrganizationsView } from './views/organization/OrganizationsView';

import { OrganizationShiftsView } from './views/organization/OrganizationShiftsView';
import { CreateServiceOrganization } from './views/form/CreateServiceOrganization';

import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import { CreateSchedules } from './views/form/CreateSchedule';

import { Home } from './pages/public/home/Home';
import { ListaOrganizaciones } from './pages/public/organizacion/ListaOrganizaciones';
import { Calendario } from './pages/public/turnero/Calendario';
import { CrearTurnoUsuario } from './pages/public/turnero/CrearTurnoUsuario';






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
              <Route path='/' element={<Home/>} index />
              <Route path='/user' element={<ShowUserData />} />
              <Route path='/user/listOrganizations' element={<ListaOrganizaciones/>} />
              <Route path='/user/listOrganizations/calendar/:id' element={<Calendario/>} />
              {<Route path='/user/filterTurner/calendar/createTurnerUser' element={<CrearTurnoUsuario/>} />}
              <Route path='*' element={<Navigate to="/" />} />
              
            </Route>
            <Route element={<AppLayoutPrivate />}>
              {/* Rutas Admin */}
              <Route path='/dashboard' element={<ProtectedRoute component={DashboardView} />} />
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