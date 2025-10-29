import { Header } from './components/header'
import { Home } from './pages/Home'
import './style/globalStyle.css'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Home />
    </BrowserRouter>
  )
}

export default App
