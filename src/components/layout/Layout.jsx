import React, { useEffect } from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'

import { BrowserRouter, Route } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import { setMode } from '../../redux/themeSlice'
import PrivateRoutes from '../PrivateRoutes'
import PublicRoutes from '../PublicRoutes'

const Layout = () => {
  const theme = useSelector((state) => state.theme)
  const auth = useSelector((state) => state.auth)
  const { isLogin } = auth

  const dispatch = useDispatch()

  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

    const setModeAction = setMode(themeClass)

    const setColorAction = setMode(colorClass)

    dispatch(setModeAction)

    dispatch(setColorAction)
  }, [dispatch])

  return (
    <BrowserRouter>
      {isLogin ? (
        <Route
          render={(props) => (
            <div className={`layout ${theme.mode} ${theme.color}`}>
              <Sidebar {...props} />
              <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">
                  <PrivateRoutes />
                </div>
              </div>
              )
            </div>
          )}
        />
      ) : (
        <PublicRoutes />
      )}
    </BrowserRouter>
  )
}

export default Layout
