import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import backgroundImage from '../assets/images/background-image.jpeg'
import logo from '../assets/images/logo.png'

import Button from '../components/input/Button'
import Checkbox from '../components/input/Checkbox'
import Input from '../components/input/Input'
import { setLoginSuccess } from '../redux/authSlice'

import './login.css'

function Login(props) {
  const [inputs, setInputs] = useState({})
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('1')
    console.log('Inputs: ', inputs)
  }

  const handleLogin = () => {
    const setLoginSuccessAction = setLoginSuccess(null)
    localStorage.setItem('isLogin', 1234)
    dispatch(setLoginSuccessAction)
    props.history.push('/')
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
          <Button icon="bx bxl-facebook" platform="fb" onSubmit={handleLogin} />
          <Button icon="bx bxl-twitter" platform="tw" />
          <Button icon="bx bxl-google" platform="gg" />
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
