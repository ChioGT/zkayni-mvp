import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to='/' className='logo'><h1></h1></Link>
        <wl className='menu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/airdrop'>Airdrop Manager</Link></li>
            <li><Link to='/beneficiary'>Beneficiaries</Link></li>
            <li><Link to='/about'>About Project</Link></li>
        </wl>
    </nav>
  )
}

export default Navbar