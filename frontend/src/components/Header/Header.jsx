import {useEffect, useRef} from 'react'
import logo from "../../assets/images/logo.png"
import {navLinks, Link} from 'react-router-dom'

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
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