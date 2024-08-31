import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Router } from './router'

import { UserDateProvider } from './context/DateContext';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserDateProvider>
       <Router/>
    </UserDateProvider>
  </React.StrictMode>,
)
