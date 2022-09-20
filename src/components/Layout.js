import { Outlet } from 'react-router-dom'
import Nav from './items/Nav'
import Footer from './items/Footer'
import ProtectedNav from './items/ProtectedNav'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../app/slice/authSlice'

function Layout() {
  const token = useSelector(selectCurrentToken)
  return (
    <div>
      {token ? <ProtectedNav /> : <Nav />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout