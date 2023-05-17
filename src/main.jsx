import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Reset from './styleReset.jsx'

import './css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
)
