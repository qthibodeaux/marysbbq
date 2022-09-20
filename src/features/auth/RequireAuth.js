import { Navigate, Outlet } from 'react-router-dom'
import { selectCurrentToken } from '../../app/slice/authSlice'
import { useSelector } from 'react-redux'

function RequireAuth () {
    const token = useSelector(selectCurrentToken)

    return (
        token
            ? <Outlet />
            : <Navigate to='../login' />
    )
}

export default RequireAuth