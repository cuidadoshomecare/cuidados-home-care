import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Privacy from './Privacy'
import Obrigado from './Obrigado'
const path = window.location.pathname.replace(/\/$/, '')
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode>{path === '/privacidade' ? <Privacy/> : path === '/obrigado' ? <Obrigado/> : <App/>}</React.StrictMode>)
