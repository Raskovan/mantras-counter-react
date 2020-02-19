import React from 'react'
import '../styles/Loader.css'

export default function Loader() {
  return (
    <div className="mala_loader">
      <img
        src={require(`../assets/mala.png`)}
        alt="Mala"
        className="mala_image"
      />
    </div>
  )
}
