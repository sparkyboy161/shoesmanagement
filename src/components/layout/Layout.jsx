import React, { useEffect } from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../Routes'

import { BrowserRouter, Route } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import { setMode } from '../../redux/themeSlice'

const Layout = () => {
  const theme = useSelector((state) => state.theme)

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
      <Route
        render={(props) => (
          <div className={`layout ${theme.mode} ${theme.color}`}>
            <Sidebar {...props} />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  )
}

export default Layout
