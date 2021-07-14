import React from 'react'

import './input.css'

function Button(props) {
  const { title, icon, platform, onSubmit } = props
  return icon ? (
    <button className={`form-social-item ${platform}`} onClick={onSubmit}>
      <i className={icon}></i>
    </button>
  ) : (
    <button className="form-btn" onClick={onSubmit}>
      {title}
    </button>
  )
}

export default Button
