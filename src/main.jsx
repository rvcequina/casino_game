import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@/scss/index.scss'
import DataProvider from './provider/index.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
     <App />
    </DataProvider>
  
  </React.StrictMode>,
)
