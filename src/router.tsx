import { BrowserRouter, Routes, Route, Navigate, useNavigate  } from 'react-router-dom';

{/**auth */}
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';

{/**public */}
import { AppLayout } from './layout/AppLayout';
import { ShowUserData } from './pages/public/informacionDelUsuario/ShowUserData';
import { Home } from './pages/public/home/Home';
import { ListaOrganizaciones } from './pages/public/organizacion/ListaOrganizaciones';
import { Calendario } from './pages/public/turnero/Calendario';

{/** private*/}
import { DashboardView } from './pages/private/components/DashboardView';
import { AppLayoutPrivate } from './layout/AppLayoutPrivate';
import { CrearTurnoUsuario } from './pages/public/turnero/CrearTurnoUsuario';
import { PerfilOrganizacion } from './pages/private/organizacion/PerfilOrganizacion';
import { ServiciosOrganizacion } from './pages/private/organizacion/ServiciosOrganizacion';
import { HorariosOrganizacion } from './pages/private/organizacion/HorariosOrganizacion';
import { CrearServicioOrganizacion } from './pages/private/form/CrearServicioOrganizacion';







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
              {/* Rutas organización */}
              <Route path='/dashboard' element={<ProtectedRoute component={DashboardView} />} />
              <Route path='/dashboard/profile' element={<ProtectedRoute component={PerfilOrganizacion} />}/>
              <Route path='/dashboard/createSchedules' element={<ProtectedRoute component={HorariosOrganizacion} />} />
              <Route path='/dashboard/listServices' element={<ProtectedRoute component={ServiciosOrganizacion} />} />
              <Route path='/dashboard/createServiceOrganization' element={<ProtectedRoute component={CrearServicioOrganizacion} />} />                    
            </Route> 
          </Routes>
        </Auth0ProviderWithRedirectCallback>
      </BrowserRouter>
    );
  };