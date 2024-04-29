import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Router } from './router'
import { UserDataProvider } from './context/UserDataContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserDataProvider>
        <Router/>
    </UserDataProvider>
  </React.StrictMode>,
)
