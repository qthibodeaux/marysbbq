import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login/Login'
import Register from './features/auth/Register/Register'
import RequireAuth from './features/auth/RequireAuth'
import Welcome from './components/Public'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='login' element={<Login />}/>
        <Route path='register' element={<Register />}/>

        <Route element={<RequireAuth />}>
          <Route path='welcome' element={<Welcome />}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
