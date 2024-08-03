import React from 'react';

import { BrowserRouter, Routes, Route, Navigate, useNavigate  } from 'react-router-dom';

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
import Profile from './components/Profile';
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';




const ProtectedRoute = ({ component: Component, ...args }: any) => {
    const ProtectedComponent = withAuthenticationRequired(Component, args);
    return <ProtectedComponent />;
  };
  
  
  const Auth0ProviderWithRedirectCallback = ({ children, ...props }: any) => {
    const navigate = useNavigate();
    const onRedirectCallback = (appState: any) => {
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
          domain="dev-qnzki5w2de6vwflb.us.auth0.com"
          clientId="I7wikBiKuAFzWVt05odxBxvlZJlwRdjh"
          authorizationParams={{
            redirect_uri: 'http://localhost:5173',
          }}
        >
          <Routes>
            <Route element={<AppLayout />}>
              <Route path='/' element={<Home />} index />
              <Route path='/user' element={<ShowUserData />} />
              <Route path='*' element={<Navigate to="/" />} />
            </Route>
            <Route element={<AppLayoutPrivate />}>
              {/* Rutas Admin */}
              <Route path='/dashboard' element={<DashboardView />} />
              <Route path='/dashboard/form/createOrganization' element={<CreateOrganization />} />
              <Route path='/dashboard/organizationsView' element={<OrganizationsView />} />
              {/* Rutas organización */}
              <Route path='/organization/form/createOrganizationalSchedules' element={<CreateShedules />} />
              <Route path='/organization/form/createServiceOrganization' element={<CreateServiceOrganization />} />
              <Route path='/organization/organizationShifts' element={<OrganizationShiftsView />} />
              <Route path='/profile/organization' element={<ProtectedRoute component={OrganizationView} />} />
            </Route>
            <Route path='/profile' element={<ProtectedRoute component={Profile} />} />
          </Routes>
        </Auth0ProviderWithRedirectCallback>
      </BrowserRouter>
    );
  };