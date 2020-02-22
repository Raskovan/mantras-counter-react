import React from 'react'
import '../styles/MantrasForm.css'

export default function MantrasForm(props) {
  const { inputData, handleSubmit, handleChange } = props
  return (
    <div className="mantras-form-container">
      <form autoComplete="off" onSubmit={handleSubmit} className="mantras_form">
        <div className="mantras-form-input">
          <input
            type="number"
            name="mantras_count"
            placeholder="Number"
            value={inputData.mantras_count}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            maxLength="16"
            value={inputData.name}
            onChange={handleChange}
          />
          <button type="submit">+</button>
        </div>
      </form>
    </div>
  )
}
