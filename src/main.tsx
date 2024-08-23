import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './index.css'
import { Router } from './router'
import { UserProvider } from './context/UserContext';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <QueryClientProvider client={queryClient}>
              <Router/>
        </QueryClientProvider>
    </UserProvider>
  </React.StrictMode>,
)
