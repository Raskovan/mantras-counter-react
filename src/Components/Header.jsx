import React from 'react'
import logoWhite from '../assets/01-logo@2x.png'
import logoBlack from '../assets/01-logo@2x_grey.png'
import '../styles/Header.css'

function Header() {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)')
  const logo = darkMode.matches ? logoBlack : logoWhite

  return (
    <div className="header_container">
      <header className="content_container">
        {/* <div className="center_name">Diamond Way Buddhist Center NYC</div> */}
        <div
          style={{
            marginLeft: 'auto',
            background: `url(${logo}) no-repeat left top / 235px 47px`,
            width: '235px',
            position: 'relative',
            top: '23px'
          }}
        />
      </header>
      {/* <div className="center_name_mobile">Diamond Way Buddhist Center NYC</div> */}
    </div>
  )
}

export default Header
