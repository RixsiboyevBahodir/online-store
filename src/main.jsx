import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style/style.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </>
)
