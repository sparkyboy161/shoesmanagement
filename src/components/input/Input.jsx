import React from 'react'

import './input.css'

function Input(props) {
  const { type, placeholder, name, onChange } = props
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-input"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
      <span className="form-input-icon err">
        <i className="bx bx-error-circle"></i>
      </span>
      <span className="form-input-icon success">
        <i className="bx bx-check-circle"></i>
      </span>
      <span className="form-input-err-msg" data-err-for="signin-email"></span>
    </div>
  )
}

export default Input
