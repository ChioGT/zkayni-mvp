import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <a href='/' className='logo'><h1></h1></a>
        <wl className='menu'>
            <li><a href='/'>Home</a></li>
            <li><a href='/airdrop'>Airdrop Manager</a></li>
            <li><a href='/beneficiary'>Beneficiaries</a></li>
            <li><a href='/about'>About Project</a></li>
        </wl>
    </nav>
  )
}

export default Navbar