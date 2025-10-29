import { Header } from './components/Header'
import { Home } from './pages/Home'
import { AppRoutes } from './pages/router'
import './style/globalStyle.css'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
