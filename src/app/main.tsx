import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '../components/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Header />
    <App />
  </BrowserRouter>,
)
