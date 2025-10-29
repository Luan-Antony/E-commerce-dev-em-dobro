import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { MainPage } from './MainPage'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} >
                <Route path='/' element={<Home />} />
                <Route path='/Login' element={<Login />} />
            </Route>
        </Routes>
    )
}