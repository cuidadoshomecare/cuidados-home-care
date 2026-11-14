import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Sobre from './Sobre'
import Servicos from './Servicos'
import Contato from './Contato'
import Privacy from './Privacy'
import Obrigado from './Obrigado'
const path=window.location.pathname.replace(/\/$/,'')||'/'
const page=path==='/sobre'?<Sobre/>:path==='/servicos'?<Servicos/>:path==='/contato'?<Contato/>:path==='/privacidade'?<Privacy/>:path==='/obrigado'?<Obrigado/>:<App/>
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode>{page}</React.StrictMode>)
