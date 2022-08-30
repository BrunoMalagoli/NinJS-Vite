import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../../pages/auth/login/LoginPage'
import { RegisterPage } from '../../pages/auth/register/RegisterPage'
import Dashboard from '../../pages/dashdoard'
import { Hero } from '../../pages/home'

type PropsMiddlewaresAutentication = {
  children: JSX.Element
}

export const MainRoutes = () => {
  const UserLogged: FC<PropsMiddlewaresAutentication> = ({ children }) => {
    if (localStorage.getItem('token'))
      return <Navigate to="/dashboard" replace={true} />
    return children
  }
  const RequireAuth: FC<PropsMiddlewaresAutentication> = ({ children }) => {
    if (!localStorage.getItem('token'))
      return <Navigate to="/login" replace={true} />
    return children
  }

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route
        path="/login"
        element={
          <UserLogged>
            <LoginPage />
          </UserLogged>
        }
      />
      <Route
        path="/register"
        element={
          <UserLogged>
            <RegisterPage />
          </UserLogged>
        }
      />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
    </Routes>
  )
}
