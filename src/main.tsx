import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Router } from './router'

import { UserDateProvider } from './context/DateContext';
import { InfoOrganizationProvider } from './context/InfoOrganizationContext';





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InfoOrganizationProvider>
      <UserDateProvider>
        <Router/>
      </UserDateProvider>
    </InfoOrganizationProvider>
  </React.StrictMode>,
  
)
