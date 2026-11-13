import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Privacy from './Privacy'
const path = window.location.pathname.replace(/\/$/, '')
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode>{path === '/privacidade' ? <Privacy/> : <App/>}</React.StrictMode>)
