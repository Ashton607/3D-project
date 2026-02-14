import React from 'react'
import logo  from '../assets/logo.svg'
import search  from '../assets/search.svg'
import cart  from '../assets/cart.svg'
import { Navlinks } from '../constants/Index'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src={logo} alt="Apple logo" />


            <ul>
                {Navlinks.map((link) => (
                    <li key={link.label}>
                    <a href={link.label}>{link.label}</a>
                    </li>
                ))}
            </ul>

            <div className="flex-center gap-3">
                <button>
                    <img src={search} alt="Search" />
                </button>
                <button>
                    <img src={cart} alt="Cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
