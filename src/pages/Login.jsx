import React, { useState } from 'react'

import backgroundImage from '../assets/images/background-image.jpeg'
import logo from '../assets/images/logo.png'

import Button from '../components/input/Button'
import Checkbox from '../components/input/Checkbox'
import Input from '../components/input/Input'
import firebase, { auth } from '../firebase/config'

import './login.css'

function Login(props) {
  const [inputs, setInputs] = useState({})

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleGoogleLogin = () => {
    const authProvider = new firebase.auth.GoogleAuthProvider()

    auth
      .signInWithPopup(authProvider)
      .then((result) => {
        const credential = result.credential

        console.log('credential: ', credential)

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken
        console.log('token: ', token)
        // The signed-in user info.
        const user = result.user
        console.log('user: ', user)
        // ...
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="login__container"
    >
      <form className="form" onSubmit={handleSubmit}>
        <a href="/" className="form__logo ">
          <img src={logo} alt="company logo" className="form__logo-inner" />
        </a>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
        />
        <Checkbox />
        <Button title="Đăng nhập" onSubmit={handleSubmit} />
        <span className="form-delimiter">hoặc đăng nhập với</span>
        <div className="form-social">
          <Button
            icon="bx bxl-facebook"
            platform="fb"
            onSubmit={handleGoogleLogin}
          />
          <Button
            icon="bx bxl-twitter"
            platform="tw"
            onSubmit={handleGoogleLogin}
          />
          <Button
            icon="bx bxl-google"
            platform="gg"
            onSubmit={handleGoogleLogin}
          />
        </div>
        <span className="form-txt">
          Chưa có tài khoản?
          <a href="/">Đăng ký!</a>
        </span>
        <span className="form-txt">
          <a href="/">Quên mật khẩu?</a>
        </span>
      </form>
    </div>
  )
}

export default Login
