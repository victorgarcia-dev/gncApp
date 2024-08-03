import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './index.css'
import { Router } from './router'
import { UserProvider } from './context/UserContext';
import { Auth0Provider } from '@auth0/auth0-react';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Auth0Provider
     domain="dev-qnzki5w2de6vwflb.us.auth0.com"
     clientId="I7wikBiKuAFzWVt05odxBxvlZJlwRdjh"
     authorizationParams={{
       redirect_uri: 'http://localhost:5173'
     }}
  >
    <UserProvider>
      <QueryClientProvider client={queryClient}>
              <Router/>
        </QueryClientProvider>
    </UserProvider>
   </Auth0Provider>


  </React.StrictMode>,
)
