import React, { useEffect } from 'react'

import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'

import { BrowserRouter, Route } from 'react-router-dom'

import { auth } from '../../firebase/config'

import { useSelector, useDispatch } from 'react-redux'

import {
  selectThemeColor,
  selectThemeMode,
  setMode,
} from '../../redux/themeSlice'
import {
  selectUserEmail,
  selectUserDisplayname,
  selectUserAvatar,
  setActiveUser,
  setUserLogOutState,
} from '../../redux/userSlice'

import PrivateRoutes from '../PrivateRoutes'
import PublicRoutes from '../PublicRoutes'

const Layout = () => {
  const themeMode = useSelector(selectThemeMode)
  const themeColor = useSelector(selectThemeColor)

  const userDisplayname = useSelector(selectUserDisplayname)
  const userEmail = useSelector(selectUserEmail)
  const userAvatar = useSelector(selectUserAvatar)

  const dispatch = useDispatch()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log('signouttt')
        dispatch(setUserLogOutState())
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user: ', user)
        const { displayName, email, photoURL } = user
        dispatch(setActiveUser({ displayName, email, photoURL }))
        // history.push('/')
      } else {
        // No user is signed in...code to handle unauthenticated users.
      }
    })
    return () => unsubscribe() // unsubscribing from the listener when the component is unmounting.
  }, [dispatch])

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
      {userDisplayname && userEmail ? (
        <Route
          render={(props) => (
            <div className={`layout ${themeMode} ${themeColor}`}>
              <Sidebar {...props} />
              <div className="layout__content">
                <TopNav
                  user={{ userDisplayname, userEmail, userAvatar }}
                  handleSignOut={handleSignOut}
                />
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
