import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoProvider from './contexts/TodoContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  // <React.StrictMode>
  <TodoProvider>
    <App />
    </TodoProvider>
  // </React.StrictMode>,
)