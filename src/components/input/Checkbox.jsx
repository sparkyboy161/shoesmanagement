import React from 'react'

import './input.css'

function Checkbox() {
  return (
    <div className="form-group form-group-checkbox">
      <input type="checkbox" name="remember" readOnly />
      <label htmlFor="remember">
        Remember Me
        <i className="bx bx-check"></i>
      </label>
    </div>
  )
}

export default Checkbox
