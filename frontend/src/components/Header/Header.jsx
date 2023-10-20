import React from 'react'
import logo from "../../assets/images/logo.png"

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
]

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* =================== logo ==================== */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* =================== menu ==================== */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">

            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header